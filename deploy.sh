#!/usr/bin/env bash
#
# Adapted from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
# I mean, that would have worked fine, but reasons.
#
TARGET_BRANCH="master"


echo "TRAVIS_PULL_REQUEST: ${TRAVIS_PULL_REQUEST}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "SOURCE_BRANCH: ${SOURCE_BRANCH}"
echo "TARGET_BRANCH: ${TARGET_BRANCH}"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != $TARGET_BRANCH ]; then
  echo "Skipping Deployment"
  exit 0
fi

# Save some useful information
SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
REPO=`git config remote.origin.url`
SSH_REPO=REPO
SHA=`git rev-parse --verify HEAD`


git clone $REPO dist
cd dist
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

# Clear out the dist folder
rm -rf dist/**/* || exit 0

# Actually build the stuff
npm run build


echo "BUILD COMPLETED: NOW DEPLOYING"


cd dist
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# Commit the changes
git add -A .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Adding the ssh key from the decrypted file
echo "ADDING SSH KEY"
eval `ssh-agent -s`
ssh-add deployment/key_rsa

# Now that we're all set up, we can push.
echo "PUSHING TO ${SSH_REPO} // ${TARGET_BRANCH}"
git push $SSH_REPO $TARGET_BRANCH
