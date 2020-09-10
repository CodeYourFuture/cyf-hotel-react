// import React, { useState } from 'react';

// const DeleteBooking = ({ message, handleDeleteBooking }) => {
//   const handleDelete = (e) => {
//     fetch(`https://cors-anywhere.herokuapp.com/https://nawal-cyf-chat-start.glitch.me/messages` + message.id, {
//       method: 'DELETE',
//     })
//       .then((response) => response.json())
//       .then((data) => console.log('success:', data));
//     handleDeleteBooking(message.id);
//   };

//   return (
//     <div>
//       <button className="btn btn-danger" onClick={handleDelete}>
//         Delete
//       </button>
//     </div>
//   );
// };

// export default DeleteBooking;
