export const getSinglePost = async (posts_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${posts_id}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const singlePost = await getSinglePost(id);
  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

const SinglePost = async ({ params }) => {
  const id = await params;
  const singlePost = await getSinglePost(id.id);
  return (
    <div>
      <p>
        <span className="font-bold text-2xl">Title:</span>
        {singlePost.title}
      </p>
      <p>
        {" "}
        <span className="font-bold text-2xl">body:</span>
        {singlePost.body}
      </p>
    </div>
  );
};

export default SinglePost;
