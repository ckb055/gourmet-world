export async function fetchFoodData(url: string) {
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

export async function fetchFoodDataArrayWithThrottle(urlArray: string[], maxParallelRequests = 3) {
    const queue: Promise<any>[] = [];
    const dataArray: any[] = [];
    for (let url of urlArray) {
        const promise = fetchFoodData(url).then((res) => {
            queue.splice(queue.indexOf(promise), 1); // remove the promise from the queue when done
            dataArray.push(res);
        });

        queue.push(promise);

        // stop adding requests when the queue length is 3
        // allow further enqueues after one has finished
        if (queue.length >= maxParallelRequests) {
            // pauses the async function until the first promise in the array is fulfilled
            await Promise.race(queue);
        }
    }

    // resolve the remaining promises in the queue
    await Promise.all(queue);

    return dataArray;
}
