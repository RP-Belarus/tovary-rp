export const GET_PRODUCTS_BY_VILLAGE_ID = "GET_PRODUCTS_BY_VILLAGE_ID";
export const GET_PRODUCTS_BY_PERSON_ID = "GET_PRODUCTS_BY_PERSON_ID";

export function getProductsByVillageId(village_id) {
    return {
        type: GET_PRODUCTS_BY_VILLAGE_ID,
        payload: village_id
    }
}

export function getProductsByPersonId(person_id) {
    return {
        type: GET_PRODUCTS_BY_PERSON_ID,
        payload: person_id
    }
}