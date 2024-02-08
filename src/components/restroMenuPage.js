import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenuPage = () => {
    const {resId} = useParams ();

    console.log (resId);

    const resInfo = useRestroMenu (resId);

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