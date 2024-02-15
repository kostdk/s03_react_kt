async function fetchShop(){
    const response = await fetch("http://localhost:3333/categories/all");
    const data = await response.json();
    return data
    }

console.log(fetchShop())
console.log(fetchShop())
