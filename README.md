# download-github-folder

## What This Project Does

This project allows you to download any folder inside a repo on github.

## Requirements

You need to have installed latest node, git, npm

## Initialization

Execute this:

```bash
# Clone this repo:
git clone -b main --depth 1 https://github.com/nikelborm/download-github-folder.git
# cd to it:
cd download-github-folder
# Install dependencies:
npm install
# Create .env file:
cp template.env .env
```

Then [get personal github access token here](https://github.com/settings/tokens)

## Environment Variables

- `GITHUB_ACCESS_TOKEN`: This is your personal access token from GitHub. It is used to authenticate your requests to the GitHub API. You can generate one from your GitHub account settings.
- `GITHUB_REPO_OWNER`: This is the username of the owner of the repository you are trying to download from. For example, if the repository's URL is `https://github.com/apache/superset`, the owner is `apache`.
- `GITHUB_REPO_NAME`: This is the name of the repository you are trying to download from. In the example above, the repository name is `superset`.
- `PATH_TO_DIRECTORY_IN_REPO`: This is the path to the directory you want to download. It can be directory that lies inside root of repo like `docker` or it can be some nested directory like `docker/nginx`.
- `COMMIT_SHA_HASH_OR_BRANCH_NAME_OR_TAG_NAME`: This is the commit SHA hash, branch name, or tag name you want to download from. If you don't specify it, the default branch in the repository will be used.
- `PATH_TO_LOCAL_DIR_INTO_WHICH_CONTENTS_OF_REPO_DIR_WILL_BE_PUT`: All files and directories from directory of remote repository will be put in a specific local directory and we specify it's path. If it doesn't exist, it will be automatically created.

## How to use

1. Set env variables in `.env` file
2. Run `npm start`

## TODO

1. add posibility for quick request of token through browser (script opens a window and runs the request from as user )
2. make smarter determinator of a main branch ([info](https://chatgpt.com/share/675f3a23-2638-800d-a5ea-3873f01aad0a))
3. support downloading not only folders, but also individual files
4. support creating downloading plans, where user can specify more than one entity (folder/file) to download
5. support git submodules
6. fix shit that files created with different flags than they are in repo (for example scripts missing x flag)
