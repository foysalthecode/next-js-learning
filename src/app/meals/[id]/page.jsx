export const SingleMealsData = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    //   setMeals(data?.meals || []);
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;
  // fetch data
  const [singleMeal] = await SingleMealsData(id);
//   console.log(singleMeal);
  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  };
}

const SingleMealsPage = async ({ params }) => {
  const p = await params;

  const Singlemeals = await SingleMealsData(p.id);
  console.log(Singlemeals);

  return (
    <div className="mx-20">
      <p>{JSON.stringify(Singlemeals)}</p>
    </div>
  );
};

export default SingleMealsPage;
