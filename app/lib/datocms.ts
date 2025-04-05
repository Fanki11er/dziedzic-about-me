import { executeQuery, ExecuteQueryOptions } from "@datocms/cda-client";
import { cache } from "react";

async function execute<T>(serializedArgs: string): Promise<T> {
  const [query, options] = JSON.parse(serializedArgs);
  return executeQuery(query, options);
}

const dedupedPerformRequest = cache(execute);

export function performRequest<T>(
  query: string,
  options?: ExecuteQueryOptions
): Promise<T> {
  return dedupedPerformRequest(
    JSON.stringify([
      query,
      {
        ...options,
        token: process.env.DATOCMS_API_TOKEN,
      },
    ])
  );
}
