const baseURL = `https://api.themoviedb.org/3/search/movie`;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (query) => {
  try {
    const res = await fetch(`${baseURL}?query=${query}&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Ocurrió un error:", error);
    return [];
  }
};
