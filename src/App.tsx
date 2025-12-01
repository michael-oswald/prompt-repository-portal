import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PromptDetailPage from './pages/PromptDetailPage';
import CreatePromptPage from './pages/CreatePromptPage';
import BrowsePage from './pages/BrowsePage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/prompt/:id" element={<PromptDetailPage />} />
          <Route path="/create" element={<CreatePromptPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
