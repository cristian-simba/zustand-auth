import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../../store/authStore';

export default function Logout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout()
    navigate("/")
  }

  return (
    <button onClick={onLogout} className='bg-red-600 text-white px-5 py-2 rounded-md'>Logout</button>
  );
}
