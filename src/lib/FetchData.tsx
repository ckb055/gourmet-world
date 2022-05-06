import { CardInfo } from './../data/CardInfo';

async function fetchFoodData(url: string) {
    const res = await fetch(url, {
    headers: {
      'Cache-Control': 's-maxage=31536000, stale-while-revalidate',
        },
    });

    const foodData = await res.json()

    if (res.ok) {
        return foodData;
    } else {
        const error = new Error('Error with fetching data');
        return Promise.reject(error);
    }
}

export async function fetchFoodDataArray(urlArray: string[]) {
    const promiseArray: Promise<any>[] = [];
    for (let url of urlArray) {
        promiseArray.push(fetchFoodData(url));
    }
    return promiseArray;
}
