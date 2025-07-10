"use client";
import { postSingleData } from "@/app/actions/products/postSingleData";
import { useRouter } from "next/navigation";

const ProductsAddForm = () => {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.ProductName.value;
    const payload = { name };
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const result = await res.json();
    const result = await postSingleData(payload)
    form.reset();
    // alert("item added");
    router.push("/products");
    router.refresh();
    console.log(result);
  };
  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          className="border border-amber-300 p-2 rounded-lg"
          type="text"
          name="ProductName"
          placeholder="Product name"
        />
        <button
          className="border border-amber-300 p-2 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductsAddForm;
