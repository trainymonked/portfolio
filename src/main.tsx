import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import Header from './Header.tsx'
import About from './About.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <div className='w-full h-full'>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        Component={App}
                    />
                    <Route
                        path='/about'
                        Component={About}
                    />
                </Routes>
            </div>
        </HashRouter>
    </React.StrictMode>
)
