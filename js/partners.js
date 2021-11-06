const renderItems = (data) => {
  let array = data
  for (let i in array) {
    console.log(array[i]);
  }

}

fetch('https://test-7dd5c-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error)
  })