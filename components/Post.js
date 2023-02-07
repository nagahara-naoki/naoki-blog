import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="mt-1">
      <span>{post.id}</span>
      {":"}
      <Link href={`/posts/${post.id}`}>
        <span className="text-blue-500 border-b hover:bg-gray-200 cursor-pointer">{post.title}</span>
      </Link>
    </div>
  );
};

export default Post;
