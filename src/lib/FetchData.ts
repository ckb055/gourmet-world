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

export async function fetchFoodDataArrayWithThrottle(urlArray: string[], maxParallelRequests = 3) {
    const queue: Promise<any>[] = [];
    const requestsToMake = urlArray.map(
        (url) => async () => {fetchFoodData(url)}
    )
    for (let req of requestsToMake) {
        const promise = req().then((res) => {
            queue.splice(queue.indexOf(promise), 1); // remove the promise from the queue when done
            return res;
        });

        queue.push(promise);

        // stop adding requests when the queue length is 3
        // allow further enqueues after one has finished
        if (queue.length >= maxParallelRequests) {
            await Promise.race(queue); 
        }
    }
    await Promise.all(queue);
}
