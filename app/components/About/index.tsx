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
    <section className="flex min-h-screen w-full bg-amber-200 justify-end">
      <div className="w-[60%] bg-blue-600 p-12">
        <div className="pb-8">
          <h2>{about?.title}</h2>
          <p>{about?.introduction}</p>
        </div>
        <ul className="grid gap-4">
          {about?.highlights.map((highlight) => (
            <li key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
