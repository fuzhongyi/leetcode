#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git add dist
git commit -m ':ghost: deploy'

# 将 dist 目录推送到 gh-pages 分支
git subtree push --prefix dist origin gh-pages

cd -