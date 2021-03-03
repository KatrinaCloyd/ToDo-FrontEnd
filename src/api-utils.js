import request from 'superagent';
const URL = 'https://murmuring-bayou-68545.herokuapp.com/';

export async function signUpNewUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email: email, password: password })
    return response.body;
}

export async function signInUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email: email, password: password })
    return response.body;
}

export async function getItems(token) {
    const response = await request
        .get(`${URL}/api/items`)
        .set('Authorization', token)
    return response.body;
}

export async function addNewItem(todo, importance, token) {
    const response = await request
        .post(`${URL}/api/items`)
        .set('Authorization', token)
        .send({ todo: todo, importance: importance })
    return response.body;
}

export async function completeItem(itemId, token) {
    const response = await request
        .put(`${URL}/api/items/${itemId}`)
        .set('Authorization', token)
    return response.body;
}