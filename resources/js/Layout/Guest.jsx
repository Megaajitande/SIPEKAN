import React from 'react'
import Navbar from '../Components/Navbar'
import {Head} from "@inertiajs/inertia-react";
export default function Guest({children,title}) {
    return (
        <div className='h-screen flex flex-col'>
            <Head title={title} />
            <Navbar />
            <div className="flex-grow overflow-y-auto">
            {children}
            </div>
        </div>
    )
}
