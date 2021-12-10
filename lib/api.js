import client from "./sanity";

const productFields = `
    productName,
    productID,
    price,
    productDescription,
    "slug":slug.current,
    "productType":proType->{type},
    "image":productImage.asset->url
    `;

export async function getBlogs() {
  // const blogs = await client.fetch(`*[_type == "products"]{productName,productID}`);
  const products = await client.fetch(
    `*[_type == "products"]{${productFields}}`
  );
  return products;
}

export async function getAllDocuments() {
  //const allP = await client.fetch(`*[_type == "products"]`);
  const allP = await client.fetch(
    `*[_type in ["products", "productType"]] | order(_createdAt desc)`
  );
  return allP;
}

const productTypeFields = `
    type,
    ptDescription[]{...,"image":asset->url}
    `;

export async function getAllProductType() {
  const productTypes = await client.fetch(
    `*[_type == "productType"]{${productTypeFields}}`
  );
  return productTypes;
}
