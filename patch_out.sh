#!/usr/bin/env bash

# Prevent the CNAME from being overwritten every deploy
echo asherfoster.com > out/CNAME

# Disable Jekyll so that _next files are served
touch out/.nojekyll
