function User() {
  

    return(
        <div className="shadow p-2 m-2">
            <p className="text-xl font-bold">Firstname: <span className="text-blue-500"></span> </p>
            <p className="text-xl font-bold">Lastname: <span className="text-blue-500"></span> </p>
            <p className="text-xl font-bold">Email: <span className="text-blue-500"></span> </p>
            <p className="text-xl font-bold">Mobile: <span className="text-blue-500"></span> </p>
    
             <div>
             <i class="fa-solid fa-pen-to-square"></i>
             <i class="fa-solid fa-delete-left"></i>
             </div>
        </div>
    )

}

export default User;