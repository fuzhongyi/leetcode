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
    nav: [{ text: "指南", link: "/guide/" }],
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
          ],
        },
      ],
    },
  },
};
