import { CardInfo } from './../../data/CardInfo';
import Card from './Card';
import './../../styles/card/Card.scss';
import { fetchFoodData , fetchFoodDataArray } from './../../lib/FetchData';
import { ApiUrlArray } from './../../data/ApiUrlArray';
import React, { useEffect, useState } from 'react';

interface CardListProps {
    cards: CardInfo[];
}

function CardList(props: CardListProps) {
    const { cards } = props;

    return (
        <div className="cards-container">
            {cards.map((card) => (
                <Card key={card.id} cardInfo={card}></Card>
            ))}
        </div>
    );

} 

export default CardList;