import { Tab } from '@headlessui/react';
import React, { useState } from 'react'
import AuthorizedP from '../../Layout/AuthorizedP';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function InformasiKnj() {
    let [categories] = useState({
        Persyaratan: [
            {
                id: 1,
                title: '1. Surat izin mengunjungi narapidana atau Tahanan dari instansi yang melakukan penahanan',
            },
            {
                id: 2,
                title: "2. Identitas pengunjung",
            },
        ],
        Prosedur: [
            {
                id: 1,
                title: '1. Pengunjung mendaftarkan diri melalui Sistem SIPEKAN agar mendapatkan Nomor Antrian',
            },
            {
                id: 2,
                title: '2. Pengunjung Menyimpan Nomor Antrian yang telah didapatkan beserta bukti Registrasi',
            },
            {
                id: 3,
                title: '3. Pengunjung menunggu panggilan dari Petugas Pemasyarakatan berdasarkan nomor urut antrian',
            },
            {
                id: 4,
                title: '4. Barang bawaan dan pengunjung digeledah oleh Petugas Pemasyarakatan',
            },
            {
                id: 5,
                title: '5. Pengunjung dipertemukan dengan Tahanan atau narapidana oleh Petugas Pemasyarakatan di tempat yang telah disediakan',
            },
        ],
        Jangka_Waktu_Penyelesaian: [
            {
                id: 1,
                title: 'Paling lama 30 menit sejak pengunjung mendaftar sampai dengan dipertemukan dengan WBP',
            },

        ],
        Jaminan_Pelayanan: [
            {
                id: 1,
                title: '1. Kunjungan tidak dipungut biaya',
            },
            {
                id: 2,
                title: "2. Pasti bertemu dengan Tahanan yang akan dikunjungi",
            },
            {
                id: 3,
                title: "3. Pelayanan tidak dipungut biaya",
            },
            {
                id: 4,
                title: "4. Pelayanan yang ramah, sopan dan tepat waktu",
            },
        ],
        Jaminan_Keamanan: [
            {
                id: 1,
                title: '1. Layanan kunjungan bebas pelecehan, perbuatan asusila; dan perbuatan tercela lainnya',
            },
            {
                id: 2,
                title: "2. Layanan kunjungan tidak ada diskriminasi; dan",
            },
            {
                id: 3,
                title: "3. Barang titipan pengunjung tersimpan dengan aman",
            },
        ],
    })

    return (
        <div className="">
            <div className="flex items-center justify-center font-bold py-4">LAYANAN KUNJUNGAN WBP</div>
            <div className="flex flex-col items bg-center justify-center w-full h-full sm:px-0 ">
                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 sm:space-x-5 bg-blue-900/20 rounded-xl bg">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        ' w-full px-0 py-2.5 text-xs sm:text-sm  leading-5 font-medium text-white rounded-lg',
                                        'focus:outline-none focus:ring-2 bg-yellow-500 ring-offset-2 border-2 ring-offset-blue-400 ring-white ring-opacity-60 hover:scale-105 transform transition-all duration-500',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'bg-white rounded-xl p-3 px-0 py-2.5 text-xs sm:text-sm',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 rounded-xl shadow-xl border-2 border-gray-300 '
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 rounded-md hover:bg-coolGray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>


                                            <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
                <div className="flex flex-col py-10">
                    <div className="grid grid-cols-3 items bg-center justify-center ">
                        <div className="  bg-blue-600 border-2 h-full w-full">
                            <div className=" flex items-center justify-center w-full h-full space-x-16">
                                <div className="flex h-full w-full items-center justify-center hover:scale-105 transform transition-all duration-500"> <img src="/img/alur.jpg" alt="" /></div>
                            </div>
                        </div>
                        <div className="  bg-blue-600 border-2 h-full w-full">
                            <div className=" flex items-center justify-center w-full h-full space-x-16">
                                <div className="flex h-full w-full items-center justify-center hover:scale-105 transform transition-all duration-500"> <img src="/img/jadwal.jpg" alt="" /></div>
                            </div>
                        </div>
                        <div className="  bg-blue-600 border-2 h-full w-full">
                            <div className=" flex items-center justify-center w-full h-full space-x-16">
                                <div className="flex h-full w-full items-center justify-center hover:scale-105 transform transition-all duration-500"> <img src="/img/larangan.jpg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
InformasiKnj.layout = (page) => <AuthorizedP children={page} title="Informasi Kunjungan" />;
