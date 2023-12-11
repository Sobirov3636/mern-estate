import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img
          src={currentUser.avatar}
          alt='Profile'
          className='self-center object-cover w-24 h-24 mt-2 rounded-full cursor-pointer'
        />
        <input type='text' placeholder='username' id='username' className='p-3 border rounded-lg' />
        <input type='email' placeholder='email' id='email' className='p-3 border rounded-lg' />
        <input type='password' placeholder='password' id='password' className='p-3 border rounded-lg' />
        <button className='p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80'>
          update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}
