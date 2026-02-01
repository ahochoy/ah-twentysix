import { executeQuery, TypedDocumentNode, ExecuteQueryOptions } from "@datocms/cda-client";

export function performRequest<Result=unknown, Variables=unknown>(query: TypedDocumentNode<Result, Variables>, options?: ExecuteQueryOptions<Variables>): Promise<Result> {
  const token = process.env.DATOCMS_API_TOKEN;
  if (!token) {
    throw new Error("DATOCMS_API_TOKEN environment variable is not set");
  }
  return executeQuery(query, {
    ...options,
    token,
    environment: process.env.DATOCMS_ENVIRONMENT,
  });
};
