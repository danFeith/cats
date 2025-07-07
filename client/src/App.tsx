import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CatsListPage } from './pages/CatsListPage/CatsListPage';
import { CreateCatPage } from './pages/CreateCatPage/CreateCatPage';
import { useAppStyles } from './styles';
import { CatsProvider } from './context/CatContext';

const App: React.FC = () => {
  const classes = useAppStyles();

  return (
    <CatsProvider>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.content}>
          <Routes>
            <Route path="/" element={<CatsListPage />} />
            <Route path="/create" element={<CreateCatPage />} />
          </Routes>
        </div>
      </div>
    </CatsProvider>
  );
};

export default App;
