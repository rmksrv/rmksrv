const imports = import.meta.glob("./blog/*/*.md");
const workImports = import.meta.glob("./works/*/*.md");

export const load = async () => {
  let body = [];
  let workBody = [];
  for (const path in imports) {
    body.push(
      imports[path]().then(({ metadata }) => {
        return {
          metadata,
          path,
        };
      })
    );
  }
  for (const path in workImports) {
    workBody.push(
      workImports[path]().then(({ metadata }) => {
        return {
          metadata,
          path,
        };
      })
    );
  }

  const allPosts = await Promise.all(body);
  const allWorks = await Promise.all(workBody);

  return {
    allPosts,
    allWorks,
  };
};
