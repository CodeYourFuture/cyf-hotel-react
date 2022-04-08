// import React, { useState, useEffect } from 'react'

const id = 2;
const fakeData = {
  id: 2,
  title: "Doctor",
  firstName: "Sadia",
  surname: "Begum",
  email: "begum_sadia@sadia.org",
  vip: true,
  phoneNumber: "+44 1632 960001"
};
let detailData = [];
// const [detailData, setDetailData] = useState(fakeData)
// useEffect(() => {
fetch(`https://cyf-react.glitch.me/customers/${id}`)
  .then(res => res.json())
  .then(data => {
    detailData = data;
  });
// }, [id])

console.log(detailData);

console.log(detailData.title);
