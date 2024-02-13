import { CARD_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestroCard = ({resData}) => {
    return (
        <div className="restro-card m-4 p-4 w-48" style={styleCard}>
            <img className="res-logo" src={CARD_URL + resData.cloudinaryImageId}>
                </img>  
            <h1>{resData.name}</h1>
            <h3>{resData.cuisines?.join (',')}</h3>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo }</h4>
            {/* <h4>{resData.sla.deliveryTime}</h4> */}
        </div>
    )
}
export default RestroCard;