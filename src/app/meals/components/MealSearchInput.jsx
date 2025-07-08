"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealSearchInput = () => {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    // MealsData();
    const delayDebounce = setTimeout(() => {
      const searchQuery = { search };
      const urlQueryParam = new URLSearchParams(searchQuery);
      const url = `${pathName}?${urlQueryParam}`;
      router.push(url);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [search, pathName, router]);
  return (
    <div className="space-x-2">
      <label className="font-bold text-xl">Search :</label>
      <input
        className="border border-amber-400 rounded-lg"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MealSearchInput;
