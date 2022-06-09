import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import AuthorizedP from '../../Layout/AuthorizedP';
import * as IconAi from "react-icons/ai";
import * as IconFi from "react-icons/fi";
import * as IconRi from "react-icons/Ri";
import * as IconCg from "react-icons/cg";
import * as IconMd from "react-icons/md";
import * as IconFa from "react-icons/fa";


export default function User_Dashboard() {
    return (

        <div className=" w-full h-full p-5 space-x-5 flex flex-col justify-center items-center ">
            {/* <div className="grid grid-cols-5 space-x-1">
                <Link
                    href="/antriansaya"
                    className="flex justify-between items-center font-semibold space-x-2"
                >
                    <div className="focus:outline-none focus:ring-2 bg-yellow-500 ring-offset-2 border-2 ring-offset-blue-400 ring-white ring-opacity-60 hover:scale-105 transform transition-all duration-500 py-5 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl ">
                        <div className="col-span-1">
                            <IconFi.FiServer size={20} />
                        </div>
                        <div className="col-span-3 w-full">
                            <span className="">Antrian Saya</span>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/informasikunjungan"
                    className="flex justify-between items-center font-semibold space-x-2"
                >
                    <div className="focus:outline-none focus:ring-2 bg-yellow-500 ring-offset-2 border-2 ring-offset-blue-400 ring-white ring-opacity-60 hover:scale-105 transform transition-all duration-500 py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                        <div className="col-span-1">
                            <IconRi.RiInformationLine size={20} />
                        </div>
                        <div className="col-span-3 w-full">
                            <span className="">Informasi Kunjungan</span>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/panduan"
                    className="flex justify-between items-center font-semibold space-x-2"
                >
                    <div className="focus:outline-none focus:ring-2 bg-yellow-500 ring-offset-2 border-2 ring-offset-blue-400 ring-white ring-opacity-60 hover:scale-105 transform transition-all duration-500 py-5 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                        <div className="col-span-1">
                            <IconCg.CgNotes size={20} />
                        </div>
                        <div className="col-span-3 w-full">
                            <span className="">Panduan</span>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/kontakkami"
                    className="flex justify-between items-center font-semibold space-x-2"
                >
                    <div className="focus:outline-none focus:ring-2 bg-yellow-500 ring-offset-2 border-2 ring-offset-blue-400 ring-white ring-opacity-60 hover:scale-105 transform transition-all duration-500 py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                        <div className="col-span-1">
                            <IconMd.MdContactMail size={20} />
                        </div>
                        <div className="col-span-3 w-full">
                            <span className="">Hubungi Kami</span>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/koderegistrasi"
                    className="flex justify-between items-center font-semibold space-x-2"
                >
                    <div className="focus:outline-none focus:ring-2 bg-yellow-500 ring-offset-2 border-2 ring-offset-blue-400 ring-white ring-opacity-60 hover:scale-105 transform transition-all duration-500 py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                        <div className="col-span-1">
                            <IconFa.FaCashRegister size={20} />
                        </div>
                        <div className="col-span-3 w-full">
                            <span className="">Registrasi Kunjungan</span>
                        </div>
                    </div>
                </Link>
            </div> */}
            <div className="w-full h-full p-5 space-x-5 flex  justify-center items-center">
                <Link href="/pendaftarankunjungan" className="bg-white px-3 sm:px-5 py-5 sm:py-10 rounded-xl shadow-xl border-2 border-gray-300 hover:scale-105 transform transition-all duration-500">
                    <h1 className="py-6 font-extrabold font-logo tracking-wider text-xl text-center sm:text-2xl text-blue-900">
                        PENDAFTARAN KUNJUNGAN

                    </h1></Link>
                <Link href="/pendaftarantitipan" className="bg-white px-3 sm:px-5 py-5 sm:py-10 rounded-xl shadow-xl border-2 border-gray-300 hover:scale-105 transform transition-all duration-500">
                    <h1 className="py-6 font-extrabold font-logo tracking-wider text-xl text-center sm:text-2xl text-blue-900">
                        PENDAFTARAN TITIPAN
                    </h1>
                </Link>
            </div>
        </div>
    );
}

User_Dashboard.layout = page => <AuthorizedP children={page} title="Dashboard" />
