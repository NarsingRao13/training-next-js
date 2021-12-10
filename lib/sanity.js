import sanityClient from "@sanity/client";

const options = {
  dataset: "production",
  projectId: "qlzkxt98",
  useCdn: process.env.NODE_ENV === "production",
};

export default sanityClient(options);
