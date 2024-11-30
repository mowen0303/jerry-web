import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './share/nav.component';

//1. 导入新的文件
import SearchSuggestionPage from './pages/searchSuggestion.page';
import TotalSalaryPage from './pages/scotiabankTotalSalary.page';

//2. 创建router
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SearchSuggestionPage />
    },
    {
      path: '/searchSuggestion',
      element: <SearchSuggestionPage />
    },
    {
      path: '/totalSalary',
      element: <TotalSalaryPage />
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='page-container'>

      <div className='nav-container'>
        <Nav />
      </div>

      <div className='content-container'>
        <RouterProvider router={router}></RouterProvider>
      </div>

    </div>
  </React.StrictMode>
);
