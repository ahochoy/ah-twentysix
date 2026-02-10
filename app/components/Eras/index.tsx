import { performRequest } from "@/lib/datocms";
import { GetErasContentDocument } from "@/graphql/generated";

const ErasContentQuery = /* GraphQL */`
  query getErasContent {
    allEras {
      title
      description
    }
  }
`;

export default async function Eras() {
  const { allEras } = await performRequest(GetErasContentDocument);
  return (
    <div>
      {allEras.map((era) => (
        <div key={era.title}>
          <h2>{era.title}</h2>
          <p>{era.description}</p>
        </div>
      ))}
    </div>
  );
}
