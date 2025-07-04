export function createPageUrl(pageName) {
  return "/" + pageName.toLowerCase().replace(/ /g, "-");
}

export function createRecipeUrl(slug) {
  return `/recipes/${slug}`;
}
