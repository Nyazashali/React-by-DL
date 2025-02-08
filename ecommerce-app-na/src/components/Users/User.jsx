function User(props) {
  const { user } = props;

    return(
        <div className="shadow p-2 m-2">
            <p className="text-xl font-bold">Firstname: <span className="text-blue-500">{user.firstname}</span> </p>
            <p className="text-xl font-bold">Lastname: <span className="text-blue-500">{user.lastname}</span> </p>
            <p className="text-xl font-bold">Email: <span className="text-blue-500">{user.email}</span> </p>
            <p className="text-xl font-bold">Mobile: <span className="text-blue-500">{user.mobile}</span> </p>
    
             <div className="flex items-center justify-center">
               <div>
               <i class="fa-solid fa-pen-to-square text-blue-500"></i>
               </div>
              <div>
              <i class="fa-solid fa-delete-left text-red-500"></i>
              </div>
             </div>
        </div>
    )

}

export default User;