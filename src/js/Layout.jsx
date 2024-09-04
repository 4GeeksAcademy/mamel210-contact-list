import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import injectContext from './store/appContext.js';

/* import { BackendURL } from './component/BackendURL.jsx'; */

import { Home } from './pages/Home.jsx';
import { AddContact } from './pages/AddContact.jsx';
import { EditContact } from './pages/EditContact.jsx';

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || '';

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == '')
        return <BackendURL />;

    return (
        <div className='layoutContainer'>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<AddContact />} path='/add-contact' />
                    <Route element={<EditContact />} path='/edit-contact' />                  
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
