import Layout from "@/components/layout";
import { client } from "@/libs/client";
import Link from "next/link";

const BlogPage = ({ blog }) => {
  console.log(blog);
  return (
    <Layout title={"Blog"}>
      <h2 className="text-3xl m-4">過去の記事一覧</h2>
      {blog.map((blog) => (
        <ul key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <li>{blog.title}</li>
          </Link>
        </ul>
      ))}
    </Layout>
  );
};
export default BlogPage;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
