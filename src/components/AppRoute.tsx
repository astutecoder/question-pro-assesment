import { Route, Routes } from 'react-router-dom';
import Comments from '../features/dashboard/comment/Comments';
import Dashboard from '../features/dashboard/Dashboard';
import Posts from '../features/dashboard/posts/Posts';
import Home from '../features/home/Home';
import MyComponent from '../features/myComponent/MyComponent';
import Users from '../features/user/Users';
import MyButton from './button/MyButton';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="posts" element={<Posts />} />
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route
        path="my-component"
        element={
          <MyComponent>
            <MyButton label="Button 1" />
            <MyButton label="Button 2" />
            <MyButton label="Button 3" />
            <MyButton label="Button 4" />
          </MyComponent>
        }
      />
      <Route path="/user" element={<Users />} />
    </Routes>
  );
};

export default AppRoute;
