
import './layout.css';
import useAppContext from '../../hooks/useAppContext.jsx';
// import useAuth from '../../hooks/useAuth.tsx';
import { Outlet } from "react-router-dom";
import React from 'react';

const WithoutLogin = () => {
  const [context] = useAppContext();
  const { theme } = context;

  return (
    <main className='page d-flex flex-column' app-theme={theme}>
      <h1>Protected Routes</h1>
      <Outlet />
    </main>
  );
}


export default WithoutLogin;