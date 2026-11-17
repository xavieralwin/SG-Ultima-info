import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage';

/**
 * Routes component containing routes for the application.
 * Only HomePage is kept; all other routes navigate back to HomePage.
 * @returns {JSX.Element}
 */
const AppRoutes = () => (
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
);

export default AppRoutes;
