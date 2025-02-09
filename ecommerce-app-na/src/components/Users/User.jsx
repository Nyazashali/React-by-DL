import DeleteUser from "./DeleteUser";
import { useState } from "react";
import EditUser from "./EditUser";
function User(props) {
  const { user } = props;
const [isDeleteVisible, setIsDeleteVisible] = useState(false);
const [isEditVisible, setIsEditVisible] = useState(false);
  return (
    <div className="w-1/3 p-2">
      <div className="shadow p-2">
        <p className="text-md">Firstname: <span className="text-blue-800 font-bold">{user.firstname}</span> </p>
        <p className="text-md">Lastname: <span className="text-blue-800 font-bold">{user.lastname}</span> </p>
        <p className="text-md">Email: <span className="text-blue-800 font-bold">{user.email}</span> </p>
        <p className="text-md">Mobile: <span className="text-blue-800 font-bold">{user.mobile}</span> </p>

        <div className="flex items-center my-3">
          <div className="bg-blue-500 text-white px-2 py-1 rounded me-2 cursor-pointer" onClick={() => setIsEditVisible(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer" onClick={() => setIsDeleteVisible(true)}>
            <i className="fa-solid fa-delete-left"></i>
          </div>
        </div>
      </div>
      {isEditVisible && <EditUser user={user} setIsEditVisible={setIsEditVisible}/>}
      {isDeleteVisible && <DeleteUser setIsDeleteVisible={setIsDeleteVisible} id={user.id}/>}
    </div>
  )

}

export default User;