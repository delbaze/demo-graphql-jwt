import { GraphQLObjectType } from "graphql";
import { IAddBookInput, IBook } from "./book.resolver.spec";

let books : Array<IBook> = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export default {
  Query: {
    listBooks: () => books,
  },
  Mutation: {
    addBook: (_: GraphQLObjectType, { addBookInput }: IAddBookInput) => {
      let newBook = { ...addBookInput };
      books = [...books, newBook];
      return newBook;
    },
  },
};
