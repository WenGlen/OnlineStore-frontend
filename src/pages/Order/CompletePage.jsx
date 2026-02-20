import React from 'react';

export default function CompletePage() {
    return (
        <>

{/* Main Content Area */}
<main className="flex-1 flex flex-col items-center justify-center py-12 px-6">
<div className="max-w-[640px] w-full flex flex-col items-center">
{/* Success Icon/Illustration Container */}
<div className="relative mb-8 group">
<div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
<div className="relative w-64 h-64 bg-white dark:bg-[#1a2e1c] rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-primary/10">
<div className="w-full h-full bg-center bg-no-repeat bg-contain" data-alt="Beautiful green Staghorn fern platycerium against a neutral background" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMEAD43CwrN6Si2hyVQo-N2d137ICZzGYFJVRfn02RMxewYDHSrevoYVP7clRQ1IhEEcChMxqYgD1w42APOzkTTfwOE7EMgBLBa1cYj-fiRE9oqO0siLrOi2KPfN3XjhFVvwsGrQ41dXt3i3ktdL-VU-th46qYZEeNnxyaGDSMQZDMvOw9jfyGj2JsKcWHQFbaLYoYmmrH_OiyuqpPLzagxAon5fw6diH5gZDBDh1qJcz3bLQqHjBwPynA6Op4qaoifx5DzW1Sy1kx")' }}>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center">
<span className="material-symbols-outlined font-bold">check</span>
</div>
</div>
{/* Headline Section */}
<div className="text-center mb-8">
<h1 className="text-[#0d1b0f] dark:text-[#f6f8f6] tracking-tight text-[36px] md:text-[42px] font-bold leading-tight pb-4">
                    Thank You for Your Purchase
                </h1>
<p className="text-[#4c9a52] dark:text-[#8bc38e] text-lg font-normal leading-relaxed max-w-md mx-auto">
                    Thank you for bringing a piece of nature home. Your green friend is being prepared for its journey.
                </p>
</div>
{/* Order Details List */}
<div className="w-full bg-white dark:bg-[#1a2e1c] rounded-xl border border-[#cfe7d1] dark:border-[#1d351f] shadow-sm mb-10 overflow-hidden">
<div className="p-6 grid grid-cols-1 gap-y-0">
<div className="grid grid-cols-2 py-4 border-b border-dashed border-[#cfe7d1] dark:border-[#1d351f]">
<p className="text-[#4c9a52] dark:text-[#8bc38e] text-sm font-medium flex items-center gap-2 uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">confirmation_number</span>
                            Order Number
                        </p>
<p className="text-[#0d1b0f] dark:text-[#f6f8f6] text-sm font-bold text-right font-serif">#PT-88291</p>
</div>
<div className="grid grid-cols-2 py-4 border-b border-dashed border-[#cfe7d1] dark:border-[#1d351f]">
<p className="text-[#4c9a52] dark:text-[#8bc38e] text-sm font-medium flex items-center gap-2 uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">local_shipping</span>
                            Expected Delivery
                        </p>
<p className="text-[#0d1b0f] dark:text-[#f6f8f6] text-sm font-bold text-right">Friday, Oct 24th</p>
</div>
<div className="grid grid-cols-2 py-4">
<p className="text-[#4c9a52] dark:text-[#8bc38e] text-sm font-medium flex items-center gap-2 uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">mail</span>
                            Confirmation Email
                        </p>
<p className="text-[#0d1b0f] dark:text-[#f6f8f6] text-sm font-normal text-right truncate">hello@customer.com</p>
</div>
</div>
</div>
{/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="px-8 py-4 bg-primary text-background-dark dark:text-background-dark font-bold rounded-lg hover:brightness-110 transition-all text-center flex items-center justify-center gap-2 shadow-md" href="#">
<span className="material-symbols-outlined">arrow_back</span>
                    Back to Shop
                </a>
<a className="px-8 py-4 bg-transparent border border-[#cfe7d1] dark:border-[#1d351f] text-[#0d1b0f] dark:text-[#f6f8f6] font-medium rounded-lg hover:bg-white dark:hover:bg-[#1a2e1c] transition-all text-center flex items-center justify-center gap-2" href="#">
<span className="material-symbols-outlined">description</span>
                    View Invoice
                </a>
</div>
{/* Social/Community */}
<div className="mt-12 text-center pb-8">
<p className="text-[#4c9a52] text-sm font-medium mb-3">Share your growth journey</p>
<div className="flex gap-4 justify-center">
<a className="text-[#0d1b0f] dark:text-[#f6f8f6] hover:text-primary transition-colors" href="#">
<svg className="size-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a className="text-[#0d1b0f] dark:text-[#f6f8f6] hover:text-primary transition-colors" href="#">
<svg className="size-5" fill="currentColor" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
</div>
<p className="text-[10px] text-[#4c9a52]/60 mt-4 uppercase tracking-[0.2em]">© 2024 Platycerium Studio</p>
</div>
</div>
</main>

        </>
    );
}