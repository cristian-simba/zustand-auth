import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAuthStore from '../../../store/authStore';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const {register, handleSubmit} = useForm();
  const authStore = useAuthStore((state) => state.login);
  const auth = useAuthStore((state)=>(state.isAuth))
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    const {email, password} = data
    console.log(data)
    await authStore(email, password, navigate)
  }

  useEffect(() => {
    if(auth){
      navigate("/profile")
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 justify-center items-center min-h-screen'>
      <input
        type="text"
        {...register('email')}
        placeholder="Username"
      />
      <input
        type="password"
        {...register('password')}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
