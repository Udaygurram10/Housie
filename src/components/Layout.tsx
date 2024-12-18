import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './Navigation';
import { AppRoutes } from '../routes';

export const Layout = () => (
  <div className="min-h-screen bg-gray-50 pt-[var(--header-height)]">
    <Navigation />
    <AnimatePresence mode="wait">
      <AppRoutes />
    </AnimatePresence>
  </div>
);