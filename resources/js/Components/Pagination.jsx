import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Pagination({links}) {
    return (
        <div className="py-3 space-x-2">
            {links.map((link, key)=>{
                return(
                    <Link className={`px-3 p-1 ${
                        link.active
                        ?"bg-gray-800 text-white"
                        :"text-gray-900 bg-white hover:bg-gray-100"
                    }`}
                    href={link.url}
                    >
                        {link.label}
                        </Link>
                );
            })}
            
        </div>
    )
}
