import Link from "next/link";
import style from "./post.module.css";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "ALL POSST",
  description: "Loading json holder post",
};

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-4 gap-3 my-4">
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id} className="border border-amber-500">
            <p className={`font-bold text-white ${style["title-bg"]}`}>
              {singlePost.title}
            </p>
            <p>{singlePost.body}</p>
            <Link href={`/posts/${singlePost.id}`}>
              <button className="bg-gray-400 border-2 rounded-full border-white p-2 hover:bg-gray-300 hover:text-black transition-all duration-300">
                Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
