// @ts-check
'use strict';

import { Octokit } from "@octokit/core";

/**
* @param {{
*   githubAccessToken: string,
*   repo: {
*     owner: string,
*     name: string
*   },
*   pathToDirectory?: string,
*   commitShaHashOrBranchNameOrTagName?: string,
* }} param0
*/
export async function downloadDirectoryContentsMetaInfo({
  githubAccessToken,
  repo,
  commitShaHashOrBranchNameOrTagName,
  pathToDirectory = ''
}) {
  const octokit = new Octokit({
    auth: githubAccessToken
  });

  const { data: contentsOfDirectory } = await octokit.request(
    'GET /repos/{owner}/{repo}/contents/{path}',
    {
      owner: repo.owner,
      repo: repo.name,
      path: pathToDirectory,
      ref: commitShaHashOrBranchNameOrTagName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      },
    }
  )

  if (!Array.isArray(contentsOfDirectory))
    throw new Error(`${pathToDirectory} is not a directory`);

  return contentsOfDirectory
}
