import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "dyvp2m5j",
  dataset: "production",
  useCdn: true,
})
