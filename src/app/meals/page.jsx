import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ALL MEALS",
  description: "ALL MEAL LOADED FROM MEALDB API",
};

const MealsPage = async ({ searchParams }) => {
  const query = searchParams;
  const MealsData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await MealsData();

  return (
    <div className={`${roboto.className} mx-20`}>
      <div>
        <MealSearchInput></MealSearchInput>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {meals?.length > 0 ? (
          meals.map((singleMeal) => {
            return (
              <div
                key={singleMeal.idMeal}
                className="border border-amber-300 p-2 my-2 w-full h-96 overflow-y-scroll"
              >
                {/* <Image src={singleMeal.strMealThumb} alt="" /> */}
                <Image
                  src={singleMeal.strMealThumb}
                  alt=""
                  width={641}
                  height={641}
                />
                <p>Name : {singleMeal?.strMeal}</p>
                <p className="text-yellow-200">
                  <span className="font-semibold text-white">How to make</span>{" "}
                  : {singleMeal?.strInstructions}
                </p>
                <Link href={`/meals/${singleMeal.idMeal}`}>
                  <button className="border border-white p-2 rounded-lg w-full">
                    Details
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
};

export default MealsPage;
