export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'BGarr';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Adventures';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2024 BGarr, All Rights Reserved. Built using Next.JS, TailwindCSS, and Markdown.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
