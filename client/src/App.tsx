import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CatsListPage } from './pages/CatsListPage/CatsListPage';
import { CreateCatPage } from './pages/CreateCatPage/CreateCatPage';
import { useAppStyles } from './styles';
import { CatsProvider } from './context/CatContext';

const App: React.FC = () => {
  const classes = useAppStyles();
  const [x, y] = useState(0)

  useEffect(() => {
    setInterval(() => {
      y(prev => prev + 1)
    }, 1000)
  }, [])

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
