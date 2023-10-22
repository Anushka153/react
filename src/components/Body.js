import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING", {
        headers: {
          "Content-Type": "text/plain",
          "proxy":"http://localhost:1234"
      },
      }
    );

    const json = await data.json();

    setListOfRestraunt(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };

  console.log('data', filteredRestaurant, listOfRestaurants)


  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="filter" style={{ justifyContent: 'space-between' }}>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant && filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

