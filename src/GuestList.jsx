import { useState, useEffect } from "react";
import { getGuests } from "./api";
export default function GuestList({ setGuestId }){
    const [ guests, setGuests ] = useState([]);
    useEffect (() => {
       async function loadGuests() {
        const guests = await getGuests();
        setGuests(guests);
       }
       loadGuests();
    }, []);
    
    return (
    <>
    <h1> Guest List </h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th> Phone </th>
            </tr>
        </thead>
        <tbody>
            {guests.map((guest) => (
                <tr key={ guest.id} onClick={() => setGuestId(guest.id)}>
                <td> { guest.name }</td>
                <td> { guest.email }</td>
                <td>{ guest.phone }</td>
                </tr>
                ))}
        </tbody>
    </table>
    </>
    );
}