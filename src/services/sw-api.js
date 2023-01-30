const baseUrl = 'https://swapi.dev/api/starships'

export async function getStarshipList() {
  const res = await fetch (`${baseUrl}/api/starships`)
  return res.json()
}