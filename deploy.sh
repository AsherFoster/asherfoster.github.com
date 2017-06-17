#!/usr/bin/env bash
#
# Adapted from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
# I mean, that would have worked fine, but reasons.
#

echo "TRAVIS_PULL_REQUEST: ${TRAVIS_PULL_REQUEST}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "SOURCE_BRANCH: ${SOURCE_BRANCH}"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then
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

rm -rf out/**/* || exit 0

npm run build

cd out
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if git diff --quiet; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add -A .
git commit -m "Deploy to GitHub Pages: ${SHA}"

ssh-add deployment/key_rsa

# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH
