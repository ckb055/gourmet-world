export type RequestToMake = Promise<any>;

async function throttleRequests(
    requestsToMake: RequestToMake[],
    maxParallelRequests = 3 
) {
    const queue: Promise<any>[] = [];
    for (let requestToMake of requestsToMake) {
        const promise = requestToMake.then((res) => {
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

export function useThrottle(
    requestsToMake : RequestToMake[]
) {
    throttleRequests(requestsToMake);
}

export default useThrottle;