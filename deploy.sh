#!/usr/bin/env sh

set -e
npm run build
cd dist

git init
git add -A
git commit -m 'deploy to gh-pages'

git push -f https://github.com/lemononmars/boardle.git master

cd -