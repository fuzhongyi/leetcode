#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:fuzhongyi/leetcode.git master:gh-pages

cd -
