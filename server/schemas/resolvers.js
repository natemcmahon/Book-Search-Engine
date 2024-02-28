const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
    },

    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password});
            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { userId, book }) => {
            return Book.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { books: book },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        deleteBook: async (parent, { bookId }) => {
            return Book.findOneAndDelete({ _id: bookId})
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError
            }
      
            const token = signToken(user);
            return { token, user };
        }, 
    },
};

module.exports = resolvers;