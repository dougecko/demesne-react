const getMonster1 = function (index) {
  // const url = `https://dnd5eapi.co/api/monsters/${index}`;
  const url = `./${index}.json`;
  console.log(url);

  function status(response) {
    console.log(`Response: ${response.statusText}`);
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  function json(response) {
    return response.json()
  }

  return fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
  })
    .then(status)
    .then(json)
    // .then(data => {
    // console.log(data);
    // })
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
    }).catch(function (error) {
      console.log('Request failed', error);
      return undefined;
    });
  // .catch(err => {
  // return undefined;
  // })
};

const getMonster = function (index) {
  const url = `./${index}.json`;
  console.log(url);

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      // Work with JSON data here
      console.log(data)
      return data
    })
    .catch((err) => {
      // Do something for an error here
      throw err
    });
}

export default getMonster;