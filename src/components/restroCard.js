import { CARD_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestroCard = ({resData}) => {
    return (
        <div className="restro-card" style={styleCard}>
            <img className="res-logo" src={CARD_URL}>
                </img>  
            <h1>{resData.resName}</h1>
            <h3>{resData.cuisine?.join (',')}</h3>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo / 100 }</h4>
            <h4>{resData.deliveryTime}</h4>
        </div>
    )
}
export default RestroCard;