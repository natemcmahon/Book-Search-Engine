import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation exampleQuery($username: String!, $email: String, $password: String) {
    createuser(username: $username, email: $email, password: $password) {
      user { 
        _id
        username 
        }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation exampleQuery($email: String!, $password: String!) {
    loginuser(email: $email, password: $password) {
        user {
            email
            password
        }
        token
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation exampleQuery($authors: [String], $description: String!, $bookId: String!, $image: String, $link: String, $title: String!) {
    savebook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
        
    }
  }
`;