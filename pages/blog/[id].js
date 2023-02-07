import { client } from "@/libs/client";

export default function BlogId({ blog }) {
  console.log(blog);
  return (
    <main>
      {blog.updatedAt}
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <p>{blog.body}</p>
    </main>
  );
}

//SSG
export const getStaticProps = async (context) => {
  console.log(`${context}これは`);
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};
