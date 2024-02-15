import RestroCard from "./restroCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./restroCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState ([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState ([]);
    const [searchText, setSearchText] = useState ([]);

    //after your componet renders
    useEffect ( () => {
        fetchData ();
    }, []);


    const fetchData = async () => {
        const data = await fetch (
            'https://corsproxy.io/?' + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")         
        );
        const json = await data.json ();
        setListOfRestaurants (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map (each => each.info));
        //I think it will check memory change not exactly value change
        setfilteredRestaurants (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map (each => each.info));
    }

    const onlineStatus = useOnlineStatus ();

    if (onlineStatus === false ) {
        return <h1>Looks like you are offline, Please check internet</h1>;
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer></Shimmer>
    }
    return (
        <div className="body" >
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText (e.target.value);
                    }}>
                    </input>
                    <button className="bg-green-100 m-4 px-4 py-1 rounded-lg" onClick={ () => {
                        setfilteredRestaurants (listOfRestaurants.filter (ele => ele.name.toLowerCase ().includes( searchText.toLowerCase () ) ));
                    }}>Search</button>
                </div>
                <div className="self-center">
                    <button className="filter-btn bg-green-100 m-4 px-4 py-1 rounded-lg" onClick={() => {
                        setfilteredRestaurants (listOfRestaurants.filter (ele => ele.avgRating > 4));
                    }}>Top Rated Restr</button>
                </div>
            </div>
            
            <div className="restro-container flex flex-wrap">
                {
                    filteredRestaurants.map (each => 
                    <Link key={each.id} to={'restro/' + each.id}>
                        <RestroCard  resData = {each}></RestroCard>
                    </Link>)                
                }
                
            </div>
        </div>
    )
}
export default Body;