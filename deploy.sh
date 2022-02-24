#!/usr/bin/env sh

set -e
npm run build

git add -A
git commit -m 'fix typo for japanese name'
git push -f https://github.com/lemononmars/boardle.git main

cd dist

git init
git add -A
git commit -m 'deploy to gh-pages'

git push -f https://github.com/lemononmars/boardle.git master

cd -