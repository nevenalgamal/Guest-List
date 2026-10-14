import { useState } from "react";

export default function GuestList({ setGuestId }){
    const [ guests, setGuests ] = useState([
        { 
        id:1,      
        name: "Neven",
        email: "neven@hmail.com",
        phone : "555-0100"
        }
    ])
    
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