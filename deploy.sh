#!/usr/bin/env bash
#
# Adapted from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
# I mean, that would have worked fine, but reasons.
#
# Save some useful information
REPO=`git config remote.origin.url`
#SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SSH_REPO=$REPO
SHA=`git rev-parse --verify HEAD`
TARGET_BRANCH="gh-pages"
SOURCE_BRANCH="master"


echo "TRAVIS_PULL_REQUEST: ${TRAVIS_PULL_REQUEST}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "REPO: ${REPO}"
echo "SSH_REPO: ${SSH_REPO}"
echo "SOURCE_BRANCH: ${SOURCE_BRANCH}"
echo "TARGET_BRANCH: ${TARGET_BRANCH}"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != $SOURCE_BRANCH ]; then
  echo "Skipping Deployment"
  exit 0
fi

# Actually build the stuff
echo "RUNNING BUILD"
ng build --prod --base-href="https://asherfoster.com"




# Adding the ssh key from the decrypted file
echo "ADDING SSH KEY"
eval `ssh-agent -s`
ssh-add deployment/key_rsa

echo "BUILD COMPLETED: NOW DEPLOYING"
angular-cli-ghpages --message="Automatic Deployment via Travis CI" --no-silent
