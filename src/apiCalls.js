export const getIngredients = async () => {
  const initialFetch = await fetch('http://localhost:3000/api/v1/ingredients');
  return await initialFetch.json();
}