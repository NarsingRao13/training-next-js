import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    image: ({ node: { asset } }) => {
      console.log(asset);
      return <img src={asset} />;
    },
  },
};

const ProductType = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
);

export default ProductType;
