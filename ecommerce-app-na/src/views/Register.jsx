import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

 function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const passwordValue = watch('password');

    const registerUser = async (formValues) => {
     try {
      const response = await axios.post('', formValues);

     } catch(error){
      
     }

    };
     return(
        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign Up</h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-2" onSubmit={handleSubmit(Register)}>
      <div>
      <label for="name" className="block text-sm/6 font-medium text-gray-900">First Name</label>
      <div className="mt-2">
          <input type="text" name="firstName" id="firstName" {...register('firstName')} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
        <label for="name" className="block text-sm/6 font-medium text-gray-900">Last Name</label>
      <div className="mt-2">
          <input type="text" name="lastName" id="lastName" {...register('LastName')} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
        <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" {...register('email')} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-900">Enter Password</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password" {...register('password', { required: { value: true, message: 'Password is reqquired'}, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: 'Incorrect password format'}})} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-900">Confirm Password</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input type="confirm-password" name="password" id="confirm-password" {...register('confirmpassword')} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
      </div>
    </form>

  </div>
</div>
     )
}

export default Register;