//Guardamos la api en una constante
const API = 'https://api.themoviedb.org/3';

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWI1MzBmODgwMTAzNTAwMWMxMWVhNjRhYWE3NDgyZSIsInN1YiI6IjY1NzUxODdlZDQwMGYzMDEwYjA2NGMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJMySogJY54fNeRvfr3YTwOWHxYc-LAnvPeOY_W7tmA",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json())
}






