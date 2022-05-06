import { useState, useEffect } from 'react';
import { MockData } from './../data/MockData';
import CardList from './card/CardList';
import { CardInfo } from './../data/CardInfo';
import { fetchFoodData, fetchFoodDataArray } from './../lib/FetchData';
import { ApiUrlArray } from './../data/ApiUrlArray';

function Menu() {
    const [cardList, setCardList] = useState<CardInfo[]>([]);

    useEffect(() => {
        fetchFoodDataArray(ApiUrlArray)
            .then(values => {
                Promise.all(values)
                    .then(res => {
                        for (var i = 0; i < res.length; i++) {
                            const card = new CardInfo({        
                                id: i + 1,
                                imageURL: res[i].result.foodImage,
                                foodName : res[i].result.foodName,
                                foodDescription : res[i].result.foodDesc,
                                foodPrice : res[i].result.foodOrinalPrice
                            })
                        setCardList(curr => [...curr, card]);
                        }
                    })
            })
    }, []);

    return (
        <CardList cards={cardList}/>
    );
}

export default Menu;