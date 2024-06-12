import { URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" 
            src={{URL}+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;