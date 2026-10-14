const  BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
export async function getGuests() {
    const response = await fetch(`${BASE_URL}/YOUR_COHORT/guests`);
        const result = await response.json();
        return result.data;
}
export async function getGuest(guestId){
    const response = await fetch(`${BASE_URL}/YOUR_COHORT/guests/${guestId}`);
    const result  = await response.json();
    return result.data;

}