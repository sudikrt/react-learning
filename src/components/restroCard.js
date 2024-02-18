import { CARD_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestroCard = ({resData}) => {
    return (
        /**
         * style={styleCard}
         * 
         * to make dynamic value eg:
         * w-[200px]
         */
        <div className="restro-card m-4 p-2 w-[200px] rounded-sm bg-gray-50 hover:bg-gray-200" >
            <img className="res-logo rounded-sm" src={CARD_URL + resData.cloudinaryImageId}></img>  
            <h1 className="font-bold py-4">{resData.name}</h1>
            <h3 className="text-wrap">{resData.cuisines?.join (', ')}</h3>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo }</h4>
            {/* <h4>{resData.sla.deliveryTime}</h4> */}
        </div>
    )
}

/**
 * higher order component
 * input => restroCard output => Restrocard Promoted
 * 
 * when we write higher comps 
 * these higher order comps are pure functions.
 */

export const withPromotedLabel = (RestroCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
                <RestroCard {...props}></RestroCard>
            </div>
        )
    }
}


export default RestroCard;