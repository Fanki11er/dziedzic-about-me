import { executeQuery, RawExecuteQueryOptions } from "@datocms/cda-client";
import { cache } from "react";

interface SerializedArgs {
  query: string;
  options: RawExecuteQueryOptions & {
    token: string | undefined;
    environment: string | undefined;
  };
}

const dedupedPerformRequest = cache(
  async (serializedArgs: string): Promise<unknown> => {
    return executeQuery(
      ...(JSON.parse(serializedArgs) as [string, SerializedArgs["options"]])
    );
  }
);

interface PerformRequestOptions extends Omit<RawExecuteQueryOptions, "token"> {
  token?: string;
  environment?: string;
}

export function performRequest(
  query: string,
  options: PerformRequestOptions
): Promise<unknown> {
  return dedupedPerformRequest(
    JSON.stringify([
      query,
      {
        ...options,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      },
    ])
  );
}
