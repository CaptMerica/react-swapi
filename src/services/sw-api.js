const baseUrl = 'https://swapi.dev/api/starships'

export async function getAllStarships() {
  const res = await fetch (`${baseUrl}/api/starships`)
  return res.json()
}

export async function StarshipPage() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}