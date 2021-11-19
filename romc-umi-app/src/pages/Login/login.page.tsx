import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginPage: React.FC = () => {

  return (
    <div>login

      <Outlet />
    </div>
    
  )
}
export default LoginPage;