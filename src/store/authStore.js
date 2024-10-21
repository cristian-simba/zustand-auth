// src/store/authStore.js
import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  nombre: JSON.parse(localStorage.getItem('nombre')) || null,
  token: localStorage.getItem('token') || null,
  isAuth: !!localStorage.getItem('token'),
  login: async (email, password, navigate) => {
    try {
      const response = await axios.post("https://ropdat.onrender.com/api/login/moderador", {
        email,
        password,
      });
      const { token, nombre } = response.data; // Variables que vienen de la API
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
      localStorage.setItem('nombre', JSON.stringify(nombre));
      set({ nombre, token, isAuth: true });
      navigate("/profile");
    } catch (error) {
      console.log(error);
      set({ nombre: null, token: null, isAuth: false });
    }
  },
  logout: () => {
    axios.defaults.headers.common['Authorization'] = '';
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    set({ nombre: null, token: null, isAuth: false });
  }
}));

export default useAuthStore;
