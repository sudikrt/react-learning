import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestroMenuPage = () => {

    const [resInfo, setResInfo] = useState (null);

    const {resId} = useParams ();
    console.log (resId);

    useEffect ( () => {
        fetchData ();
    }, []);
    /**Empty dependency arry only once on initil render */

    const fetchData = async () => {
        const data = await fetch (
            `${MENU_API_URL + resId}`
        );
        const json = await data.json ();
        console.log (json);
        setResInfo (json.data);
    }

    if (resInfo == null) {
        return (<Shimmer></Shimmer>) ;
    } 

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>{cuisines.join (', ')}</h2>
            <ul>
                {
                itemCards?.map (eachItem => (<li key={eachItem?.card?.info?.id}>{eachItem?.card?.info?.name} - {eachItem?.card?.info?.price || eachItem?.card?.info?.defaultPrice}</li>))
                }
            </ul>
        </div>
    );
}
export default RestroMenuPage;