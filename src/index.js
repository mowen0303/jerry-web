import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//1. 导入新的文件
import SearchSuggestionPage from './pages/searchSuggestion.page';
import TotalSalaryPage from './pages/scotiabankTotalSalary.page';

//2. 创建router
const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App/>
    },
    {
      path:'/searchSuggestion',
      element: <SearchSuggestionPage/>
    },
    {
      path:'/totalSalary',
      element: <TotalSalaryPage/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
