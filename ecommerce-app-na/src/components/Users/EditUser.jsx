import ContextInstance from "../../Services/ContextServices";
import { useContext } from "react";
import { useForm } from "react-hook-form";
function EditUser(props) {
    const { user, setIsEditVisible } = props;
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ defaultValues: user });
    const { updateUser } = useContext(ContextInstance);
    console.log(user);
    const UpdateDetails = () => {
        const data = { ...formValues, id: user.id };
        updateUser(data);
        setIsEditVisible(false);
    };

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <form className="space-y-2" onSubmit={handleSubmit(UpdateDetails)}>
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="flex justify-center text-2xl font-bold text-blue-900 mb-2" id="modal-title">Edit user</h3>

                                    <div>
                                        <label htmlFor="name" className="block text-lg font-semibold text-gray-900">First Name</label>
                                        <div className="mt-1">
                                            <input type="text" name="firstName" id="firstName" {...register('firstname')} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                        </div>
                                        <label htmlFor="name" className="block text-lg font-semibold text-gray-900">Last Name</label>
                                        <div className="mt-1">
                                            <input type="text" name="lastName" id="lastName" {...register('lastname')} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                        </div>
                                        <label htmlFor="email" className="block text-lg font-semibold text-gray-900">Email address</label>
                                        <div className="mt-1">
                                            <input type="email" name="email" id="email" {...register('email')} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                        </div>
                                    </div>
                                    {/* <div>
                                            <button type="submit" className="mb-3 ml-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
                                        </div> */}

                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="submit" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto">Confirm</button>
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setIsEditVisible(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default EditUser;
