import { useState , useEffect} from "react";
import { getGuest } from "./api";
export default function GuestDetails({ guestId, setGuestId }) {
  const [guest, setGuest] = useState(null);
  useEffect (()=> {
    async function loadGuest(){
        const guest = await getGuest(guestId);
        setGuest(guest);
    }
    loadGuest();
  }, [guestId])
  if(!guest) {
    return <p> loading ... </p>
  }

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
