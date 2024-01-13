import RestroCard from "./restroCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState (resData);

    return (
        <div className="body" >
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    setListOfRestaurants (listOfRestaurants.filter (ele => ele.avgRating > 4));
                }}>Top Rated Restr</button>
            </div>
            <div className="search">Search</div>
            <div className="restro-container">
                {
                    listOfRestaurants.map (each => <RestroCard key={each.id} resData = {each}></RestroCard>)                
                }
                
            </div>
        </div>
    )
}
export default Body;