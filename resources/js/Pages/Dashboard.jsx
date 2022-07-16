import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Authorized from "../Layout/Authorized";
// import { Head } from "@inertiajs/inertia-react";
import * as IconAi from "react-icons/ai";
import * as IconMd from "react-icons/md";
import * as IconHi from "react-icons/hi";

export default function Dashboard() {
    const { stat } = usePage().props;

    return (
        <div className="">
            {/* <Toaster /> */}
            <div className="flex space-x-3 col-span-4">
                <div className="grid grid-cols-4 gap-3 text-gray-500 font-semibold w-full shadow-transparent">
                    <div className="flex flex-col justify-start items-start bg-white shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-5xl mt-2 font-mono text-blue-400 text-md">
                            {stat?.pengguna}
                        </h6>
                        <div className=" flex text-sm mt-2 font-normal  text-blue-400 space-x-2">
                            <IconMd.MdPerson size={20} />
                            <div className="">Pengguna</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-white shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-5xl mt-2 font-mono text-yellow-400 text-md">
                            {stat?.kunjungan}
                        </h6>
                        <div className=" flex text-sm mt-2 font-normal  text-yellow-400 space-x-2">
                            <IconHi.HiOutlineDatabase size={20} />
                            <div className="">Kunjungan</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-white shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-5xl mt-2 font-mono text-green-400 text-md">
                            {stat?.titipan}
                        </h6>
                        <div className=" flex text-sm mt-2 font-normal text-green-400 space-x-2">
                            <IconHi.HiOutlineDatabase size={20} />
                            <div className="">Titipan</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-white shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-5xl mt-2 font-mono text-red-400 text-md">
                            {stat?.Pengaduan}
                        </h6>
                        <div className=" flex text-sm mt-2 font-normal  text-red-400 space-x-2">
                            <IconAi.AiOutlineMail size={20} />
                            <div className="">Saran & Masukan</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-20">
            <div className="font-bold text-indigo-700 text-center items-center">
               SISTEM PENJADWALAN MENGGUNAKAN ALGORITMA GENETIKA
            </div>
            <div className="pt-5">Aplikasi ini berguna untuk membuat penjadwalan Kunjungan di LAPAS Kelas IIA Palu. sehingga Pengunjung nantinya dapat medaftar kunjungan menggunakan sistem</div>
           <div className="pt-16 font-bold text-indigo-700 text-center items-center">Berikut Adalah Tutorial Penggunaanya</div>
            </div>
        </div>
    );
}
Dashboard.layout = (page) => <Authorized children={page} title="Dashboard" />;
