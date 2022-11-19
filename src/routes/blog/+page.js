export const load = async ({ parent }) => {
  const { allPosts } = await parent();
  const posts = allPosts;

  return {
    posts,
  };
};
