import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HostPage } from '../pages/HostPage';
import { PlayerPage } from '../pages/PlayerPage';

export const AppRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HostPage />} />
      <Route path="/player" element={<PlayerPage />} />
    </Routes>
  );
};