import { Outlet, Link , NavLink , useParams , useLocation } from "react-router-dom";
import { useState } from "react";

import userIcon from '../../img/user.png';
import cartIcon from '../../img/cart.png';



import Footer from './Footer';

export default function MainLayout({ 

    headerNavItems ,
    footerNavItems ,

}) {   
    const CartCount = 11;//TODO: get from backend

    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden w-full" >

            <header className="header" >
                <div /*for desktop*/ className="fixed top-0 left-0 z-50
                                                w-full h-16 backdrop-blur-sm bg-background-50 border-b border-border-25 
                                                hidden
                                                md:block ">
                    <div className="w-full max-w-screen-xl mx-auto flex-row-between-center gap-8 py-2 px-8">
                        <div className="logo">
                            <Link to="/" className="" >
                                <div className="w-32 h-10 bg-placeholder rounded-md flex-row-center-center">
                                綠蕨飾（logo）
                                </div>
                            </Link>
                        </div>

                        <div className="nav 
                                        flex-row-center gap-8 
                                        text-lg" >
                        {headerNavItems.map((item) => (
                            <NavLink key={item.path} to={item.path}  
                                     className={item.path === location.pathname ? 'nav-item active' : 'nav-item'} >
                                {item.label}
                            </NavLink>
                        ))}
                        </div>

                        <div /*header-actions*/ className=" flex-row-center-center gap-8 py-2 ">
                            <Link to="/order" className="btn-icon relative">
                                <img src={cartIcon} alt="cart" className="w-8 h-8" />
                                {CartCount > 0 && (
                                    <div className="absolute -top-2 -right-2
                                                    w-6 h-6 bg-primary rounded-full
                                                    text-xs text-invert flex items-center justify-center ">
                                        {CartCount}
                                    </div>
                                )}
                            </Link>
                            <Link to="/user/orders" className="btn-icon user">
                                <img src={userIcon} alt="user" className="w-10 h-10" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div /*for desktop space*/ className="h-16 w-full md:block hidden" />

                <div /*for mobile*/ className="fixed top-4 right-4 flex gap-6 z-50
                                                block
                                                md:hidden">
                    <button /*cart*/ className="btn-icon relative">
                        <Link to="/order" className="btn-icon relative">
                            <img src={cartIcon} alt="cart" className="w-8 h-8" />
                            {CartCount > 0 && (
                            <span className="absolute -top-2 -right-2
                                            w-6 h-6 bg-primary rounded-full
                                            text-sm text-invert flex items-center justify-center ">
                                {CartCount}
                            </span>
                            )}
                        </Link>
                    </button>

                    <button className="btn-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <div className="w-8 h-8 flex-col-center
                                        bg-secondary rounded-md pb-1">
                            <span className="text-lg text-invert ">☰</span>
                        </div>
                    </button>

                </div>

                <div className={`fixed top-0 right-0 z-40 w-full h-full 
                                bg-background-75 backdrop-blur-sm 
                                transition-all duration-300
                                ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                        <div className="w-full h-24"/>
                        <div className="w-full px-8 flex-col-center-end gap-8">
                            <button className="logo" onClick={() => setIsMobileMenuOpen(false)}>
                                <Link to="/" className="" >
                                    <div className="w-64 h-20 bg-placeholder rounded-md flex-row-center-center">
                                        綠蕨飾（logo）
                                    </div>
                                </Link>
                            </button>
                            <button className="flex-col-center-center gap-8" onClick={() => setIsMobileMenuOpen(false)}>
                                {headerNavItems.map((item) => (
                                    <NavLink key={item.path} to={item.path} 
                                             className={`nav-item text-lg text-NotoSerifTC ${item.path === location.pathname ? 'text-secondary' : ''}`}>
                                        {item.label}
                                    </NavLink>
                                ))}
                            </button>
                        </div>
                </div>
            </header>
            

            <div className="flex-1 w-full overflow-x-hidden min-h-0" /*撐滿容器*/ >
                <main className="mx-auto w-full" >
                    <Outlet />
                </main>
            </div>


            <Footer headerNavItems={headerNavItems} footerNavItems={footerNavItems} />

        </div>
    )
}