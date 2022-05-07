import { useState, useEffect } from 'react';
import { MockData } from './../data/MockData';
import CardList from './card/CardList';
import { CardInfo } from './../data/CardInfo';
import { fetchFoodDataArray, fetchFoodDataArrayWithThrottle } from './../lib/FetchData';
import { ApiUrlArray } from './../data/ApiUrlArray';

function Menu() {
    const [cardList, setCardList] = useState<CardInfo[]>([]);

    useEffect(() => {
        // This commented portion is for fetching Data without throttling
        // fetchFoodDataArray(ApiUrlArray)
        //     .then(values => {
        //         Promise.all(values)
        //             .then(res => {
        //                 for (var i = 0; i < res.length; i++) {
        //                     const card = new CardInfo({        
        //                         id: i + 1,
        //                         imageURL: res[i].result.foodImage,
        //                         foodName : res[i].result.foodName,
        //                         foodDescription : res[i].result.foodDesc,
        //                         foodMarketPrice : res[i].result.foodMarketPrice,
        //                         foodOriginalPrice : res[i].result.foodOrinalPrice,
        //                     })
        //                 setCardList(curr => [...curr, card]);
        //                 }
        //             })
        //     })
        fetchFoodDataArrayWithThrottle(ApiUrlArray)
            .then(res => {console.log("RES IS:", res)});
            // .then(res => {
            //     for (var i = 0; i < res.length; i++) {
            //         const card = new CardInfo({        
            //             id: i + 1,
            //             imageURL: res[i].result.foodImage,
            //             foodName : res[i].result.foodName,
            //             foodDescription : res[i].result.foodDesc,
            //             foodMarketPrice : res[i].result.foodMarketPrice,
            //             foodOriginalPrice : res[i].result.foodOrinalPrice,
            //         })
            //     setCardList(curr => [...curr, card]);
            //     }
            // })
    }, []);

    return (
        <CardList cards={cardList}/>
    );
}

export default Menu;