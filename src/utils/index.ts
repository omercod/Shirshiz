export function createPageUrl(pageName) {
  return pageName === "Home"
    ? "/"
    : "/" + pageName.toLowerCase().replace(/ /g, "-");
}
export function createRecipeUrl(slug) {
  return `/recipes/${slug}`;
}
