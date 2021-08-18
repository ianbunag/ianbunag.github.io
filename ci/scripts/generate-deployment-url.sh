#!/usr/bin/env bash

CI_REPOSITORY_URL=$1
ACCESS_TOKEN=$2

echo $CI_REPOSITORY_URL | sed -r "s/^(.*gitlab-ci-token:)(.*)(@gitlab.com.*)$/\1$ACCESS_TOKEN\3/g"
