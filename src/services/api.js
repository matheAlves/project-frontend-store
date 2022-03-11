export async function getCategories() {
  try {
    const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await fetchAPI.json();
    return categories;
  } catch (error) {
    HTMLFormControlsCollection.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const categoryAndQuery = await fetchAPI.json();
    return categoryAndQuery;
  } catch (error) {
    console.log(error);
  }
}
