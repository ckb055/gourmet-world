import {FiInfo} from "react-icons/fi";
import { CardInfo } from './../../data/CardInfo';
import './../../styles/card/Card.scss';

interface CardProps {
    cardInfo : CardInfo;
}

function Card(props: CardProps) {
    const { cardInfo } = props;

    return (
        <div className="card">
            <div className="img-container">
            <FiInfo className="img-info"/>
            <img src={cardInfo.imageURL}>
            </img>
            </div>
            <div className="card-body">
                <h2 className="card-foodName">
                    {cardInfo.foodName}
                </h2>
                <p className="card-foodDescription">
                    {cardInfo.foodDescription}
                </p>
                <div className="card-priceAndOrder">
                    <p className="card-market-price">{cardInfo.foodMarketPrice}</p>
                    <p className="card-original-price">{cardInfo.foodOriginalPrice}</p>
                    <button className="card-orderButton">ORDER</button>
                </div>
            </div>
        </div>
    );

} 

export default Card;