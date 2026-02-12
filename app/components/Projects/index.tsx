import { performRequest } from "@/lib/datocms";
import { GetProjectsContentDocument } from "@/graphql/generated";
import Image from "next/image";
import parse from 'html-react-parser';

const ProjectsContentQuery = /* GraphQL */`
  query GetProjectsContent {
    allProjects {
      title
      description
      url
      gallery {
        url
        title
      }
      tags {
        name
      }
    }
  }
`;

export default async function Projects() {
  const { allProjects } = await performRequest(GetProjectsContentDocument);
  return (
    <div>
      {allProjects.map((project) => (
        <div key={project.title}>
          <h2>{project.title}</h2>
          {parse(project.description ?? "")}
          <Image src={project.gallery[0]?.url ?? ""} alt={project.title ?? ""} width={100} height={100} />
          {project.tags.map((tag) => (
            <span>{tag.name}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
