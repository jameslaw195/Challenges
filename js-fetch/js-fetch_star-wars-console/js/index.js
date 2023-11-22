const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const result = await fetch(url);
    // console.log(result);
    if (result.ok) {
      const data = await result.json();
      characters = data;
      console.log(data.results[2].eye_color);
    } else {
      console.log("Bad Response");
    }
  } catch (error) {
    console.log("An Error Occured", error);
  }
}

fetchData();
