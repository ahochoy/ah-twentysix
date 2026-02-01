import { performRequest } from "@/lib/datocms";
import { GetAboutContentDocument } from "@/graphql/generated";

const AboutContentQuery = /* GraphQL */`
  query getAboutContent {
    about {
      title
      introduction
      highlights {
        title
        description
      }
    }
  }
`;

export default async function About() {
  const { about } = await performRequest(GetAboutContentDocument);

  return (
    <div>
      <h1>{about?.title}</h1>
      <p>{about?.introduction}</p>
      <ul>
        {about?.highlights.map((highlight) => (
          <li key={highlight.title}>{highlight.title}</li>
        ))}
      </ul>
    </div>
  );
}
