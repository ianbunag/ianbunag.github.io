# GitLab CI/CD Variables

Listed are the variables used during CI/CD, consumed in
[.gitlab-ci.yml](../.gitlab-ci.yml).

## CI_GIT_EMAIL
- Email to use when pushing bumped up package version to main branch
- Example is `runner@gitlab.example.org`
## CI_GIT_USERNAME
- Username to use when pushing bumped up package version to main branch
- Example is `Portfolio CI/CD Runner`

## ENV
- Environment variable file to be used during CD build
- Should be of type `File`

## GITLAB_ACCESS_TOKEN
- Access token to use to authorize pushing of bumped up package version to main
  branch from CI/CD
- Current token used is a
  [Personal Access Token](https://gitlab.com/-/profile/personal_access_tokens),
  with scopes `api` and `read_user`

## GSC_VERIFICATION_MAP
- Used for including
  [Google Search Console](https://search.google.com/search-console/)
  verification files in build package
- Should be of type `File`
- Entry format is `<environment-file-reference><space><file-name>`
- Where `<environment-file-reference>` is:
  - An environment variable of type `File`
  - With content provided by
    [Google Search Console](https://search.google.com/search-console/)
- Entries should be delimited by newline
- Use case:
  - Given the following entries:
  ```
  GSC_GITLAB_PERSONAL_EMAIL_VERIFICATION googlexvcpiixa6r3s77mr.html
  GSC_GITLAB_WORK_EMAIL_VERIFICATION googlesd46813r5g2wp6t3.html
  ```
  - Then the following environment (file) variables should be configured:
    - GSC_GITLAB_PERSONAL_EMAIL_VERIFICATION
    ```
    google-site-verification: googlexvcpiixa6r3s77mr.html
    ```
    - GSC_GITLAB_WORK_EMAIL_VERIFICATION
    ```
    google-site-verification: googlesd46813r5g2wp6t3.html
    ```
