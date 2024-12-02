

export async function getData(endpoint, payload) {
    return makeRequest("get", endpoint);
}
export async function deleteData(endpoint, payload) {
    return makeRequest("delete", endpoint);
}
export async function postData(endpoint, payload) {
    return makeRequest("post", endpoint, payload);
}
export async function putData(endpoint, payload) {
    return makeRequest("put", endpoint, payload);
}
export async function patchData(endpoint, payload) {
    return makeRequest("patch", endpoint, payload);
}

// async function makeRequest() {
//     const  response = await axios.
// }