const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.AUTH_SECRET,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const getRecipesUrl = (mealName? : string) => {
  const url = `https://tasty.p.rapidapi.com/recipes/list?q=${mealName}`;
  return fetch(url, options)
}

const getRecipeUrl = async (id: string) => {
  const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;

  return await fetch(url, options)
}

export async function getRecipes(mealName?: string) {
  try {
    const res = await getRecipesUrl(mealName)
    return res.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
  }
}

export async function getRecipe(id: string) {
  try {
    const res = await getRecipeUrl(id)
    return res.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
  }
}
