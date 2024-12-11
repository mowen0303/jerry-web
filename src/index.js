import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './share/nav.component';

//1. 导入新的文件
import SearchSuggestionPage from './pages/searchSuggestion.page';
import TotalSalaryPage from './pages/scotiabankTotalSalary.page';
import FunctionComponentLifeCyclePage from './pages/functionComponentLifeCycle.page';
import GetDataFromRestAPIPage from './pages/getDataFromRestApi.page';
import ParentComponentPage from './pages/parentComponent.page';
import PhoneNumberInputPage from './pages/phoneNumberInput.page';
import MyTestPage from './pages/myTestPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className='page-container'>
                
                <div className='nav-container'>
                    <Nav />
                </div>

                <div className='content-container'>
                    <Routes>
                        <Route path='/' element={<SearchSuggestionPage />}/>
                        <Route path='/searchSuggestion' element={<SearchSuggestionPage />}/>
                        <Route path='/totalSalary' element={<TotalSalaryPage />}/>
                        <Route path='/functionComponetLifeCycle' element={<FunctionComponentLifeCyclePage />}/>
                        <Route path='/parentComponent' element={<ParentComponentPage />}/>
                        <Route path='/phoneNumberInput' element={<PhoneNumberInputPage />}/>
                        <Route path='/myTestPage' element={<MyTestPage />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    </React.StrictMode>
);
