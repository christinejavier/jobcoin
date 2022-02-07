import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LoginPage = loadable(
  () => import('./crypto/features/login/pages/LoginPage'),
);
const DashboardPage = loadable(
  () => import('./crypto/features/dashboard/pages/DashboardPage'),
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path=":address" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
