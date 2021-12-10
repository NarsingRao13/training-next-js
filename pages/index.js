import ProductDetails from "../components/ProductDetails";
import ProductType from "../components/ProductType";
import { getBlogs, getAllDocuments, getAllProductType } from "../lib/api";

export default function Home({ products, allP, productTypes }) {
  console.log(productTypes);
  {
    /*debugger;*/
  }
  return (
    <>
      <p>Hello</p>
      {products?.map((product, key) => {
        return (
          <ProductDetails
            key={key}
            description={product.productDescription}
            price={product.price}
            productID={product.productID}
            productName={product.productName}
            productType={product.productType}
            slug={product.slug}
            productImage={product.image}
          ></ProductDetails>
        );
      })}

      {productTypes.map((pType) => {
        return (
          <>
            <h1>fsg {pType?.type}</h1>;
            <ProductType content={pType.ptDescription} />
          </>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const products = await getBlogs();
  const allP = await getAllDocuments();
  const productTypes = await getAllProductType();
  debugger;
  return {
    props: {
      products,
      allP,
      productTypes,
    },
  };
}
