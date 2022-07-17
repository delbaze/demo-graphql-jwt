import bookResolver from "./books.resolver";
import userResolver from "./user.resolver";
import { mergeResolvers } from "@graphql-tools/merge";
export default mergeResolvers([bookResolver, userResolver]);
