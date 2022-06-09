import React from 'react'
import AuthorizedP from '../../Layout/AuthorizedP';
import * as IconGr from "react-icons/gr";

export default function Antriansaya() {
    return (
        <div className=" flex flex-col border-2 px-1 py-8 border-gray-500 rounded-xl items-center justify-center  h-screen   ">
            <div className=" flex items-center justify-center w-full h-full space-x-16">
                <div className="flex w-10 h-10 sm:w-20 sm:h-16 items-center justify-center "> <img src="/img/logo.jpg" alt="" /></div>
                <div className="flex w-12 h-10 sm:w-24 sm:h-20 items-center justify-center"> <img src="/img/log.jpg" alt="" /></div>
            </div>
            <div className="px-2 py-4 rounded-non  bg-indigo-900 w-full h-5 text-center  
            flex justify-center items-center text font-bold text-white ">LOKET ANTRIAN KUNJUNGAN</div>
            <div className="flex flex-col items-center justify-center w-full h-full space-x-16">
                <div className=" flex  flex-col items-center justify-center w-full h-full">
                    <div className="flex  space-x-20 items-center justify-center ">
                        <div className="font-bold">Nomor Antrian Anda</div>
                        <div className="font-bold ">Nomor Antrian Saat ini</div>
                    </div>


                    <div className="flex items-center justify-center py-5">
                        <div className="bg-white px-5 py-5 rounded-md border-2 border-gray-300 w-60 h-5 text-center flex justify-center items-center text">0</div>
                        <div className="bg-white px-5 py-5 rounded-md border-2 border-gray-300 w-60 h-5 text-center flex justify-center items-center text">0</div>
                    </div>
                    <div className="flex items-center justify-center space-x-36">
                        <div className="">Hari, 00-00-0000</div>
                        <div className="">Jam, 00.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Antriansaya.layout = (page) => <AuthorizedP children={page} title="Antrian Saya" />;