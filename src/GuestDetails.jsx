import { useState } from "react";
export default function GuestDetails({ guestId, setGuestId }) {
  const [guest, setGuest] = useState({
    id: 1,
    mame: "Neven",
    email: "meven@gmail.com",
    phone: "555-0100",
    bio: "I am learning React.",
    job: "student",
  });

  return (
    <>
      <h1>{guest.name}</h1>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>
      <button onClick={() => setGuestId(null)}> Back</button>
    </>
  );
}
