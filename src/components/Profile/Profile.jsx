import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Profile = () => {
  const { user} = use(AuthContext)
  return (
    <div className='flex justify-between items-center h-[80vh]'>
      <div className='w-4/12 mx-auto flex items-center gap-5 shadow-sm p-5 rounded'>
        <div>
          <img className='rounded-full' src={user.photoURL} alt="" />
        </div>
        <div>
          <h4 className='text-3xl font-bold'>{user.displayName}</h4>
          <p className='text-gray-600'>{ user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;