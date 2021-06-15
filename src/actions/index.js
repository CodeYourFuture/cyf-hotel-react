import * as api from "../api";

export const fetch = ()=>{
    api.fetch()
    .then((res)=>res.json())
    .then((data)=>setHotelBookings(data));
}