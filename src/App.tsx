import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';

const AppContent = () => {
  useGoogleAnalytics();
  return <Layout />;
};

export const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);