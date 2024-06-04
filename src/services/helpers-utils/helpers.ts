const retrieveLocalStorageData = <T, > (key:string) => {
    const pairJson = localStorage.getItem(key) || '';
    const pair = JSON.parse(pairJson);
    if (!pairJson) {
        return {} as T;
    }
    return pair as T;
}

export {
    retrieveLocalStorageData
}