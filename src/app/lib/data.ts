const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5ba4622e8fmshe968874f71e9100p161f1djsn9e3da898bf92',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const getRecipiesUrl = (mealName? : string) => {
  const url = `https://tasty.p.rapidapi.com/recipes/list?q=${mealName || 'soup'}`;
  //@todo: check API, may be I can ask just list without soup
  return fetch(url, options)
}

const getRecipieUrl = async (id: string) => {
  const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;

  return await fetch(url, options)
}

export async function getRecipies(mealName?: string) {
  try {
    const res = await getRecipiesUrl(mealName)
    return res.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
  }
}

export async function getRecipie(id: string) {
  try {
    const res = await getRecipieUrl(id)
    return res.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
  }
}
