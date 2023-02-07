const url = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostsData = async () => {
  const res = await fetch(new URL(url));
  const posts = await res.json();
  return posts;
};
