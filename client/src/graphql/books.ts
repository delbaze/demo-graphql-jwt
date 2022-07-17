import { gql } from  "@apollo/client";
    
export  const  LIST_BOOKS  =  gql`
    query  ListBooks {
        listBooks {
            title
            author
        }
    }
`;