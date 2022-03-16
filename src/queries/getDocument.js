import { gql } from "@apollo/client";

export const GET_DOCUMENT = gql`
  query graphql {
    share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;
