import { useEffect, useState } from "react";
import { useStoreMeals } from "../store/store";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const [userSelected, setUserSelected] = useState<string>("canadian");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const setMeals = useStoreMeals((state) => state.setMeals);
  const meals = useStoreMeals((state) => state.meals);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${userSelected}`
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getMeals();
  }, [userSelected, setMeals]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200">
      <div className="flex flex-col items-center px-4">
        <div className="w-full max-w-md flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6 mt-6">
          <input
            type="search"
            placeholder="Search for a meal..."
            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={userSelected}
            onChange={(e) => setUserSelected(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="canadian">Canadian</option>
            <option value="filipino">Filipino</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            <option value="mexican">Mexican</option>
            <option value="indian">Indian</option>
          </select>

          <button
            className=" bg-red-400 p-2 rounded-lg hover:bg-red-500"
            onClick={() => navigate("/projects")}
          >
            Back
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <div
                key={meal.idMeal}
                className="w-full sm:w-[300px] bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-44 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-teal-700 mb-2">
                  {meal.strMeal}
                </h2>
                <p className="text-gray-600">Delicious Food haha</p>
              </div>
            ))
          ) : (
            <p className="text-3xl text-gray-700">No Meals Found...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
