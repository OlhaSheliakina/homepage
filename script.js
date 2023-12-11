async function fetchJokes() {
  const response = await fetch('jokes.json');
  return await response.json();
}

let currentJokeIndex = 0;

async function displayNextJoke() {
  const jokes = await fetchJokes();

  if (currentJokeIndex < jokes.length) {
    alert(jokes[currentJokeIndex]);
    currentJokeIndex++;
  } else {
    alert('No more jokes!');
  }
}
