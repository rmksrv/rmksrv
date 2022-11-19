export const load = async ({ parent }) => {
  const { allWorks } = await parent();
  const works = allWorks;

  return {
    works,
  };
};
