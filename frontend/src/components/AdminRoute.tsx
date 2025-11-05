import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const AdminRoute: React.FC = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
