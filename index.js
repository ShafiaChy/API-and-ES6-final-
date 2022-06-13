// console.log("Hi Future Awesome Web Developers!");

const parentDiv = document.getElementById("parent-div");
const error = document.getElementById("error");

const arr = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    displayProduct(data);
    arr.push(data); //arr.push has been used so that we dont have to write the fetch code  more than once.This is an optimized way
  });
//To show data
const displayProduct = (products) => {
  for (const product of products) {
    // console.log(product);
    const div = document.createElement("div");
    div.className = "col child my-5 px-5";
    div.innerHTML = `
    <div class="card div-height pt-4">
      <img src=${
        product.image
      } class="card-img-top w-75 image-height d-flex mx-auto" alt="...">
      <div class="card-body">
        <h6 class="card-title">${product.title}</h6>
        <p class="card-text">${product.description.slice(0, 130)}...</p>
    <button class="btn btn-danger" onclick="loadDetails('${
      product.id
    }')">See more</button>

    </div>
        
    </div>`;
    parentDiv.appendChild(div);
  }
};
//To load more details
const loadDetails = (id) => {
  const details = arr[0].find((d) => d.id == id);
  const div = document.createElement("div");
  div.className = "col child my-5 px-5";
  parentDiv.innerHTML = "";
  div.innerHTML = `
  <div class="card div-two-height pt-4">
      <img src=${details.image} class="card-img-top w-75 image-height d-flex mx-auto" alt="...">
      <div class="card-body">
        <h6 class="card-title">${details.title}</h6>
        <p class="card-text">${details.description}</p> 
        <p class="card-text">Price: $${details.price}</p> 
    </div>`;
  parentDiv.appendChild(div);
};

// To search the data and to display the search result
const searchProduct = () => {
  const searchField = document.getElementById("search-input");
  const searchValue = searchField.value;
  fetch(`https://fakestoreapi.com/products/category/${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
      parentDiv.innerHTML = "";
      for (const product of data) {
        const div = document.createElement("div");
        div.className = "col child my-5 px-5";

        div.innerHTML = `
        <div class="card div-height pt-4">
            <img src=${
              product.image
            } class="card-img-top w-75 image-height d-flex mx-auto" alt="...">
            <div class="card-body">
              <h6 class="card-title">${product.title}</h6>
              <p class="card-text">${product.description.slice(0, 130)}...</p>
              <button class="btn btn-danger" onclick="loadDetails('${
                product.id
              }')">See more</button>
              <p class="card-text">Price: $${product.price}</p>
          </div>`;
        parentDiv.appendChild(div);
      }
    });
};

//This is another way to write the searchProduct function.An optimized way
// const searchProduct = () => {
//   const searchField = document.getElementById("search-input");
//   const searchValue = searchField.value;
//   if (searchValue === "") {
//     error.innerText = "Please,write something";
//   } else if (!isNaN(searchValue)) {
//     error.innerText = "Do not use numbers";
//   } else {
//     error.innerText = "";

//     const searchedProduct = arr[0].filter((dt) =>
//       dt.category.startsWith(`${searchValue}`)
//     );
//     console.log(searchedProduct);
//     parentDiv.innerHTML = "";
//     if (searchedProduct.length == 0) {
//       error.innerText = "The product you are looking for does not exist.";
//     } else {
//       for (const product of searchedProduct) {
//         const div = document.createElement("div");
//         div.className = "col child my-5 px-5";

//         div.innerHTML = `
//           <div class="card div-height pt-4">
//               <img src=${
//                 product.image
//               } class="card-img-top w-75 image-height d-flex mx-auto" alt="...">
//               <div class="card-body">
//                 <h6 class="card-title">${product.title}</h6>
//                 <p class="card-text">${product.description.slice(0, 130)}...</p>
//                 <button class="btn btn-danger" onclick="loadDetails('${
//                   product.id
//                 }')">See more</button>
//                 <p class="card-text">Price: $${product.price}</p>
//             </div>`;
//         parentDiv.appendChild(div);
//       }
//     }
//   }
// };
