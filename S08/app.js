// setTimeout(() => {
//   alert("am ajuns");
// }, 10000);

// console.log("ceva");

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

const shouldResolve = true;

const firstPromise = new Promise((resolved, rejected) => {
  if (shouldResolve) {
    resolved("OK");
  } else {
    rejected("Failed");
  }
});

firstPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done executing promise");
  });

const baseURL = "https://reqres.in/";

const data = fetch(baseURL + "api/users")
.then((res) => res.json())
.then((json) => console.log(json))
.catch((e) => console.log(e))
.finally(() => console.log("Done"));

console.log(data);

async function getData() {

const ENDPOINTS = {
  USERS: "/API/USERS",
};

// asa se fac netwoork request
async function getData() {
  try {
    const reqrest = await fetch(baseURL + ENDPOINTS.USERS);
    const response = await reqrest.json();

    console.log(response);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
}

getData();

async function getPostData() {
  try {
    const reqrest = await fetch(baseURL + ENDPOINTS.USERS, {
      method: "POST",
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    });
    const response = await reqrest.json();

    console.log(response);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
}

getPostData()

const urlParams = window.location.search;

// 2 html separate
// primul indexhtml va face un request catre https://reqres.in/api/users
// si va genera in html cate un card pentru fiecare user cu toate datele

// fiecare card va contine un link care arata a button ce redirectioneaza pe /user.html?id=x iunde ix este id-ul userului

// user.html va face un network request ;a https://reqres.in/api/users/X
// unde x este id-ul din url
// va genera o pagina frumoasa pentru acel user

// afla cum se citeste fiecare valoare din url params

//articole pe fetch

// pana duminica seara


//i need 2 html files, the first is named index.html and in the file theres going to be a network request to https://reqres.in/api/users and it will generate in the index.html a card with each of the users with their data, each card will contain a link with a button that redirections to /user.html?id=x where ix is the id of the user, the second html will be named user.html and it will make a network request to https://reqres.in/api/users/X where x is the id from the url, it will geratate a beautiful page for the user made in tailwild css with the modern ui experience
