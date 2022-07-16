import { Link, usePage } from '@inertiajs/inertia-react'

import React from 'react'

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <div>
            <div className="w-full h-fit items-center bg-white shadow-lg px-10 py-5 flex flex-col sm:flex-row justify-between top-0">
                <div className="px-8">
                    <a href="/" className="flex items-center space-x-2">
                    <img src="img/logo.jpg" className="w-9" alt="" />
                        <img src="img/log.jpg" className="w-12" alt="" />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-gray-700">KEMENTRIAN HUKUM DAN HAM RI</h1>
                            <h1 className="text-sm font-bold text-gray-700">KANTOR WILAYAH SULAWESI TENGAH</h1>
                            <h1 className="text-sm font-bold text-gray-700">LAPAS KELAS II A PALU</h1>
                        </div>
                    </a>
                </div>
                <div className="px-8 py-2">
                    <nav className='space-x-10 flex items-center'>
                        <div className="grid grid-cols-3 space-x-5 text-center ">
                            {auth.user ? (
                                <>
                                    <div className="p-2 bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center justify-center hover:scale-105 transform transition-all duration-500">
                                        <Link href="">About</Link></div>
                                    <div className="p-2 bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center justify-center hover:scale-105 transform transition-all duration-500">
                                        <Link href="/register">Register</Link>
                                    </div>
                                    <div className="p-2 bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center justify-center  hover:scale-105 transform transition-all duration-500">
                                        <Link href="/login">Hi, {auth.user.username}</Link></div>
                                </>
                            ) : (
                                <>
                                    <div className="p-2 bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center justify-center hover:scale-105 transform transition-all duration-500">
                                        <Link href="">About</Link></div>
                                    <div className="p-2 bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center justify-center  hover:scale-105 transform transition-all duration-500">
                                        <Link href="/login">Masuk</Link></div>
                                    <div className="p-2 bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center justify-center hover:scale-105 transform transition-all duration-500">
                                        <Link href="/register">Register</Link>
                                    </div>

                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
