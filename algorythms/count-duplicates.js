const countDuplicatesRecursive = (str = "", target = "") => {
  if (!!str.length || target.length > 1) return 0;

  const isTarget = str[0] === target;

  if (str.length === 1) return +isTarget;

  return +isTarget + countDuplicatesRecursive(str.slice(1), target);
};
