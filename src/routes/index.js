import { LayoutProduct } from 'components/layouts';

import Home from 'pages/Home';
import About from 'pages/About';
import Product from 'pages/Product';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/product', component: Product, Layout: LayoutProduct }
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }