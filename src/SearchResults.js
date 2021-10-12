import React from "react";

const SearchResults = () => {
  const result = [
    {
      id: "675",
      title: "ddd",
      Lastname: "hhgg",
      email: "hgbgvgg",
      roomid: "hgg",
      checkindate: "15/5/2020",
      checkoutdate: "15/7/20"
    },
    {
      id: "675",
      title: "ccc",
      Lastname: "hhgg",
      email: "hgbgvgg",
      roomid: "hgg",
      checkindate: "15/5/2020",
      checkoutdate: "15/7/20"
    },
    {
      id: "675",
      title: "bbb",
      Lastname: "hhgg",
      email: "hgbgvgg",
      roomid: "hgg",
      checkindate: "15/5/2020",
      checkoutdate: "15/7/20"
    }
  ];
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">LastName</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
        </tr>
      </thead>{" "}
      <tbody>
        {result.map(result => (
          <tr>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.Lastname}</td>
            <td>{result.email}</td>
            <td>{result.roomid}</td>
            <td>{result.checkindate}</td>
            <td>{result.checkoutdate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
