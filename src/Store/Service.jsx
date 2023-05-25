export async function createCartAPI(data) {
  var response = await fetch("http://localhost:8000/cart", {
    metdod: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json()
}

export async function deleteCartAPI(data) {
    var response = await fetch("http://localhost:8000/cart", {
      metdod: "delete",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json()
}

export async function getCartAPI(data) {
    var response = await fetch("http://localhost:8000/cart", {
      metdod: "get",
      headers: {
        "content-type": "application/json",
      }
    });
    return await response.json()
}