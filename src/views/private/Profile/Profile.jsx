// src/components/Profile.js
import React from 'react';
import useAuthStore from '../../../store/authStore';
import Logout from './components/Logout';

export default function Profile() {
  const user = useAuthStore((state) => state.nombre);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-5'>
      <h1 className='text-3xl font-bold'>Holaaaa</h1>
      <p className='text-xl'>{user}</p>
      <Logout/>
    </div>
  );
}
