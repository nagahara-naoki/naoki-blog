import { client } from "@/libs/client";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function BlogId({ blog }) {
  console.log(blog);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return (
    <main>
      {dayjs.utc(blog.publishedAt).tz("Asia/Tokyo").format("YYYY-MM-DD")}
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
