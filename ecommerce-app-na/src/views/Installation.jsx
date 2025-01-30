import { Link, Outlet } from "react-router-dom";

function Installation() {
        
    return(
        <div className="flex gap-10">
            <div>
               <h1 className="text-2xl font-bold text-sky-500 p-5 ">Installation</h1>
               <ul className="ps-5 ms-5 mb-5">
                <li className="text-blue-400 cursor-pointer"><Link to="start-a-new-react">Start a new react Project</Link></li>
                <li className="text-blue-400 cursor-pointer"><Link to="add-react-to-existing-project">Add a existing react Project</Link></li>
                <li className="text-blue-400 cursor-pointer"><Link to="editor-setup">Editor Setup</Link></li>
                <li className="text-blue-400 cursor-pointer"><Link to="using-typescript">Using Typescript</Link></li>
               </ul>
            </div>

            <div className="p-4 border">
            <Outlet />
        </div>
        </div>

       
        
    )

}

export default Installation;