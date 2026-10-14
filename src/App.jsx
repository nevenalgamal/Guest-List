import { useState } from "react";
import  GuestList from "./GuestList.jsx";
export default function App() {
  const [guestId, setGuestId] = useState(null);

  

  return <>
  {guestId ? (
    <GuestDetails guestId = {guestId} setGuestId={setGuestId}/>
  ) : (
   < GuestList setGuestId = {setGuestId}/>
)}
  </>;
}
