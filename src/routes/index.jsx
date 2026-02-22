import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import DocumentTitle from './DocumentTitle';

import MainLayout from '../components/layouts/MainLayout';

import HomePage from '../pages/HomePage';

import ProductsPage from '../pages/Product/ProductsPage';
import ProductDetailPage from '../pages/Product/ProductDetailPage';
import ArticlesPage from '../pages/Article/ArticlesPage';
import ArticleDetailPage from '../pages/Article/ArticleDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

import OrderLayout from '../components/layouts/OrderLayout';

import UserLayout from '../components/layouts/UserLayout';
import InfoPage from '../pages/User/InfoPage';
import OrdersPage from '../pages/User/OrdersPage';

import PrivacyPage from '../pages/staticPages/PrivacyPage';
import FAQPage from '../pages/staticPages/FAQPage';
import NotFoundPage from '../pages/staticPages/NotFoundPage';
import APITestPage from '../pages/staticPages/APITestPage';

// 頁面標題集中管理（顯示為：title | 綠蕨飾）


const Pages = {

    headerNav:[
        { path: "products", element: <ProductsPage />, title:'挑選綠蕨'  },
        { path: "articles", element: <ArticlesPage />, title: '綠蕨故事' },
        { path: "about", element: <AboutPage />, title: '關於我們' },
        { path: "contact", element: <ContactPage />, title: '聯絡我們' },
    ],
    details:[
        { path: "product/:id", element: <ProductDetailPage />, title: '商品詳情' },
        { path: "articles/:slug", element: <ArticleDetailPage />, title: '文章' },
    ],
    footerNav:[
        { path: "faq", element: <FAQPage />, title: '常見問題' },
        { path: "privacy", element: <PrivacyPage />, title: '隱私權政策' },
    ],
    order:[
        { path: "order", element: <OrderLayout />, title: '購物車' },
    ],
    // user使用者頁面有巢狀結構，直接寫在下面
    notFound:[
        { path: "*", element: <NotFoundPage />, title: '頁面不存在' },
    ],
    APITest:[
        { path: "api-test", element: <APITestPage />, title: 'API測試' },
    ],

};


function RootLayout() {
  return (
    <Fragment>
      <DocumentTitle />
      <Outlet />
    </Fragment>
  );
}


const headerNavItems = Pages.headerNav.map((item) => ({
    label: item.title,
    path: "/" + item.path  // 導航連結需絕對路徑
}));

const footerNavItems = Pages.footerNav.map((item) => ({
    label: item.title,
    path: "/" + item.path,  // 導航連結需絕對路徑
}));



export default function routes() {
    return [
        {
            element: <RootLayout />,
            children: [{
                path: '/',
                element: <MainLayout headerNavItems={headerNavItems} footerNavItems={footerNavItems} />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                        handle: { title: '' },
                    },
                    ...Object.values(Pages).flatMap((routes) =>
                        routes.map((item) => ({
                            path: item.path,
                            element: item.element,
                            handle: { title: item.title },
                        }))
                    ),
                    {
                        path: "user",
                        element: <UserLayout />,
                        children: [
                            {
                                path: "orders",
                                element: <OrdersPage />,
                                handle: { title: '查看訂單' },
                            },
                            {
                                path: "info",
                                element: <InfoPage />,
                                handle: { title: '會員資料' },
                            },
                        ],
                    },
                ],

            }]
        },  
    ];
}