import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import AppRoute from './components/AppRoute';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoute />
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
