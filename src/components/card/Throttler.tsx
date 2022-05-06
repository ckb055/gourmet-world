
export type RequestToMake = () => Promise<void>;

async function throttleRequests(
    requestsToMake: RequestToMake[],
    maxParallelRequests = 3 
) {
    const queue: Promise<void>[] = [];
    for (let requestToMake of requestsToMake) {
        const promise = requestToMake().then((res) => {
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

function useThrottle(
    requestsToMake : RequestToMake[]
) {
    throttleRequests(requestsToMake);
}

export default useThrottle;