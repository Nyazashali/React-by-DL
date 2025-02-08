import ContextInstance from "../Services/ContextServices";
import { useState } from "react";
import User from "../components/Users/User";

function Users() {
    const[ users, setUsers ] = useState([
        {
          "firstname": "Aarav",
          "lastname": "Patel",
          "email": "aarav.patel@example.com",
          "mobile": "987-654-3210"
        },
        {
          "firstname": "Diya",
          "lastname": "Sharma",
          "email": "diya.sharma@example.com",
          "mobile": "876-543-2109"
        },
        {
          "firstname": "Reyansh",
          "lastname": "Yadav",
          "email": "reyansh.yadav@example.com",
          "mobile": "765-432-1098"
        },
        {
          "firstname": "Anika",
          "lastname": "Singh",
          "email": "anika.singh@example.com",
          "mobile": "654-321-0987"
        },
        {
          "firstname": "Vihaan",
          "lastname": "Gupta",
          "email": "vihaan.gupta@example.com",
          "mobile": "543-210-9876"
        },
        {
          "firstname": "Adhya",
          "lastname": "Verma",
          "email": "adhya.verma@example.com",
          "mobile": "432-109-8765"
        },
        {
          "firstname": "Ishaan",
          "lastname": "Khan",
          "email": "ishaan.khan@example.com",
          "mobile": "321-098-7654"
        },
        {
          "firstname": "Navya",
          "lastname": "Reddy",
          "email": "navya.reddy@example.com",
          "mobile": "210-987-6543"
        },
        {
          "firstname": "Kabir",
          "lastname": "Chowdhury",
          "email": "kabir.chowdhury@example.com",
          "mobile": "109-876-5432"
        },
        {
          "firstname": "Siya",
          "lastname": "Malik",
          "email": "siya.malik@example.com",
          "mobile": "098-765-4321"
        },
      ]);
   
 return(
   
   <div>
     <h2 className="text-2xl text-center">Users</h2>
     <ContextInstance.Provider value={{}}>
        <div className="flex flex-wrap">
        {users.map(user => (
    <User user={user} />
  ))}
        </div>
</ContextInstance.Provider>
       
    </div>
 )

}

export default Users;