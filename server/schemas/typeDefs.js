const typeDefs = `
    type User {
        _id: ID
        username: String
        savedBooks: [String]!
        bookCount: Int
        email: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(userId: ID!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(userId: ID!, book: String!): User
        deleteBook(bookId: String!): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;