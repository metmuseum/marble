export default (srcSet) => {
  const widths = Object.keys(srcSet.sizes);
  return widths
    .map((width) => {
      return `${srcSet.sizes[width]} ${width},`;
    })
    .join("\n");
};