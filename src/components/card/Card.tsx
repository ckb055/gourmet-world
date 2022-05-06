import react from 'react';
import { CardInfo } from './../../data/CardInfo';
import './../../styles/card/Card.scss';

interface CardProps {
    cardInfo : CardInfo;
}

function Card(props: CardProps) {
    const { cardInfo } = props;

    return (
        <div className="card">
            <img src={cardInfo.imageURL}></img>
            <div className="card-body">
                <h2 className="card-foodName">
                    {cardInfo.foodName}
                </h2>
                <p className="card-foodDescription">
                    {cardInfo.foodDescription}
                </p>
                <div className="card-priceAndOrder">
                    <p className="card-price">{cardInfo.foodPrice}</p>
                    <button className="card-orderButton">Order</button>
                </div>
            </div>
        </div>
    );

} 

export default Card;