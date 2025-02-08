function User(props) {
  const { user } = props;

    return(
        <div className="w-1/3 p-2">
            <div className="shadow p-2">
            <p className="text-md">Firstname: <span className="text-blue-800 font-bold">{user.firstname}</span> </p>
            <p className="text-md">Lastname: <span className="text-blue-800 font-bold">{user.lastname}</span> </p>
            <p className="text-md">Email: <span className="text-blue-800 font-bold">{user.email}</span> </p>
            <p className="text-md">Mobile: <span className="text-blue-800 font-bold">{user.mobile}</span> </p>
    
             <div className="flex items-center my-3">
               <div className="bg-blue-500 text-white px-2 py-1 rounded me-2 cursor-pointer">
               <i class="fa-solid fa-pen-to-square"></i>
               </div>
              <div className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">
              <i className="fa-solid fa-delete-left"></i>
              </div>
             </div>
            </div>
        </div>
    )

}

export default User;