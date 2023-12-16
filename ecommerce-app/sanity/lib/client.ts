import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk6vqakiJmW0GLF5YTUafo3yZpFSnhfwFIy0qVwAmWRfqSg3bBke2CMCknLkw6Xklx5mJXEOrv1WJvAHnRmnO2S3yjWSFnUhqbcZFATCKMLdX0wOe8mqgRZNq4Ud8lpjaL1peTvpMS86jvrOfBjoQ95w6Sx9jE0BS04dd9lVDEbrBezIBYS9",
})
