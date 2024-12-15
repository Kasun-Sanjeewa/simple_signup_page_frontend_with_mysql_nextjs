
'use client';
import axios from "axios";
import BasicTable from "./table";
import { useEffect, useState } from "react";

export default function Home() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    axios.get('http://localhost:3001/getUsers')
      .then(Response => {
        setUsers(Response.data.results);
      })
      .catch(err => {
        console.error("Axios Error : ", err);
      })
  }
  return (
    <div>
      <BasicTable users={users} />
    </div>
  );
}
