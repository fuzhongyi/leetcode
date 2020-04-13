module.exports = {
  title: "leetcode",
  description: "Just playing around",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "GitHub", link: "https://github.com/fuzhongyi/leetcode" },
    ],
    sidebar: [
      {
        title: "递归",
        collapsable: false,
        children: ["/guide/recursion", "/guide/recursion/print-reverse.md"],
      },
    ],
  },
};
