import ContextInstance from "../Services/ContextServices";
import { useState } from "react";
import User from "../components/Users/User";

function Users() {
    const[ users, setUsers ] = useState([
        {
          id: 1,
          firstname: "Aarav",
          lastname: "Patel",
          email: "aarav.patel@example.com",
          mobile: "987-654-3210"
        },
        {
          id: 2,
          firstname: "Diya",
          lastname: "Sharma",
          email: "diya.sharma@example.com",
          mobile: "876-543-2109"
        },
        {
          id: 3,
          firstname: "Reyansh",
          lastname: "Yadav",
          email: "reyansh.yadav@example.com",
          mobile: "765-432-1098"
        },
        {
          id: 4,
          firstname: "Anika",
          lastname: "Singh",
          email: "anika.singh@example.com",
          mobile: "654-321-0987"
        },
        {
          id: 5,
          firstname: "Vihaan",
          lastname: "Gupta",
          email: "vihaan.gupta@example.com",
          mobile: "543-210-9876"
        },
        {
          id: 6,
          firstname: "Adhya",
          lastname: "Verma",
          email: "adhya.verma@example.com",
          mobile: "432-109-8765"
        },
        {
          id: 7,
          firstname: "Ishaan",
          lastname: "Khan",
          email: "ishaan.khan@example.com",
          mobile: "321-098-7654"
        },
        {
          id: 8,
          firstname: "Navya",
          lastname: "Reddy",
          email: "navya.reddy@example.com",
          mobile: "210-987-6543"
        },
        {
          id: 9,
          firstname: "Kabir",
          lastname: "Chowdhury",
          email: "kabir.chowdhury@example.com",
          mobile: "109-876-5432"
        },
        {
          id: 10,
          firstname: "Siya",
          lastname: "Malik",
          email: "siya.malik@example.com",
          mobile: "098-765-4321"
        },
      ]);
         
      const deleteUser = (userId) => {
        const filteredUsers = users.filter(user => user.id !== userId);
        setUsers(filteredUsers);
      };

      const updateUser = (userInfo) => {
        const updatedUsers = users.map(user => {
          if (user.id === userInfo.id) {
            return userInfo;
          }else {
            return user;
          }
        });
        setUsers(updatedUsers);
      }

 return(
   
   <div>
     <h2 className="text-2xl text-center">Users</h2>
     <ContextInstance.Provider value={{deleteUser, updateUser}}>
        <div className="flex flex-wrap">
        {users.map(user => (
          <User user={user}  key={user.mobile}/>
  ))}
        </div>
</ContextInstance.Provider>
       
    </div>
 )

}

export default Users;