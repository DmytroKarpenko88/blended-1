import { apiDummyJSON } from "../services/api";

export async function getAllUsers() {
    const data = await apiDummyJSON.get('/users');

    return data
}