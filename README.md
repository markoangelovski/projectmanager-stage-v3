# Project Manager v3 frontend

Frontend hosted on Github repos:

- Staging: https://github.com/markoangelovski/projectmanager-stage-v3
- Production: https://github.com/markoangelovski/projectmanager-prod-v3

Git remotes:

- origin-staging: https://github.com/markoangelovski/projectmanager-stage-v3.git
- origin-production: https://github.com/markoangelovski/projectmanager-prod-v3.git

Build and deploy process:

1. Local development done on branch "development"
2. Stage changes need to be merged with branch "staging" before deployment to the staging environment
3. Npm script "deploy:stage":
   - pushes the last commit from branch "staging" to remote "origin-staging"
   - builds the project locally with "stage" REACT_APP_API_CONFIG settings
   - deploy script renames the output folder, deploys it and deletes it
4. Stage changes need to be further merged with branch "master" before deployment to the production environment
5. Npm script "deploy:prod":
   - pushes the last commit from branch "master" to remote "origin-master"
   - builds the project locally with "prod" REACT_APP_API_CONFIG settings
   - deploy script renames the output folder, deploys it and deletes it
