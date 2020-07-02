const inject = (items, sections) => {
  const result = [...items];
  sections
    .sort((s1, s2) => s2.index - s1.index)
    .forEach((section) => {
      result.splice(section.index, 0, section.content);
    });
  return result;
};
export { inject };
