import RestroCard from "./restroCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState ([]);
    const [searchText, setSearchText] = useState ([]);

    //after your componet renders
    useEffect ( () => {
        fetchData ();
    }, []);


    const fetchData = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"            
        );
        const json = await data.json ();
        
        setListOfRestaurants (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map (each => each.info));
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer></Shimmer>
    }
    return (
        <div className="body" >
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText (e.target.value);
                    }}>
                    </input>
                    <button onClick={ () => {
                        console.log ('searchText : ' + searchText);
                        setListOfRestaurants (listOfRestaurants.filter (ele => ele.name === searchText ))
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    setListOfRestaurants (listOfRestaurants.filter (ele => ele.avgRating > 4));
                }}>Top Rated Restr</button>
            </div>
            
            <div className="restro-container">
                {
                    listOfRestaurants.map (each => <RestroCard key={each.id} resData = {each}></RestroCard>)                
                }
                
            </div>
        </div>
    )
}
export default Body;