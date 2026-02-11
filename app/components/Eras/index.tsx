import { performRequest } from "@/lib/datocms";
import { GetErasContentDocument } from "@/graphql/generated";
import Image from "next/image";
import parse from 'html-react-parser';

const ErasContentQuery = /* GraphQL */`
  query getErasContent {
    allEras {
      title
      description(markdown: true)
      factoids {
        title
        description(markdown: true)
        gallery {
          url
        }
      }
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
          {parse(era.description ?? "")}
          {era.factoids.map((factoid) => (
            <div key={factoid.title}>
              <h3>{factoid.title}</h3>
              {parse(factoid.description ?? "")}
              <Image src={factoid.gallery[0]?.url ?? ""} alt={factoid.title ?? ""} width={100} height={100} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
