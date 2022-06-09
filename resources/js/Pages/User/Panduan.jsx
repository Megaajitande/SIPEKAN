import React from 'react'
import AuthorizedP from '../../Layout/AuthorizedP';

export default function Panduan() {
    return (
        <div className=''>
            ini adalah halaman panduan
        </div>
    )
}
Panduan.layout = (page) => <AuthorizedP children={page} title="Panduan" />;