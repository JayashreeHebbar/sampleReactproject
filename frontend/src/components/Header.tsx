import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../features/users/usersApiSlice';
import { logout } from '../features/auth/authSlice';
import { RootState } from '../app/store';

const Header: React.FC = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      // Handle logout error
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ShopSmart
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            {userInfo ? (
              <li className="relative group">
                <button>{userInfo.name}</button>
                <ul className="absolute hidden group-hover:block bg-gray-800 text-white p-2 space-y-2">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <button onClick={logoutHandler}>Logout</button>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
