import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/data";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(resList || []);
  console.log('wow', listOfRestaurants, resList)
  return (
    <div className="body">
      <div className="filter" style={{justifyContent: 'space-between'}}>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res.data?.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          {">4"}
        </button>
        <button
          className="reset-filter-btn"
          onClick={() => {
            setListOfRestraunt(resList);
          }}
        >
          Reset Filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

