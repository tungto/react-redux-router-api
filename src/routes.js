import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFounPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: true,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage
            history={history}
            match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFounPage />
    },


];

export default routes;

