export const GET_PERSONS_BY_VILLAGE_ID = "GET_PERSONS_BY_VILLAGE_ID";

export function getPersonsByVillageId(village_id) {
    return {
        type: GET_PERSONS_BY_VILLAGE_ID,
        payload: village_id
    }
}