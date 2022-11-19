export const load = async ({ parent }) => {
  const { allPosts, allWorks } = await parent();
  const posts = allPosts;
  const works = allWorks;
  
  return {
    posts,
    works,
  };
};
