const asusLaptop = {
  id: "quer-1234",
  categories: ["laptop"],
  name: "laptop asus",
  price: {
    original: 1899.99,
    discountedPrice: 1849.99,
    rate: 12,
    otherDiscounts: [
      {
        provider: "flip",
        discounts: 50,
      },
    ],
    seller: {
      name: "eMag",
      link: "/seler/eMag",
    },
  },
  configuration: {
    "Alege tip procesor": [
      {
        label: "i3",
        link: "/products/laptops/nume-laptop-i3",
        isAvailable: true,
      },
      {
        label: "i5",
        link: "/products/laptops/nume-laptop-i3",
        isAvailable: false,
      },
    ],
    "Alege capacitate memorie": [
      {
        label: "8gb",
        link: "/products/laptops/nume-laptop-16Gb",
        isAvailable: false,
      },
    ],
  },
};

const appleLaptop = {
  id: "quer-1234",
  categories: ["laptop"],
  name: "macbook pro",
  price: {
    original: 6199.99,
    discountedPrice: 6189.99,
    rate: 6,
    otherDiscounts: [{}],
    seller: {
      name: "apple",
      link: "/seller/apple",
    },
  },
  configuration: {
    "Alege tip procesor": [
      {
        label: "m1",
        link: "/products/laptops/nume-laptop-m1",
        isAvailable: true,
      },
      {
        label: "m1-max",
        link: "/products/laptops/nume-laptop-m1-max",
        isAvailable: false,
      },
    ],
    "Alege capacitate memorie": [
      {
        label: "16gb",
        link: "/products/laptops/nume-laptop-16Gb",
        isAvailable: false,
      },
      {
        label: "32gb",
        link: "/products/laptops/nume-laptop-32Gb",
        isAvailable: true,
      },
    ],
  },
};

const products = [asusLaptop, appleLaptop];

// function are hoisted
// js face in prima tura alocare de resurse
// a 2a tura este sa treaca prin cod sa-l execute

dainAlex();

function dainAlex() {
  console.log("executat");
}

dainAlex();

//mod de apelare functie

function dainAlexTwo(text) {
  console.log(text);
}

function dainAlexThree(number, text) {
  console.log(number, text);
}

// arrow functions are not hoisted
// functionOne();

const functionOne = () => {
  console.log("arrow function one");
};

const functionTwo = (arg1) => {
  console.log(arg1);
};

function handleCalculateProductDiscount(product) {
  const { price } = product;

  const discountValue = price.original - price.discountedPrice;

  return Math.round(discountValue);
}

console.log(handleCalculateProductDiscount(asusLaptop));
console.log(handleCalculateProductDiscount(appleLaptop));

function handleCalculateRate(product) {
  const { price } = product;
  const rate = price.discountedPrice / price.rate;
  return rate.toFixed(2);
}

console.log(handleCalculateRate(asusLaptop));
console.log(handleCalculateRate(appleLaptop));

function handleGenerateProductCard(product) {
  document.body.innerHTML += `
    <h1>${product.name}</h1>
    <p class="line-through">${product.price.original}</p>
    <p class="font-bold">${product.price.discountedPrice}</p>
    <p>Economisesti: ${handleCalculateProductDiscount(product)} Lei</p>
    <P>Sau il poti achizitiona in ${
      product.price.rate
    } rate de ${handleCalculateRate(product)} Lei</P>
    `;
}

handleGenerateProductCard(asusLaptop);
handleGenerateProductCard(appleLaptop);

// genereaza toate detaliile de produs intr-un card stilizat cu tailwind
// card cu toate detaliile de produs
// adaugati in obiect poza locala
// imagini as a strig ""

console.log(appleLaptop.configuration["Alege tip procesor"]);
