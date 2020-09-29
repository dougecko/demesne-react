async function getMonster(index) {
  //const url = `./${index}.json`;
  const url = `https://dnd5eapi.co/api/monsters/${index}`;
  console.log(url);

  const response = await fetch(url, {
    method: "GET",
    //   mode: 'no-cors',
    mode: "cors",
    cache: "default",
    redirect: "follow",
    referrerPolicy: "no-referrer-when-downgrade"
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   }
  });
  // const response = await fetch(url);
  const monster = await response.json();
  return monster;
  // .then((response) => {
  //   console.log(response)
  //   return response.json()
  // })
  // .then((data) => {
  //   // Work with JSON data here
  //   console.log(data)
  //   // return data
  // })
  // .catch((err) => {
  //   // Do something for an error here
  //   throw err
  // });
}

export default getMonster;