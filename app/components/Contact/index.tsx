import { performRequest } from "@/lib/datocms";
import { GetContactContentDocument } from "@/graphql/generated";

const ContactContentQuery = /* GraphQL */`
  query GetContactContent {
    contact {
      callToAction {
        url
        title
        description
        buttonText
      }
      email
      schedulingLink
      socialMedia {
        icon {
          url
        }
        platform
        url
      }
    }
  }
`;

export default async function Contact() {
  const { contact } = await performRequest(GetContactContentDocument);
  return <div>{contact?.email}</div>
}
