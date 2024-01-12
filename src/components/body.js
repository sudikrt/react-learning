import RestroCard from "./restroCard";
import resData from "../utils/mockData";

const Body = () => {
    return (
        <div className="body" >
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    
                }}>Top Rated Restr</button>
            </div>
            <div className="search">Search</div>
            <div className="restro-container">
                {
                    resData.map (each => <RestroCard key={each.id} resData = {each}></RestroCard>)                
                }
                <RestroCard resData = {resData[0]}></RestroCard>
                <RestroCard resData = {resData[1]}></RestroCard>
                <RestroCard resData = {resData[2]}></RestroCard>
                <RestroCard resData = {resData[3]}></RestroCard>
            </div>
        </div>
    )
}
export default Body;