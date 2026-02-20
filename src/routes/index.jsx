
import MainLayout from '../components/layouts/MainLayout';

import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ArticlesPage from '../pages/ArticlesPage';
import ArticleDetailPage from '../pages/ArticleDetailPage';
import AboutPage from '../pages/AboutPage';

import HomePage from '../pages/HomePage';

import UserLayout from '../components/layouts/UserLayout';
import InfoPage from '../pages/User/InfoPage';
import OrdersPage from '../pages/User/OrdersPage';
import SettingsPage from '../pages/User/SettingsPage';

import OrderLayout from '../components/layouts/OrderLayout';

import PrivacyPage from '../pages/staticPages/PrivacyPage';
import FAQPage from '../pages/staticPages/FAQPage';
import NotFoundPage from '../pages/staticPages/NotFoundPage';


const routesForNav = [
    { label: "挑選綠蕨", path: "products", element: <ProductsPage /> },
    { label: "綠蕨故事", path: "articles", element: <ArticlesPage /> },
    { label: "關於我們", path: "about", element: <AboutPage /> },
];

const headerNavItems = routesForNav.map((item) => ({
    label: item.label,
    path: "/" + item.path  // 導航連結需絕對路徑
}));

const routesForFooter = [
    { label: "FAQ", path: "faq", element: <FAQPage /> },
    { label: "隱私政策", path: "privacy", element: <PrivacyPage /> },
];

const footerNavItems = routesForFooter.map((item) => ({
    label: item.label,
    path: "/" + item.path  // 導航連結需絕對路徑
}));



const routes = [
  {
    path: '/',
    element: <MainLayout headerNavItems={headerNavItems} footerNavItems={footerNavItems} />,
    children: [
        {
            index: true,
            element: <HomePage />
        },  

        ...routesForNav.map((item) => ({
            path: item.path,
            element: item.element
        })),

        {
            path: "product/:id",
            element: <ProductDetailPage />
        },

        {
            path: "articles/:slug",
            element: <ArticleDetailPage />
        },

        ...routesForFooter.map((item) => ({
            path: item.path,
            element: item.element
        })),

        {
            path: "order",
            element: <OrderLayout />,//細部流程頁面直接在裡面切換，這邊不需要提供路由
        },
        {
            path: "user",
            element: <UserLayout />,
            children: [
                {
                    path: "info",
                    element: <InfoPage />
                },
                {
                    path: "orders",
                    element: <OrdersPage />
                },
                {
                    path: "settings",
                    element: <SettingsPage />
                }
            ]
        },

    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]   

export default routes;