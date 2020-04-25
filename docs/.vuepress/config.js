module.exports = {
  title: "LeetCode",
  dest: "dist",
  description: "leetcode 题解，记录自己 leetcode 的解题之路",
  themeConfig: {
    editLinks: true,
    smoothScroll: true,
    repo: "fuzhongyi/leetcode",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "博客", link: "https://xyue.me" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "递归",
          collapsable: false,
          children: [
            "/guide/recursion/principle",
            "/guide/recursion/print-reverse",
            "/guide/recursion/swap-pairs",
            "/guide/recursion/triangle",
            "/guide/recursion/triangle2",
            "/guide/recursion/reverse-list",
            "/guide/recursion/fibonacci",
            "/guide/recursion/climb-stairs",
            "/guide/recursion/pow",
            "/guide/recursion/merge-two-lists",
          ],
        },
        {
          title: "数组",
          collapsable: false,
          children: [
            "/guide/array/move-zeroes",
            "/guide/array/remove-element",
            "/guide/array/remove-duplicates",
          ],
        },
      ],
    },
  },
};