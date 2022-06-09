import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as IconAi from "react-icons/ai";
import * as IconCg from "react-icons/cg";
import * as IconHi from "react-icons/hi";
import * as IconFa from "react-icons/fa";
import * as IconMd from "react-icons/md";
import * as IconSi from "react-icons/si";
import { useRecoilState } from "recoil";
import { sidebar } from "../store";


export default function Sidebar({ menu }) {
    const [showSidebar, setShowsidebar] = useRecoilState(sidebar);

    return (
        <div className="">
            {showSidebar && (
                <div className="sm:h-screen h-fit sm:p-0 p-4 sm:w-fit md:w-64 fixed sm:relative bottom-0 w-full overflow-hidden bg-indigo-900 ">
                    <div className="flex justify-center items-center  border-b-2 border-yellow-500 space-x-3 ">
                        <img src="img/log.jpg" className="w-9 " alt="" />
                        <h1 className="py-6 font-extrabold font-logo tracking-wider text-2xl text-white">
                            SIPEKAN

                        </h1>
                    </div>
                    <div className="mt-0 sm:mt-5 font-poppins text-white overflow-x-hidden overflow-y-auto space-y-2 px-2 ">
                        <Link
                            href="/dashboard"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className={`${menu == "Dashboard" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1 flex">
                                    <IconAi.AiOutlineHome size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="text-left">Beranda</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/DataWBP"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className={`${menu == "Data WBP" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64  grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconCg.CgUserList size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">WBP</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/datakunjungan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className={`${menu == "Data Kunjungan" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64  grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconAi.AiFillDatabase size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Kunjungan</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/datatitipan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >

                            <div className={`${menu == "Data Titipan" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconHi.HiClipboardList size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Titipan</span>
                                </div>
                            </div>
                        </Link>
                        
                        <Link
                            href="/ruangan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                              <div className={`${menu == "Data Pengunjung" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconSi.SiGoogleclassroom size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Data Ruangan</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/hari"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                              <div className={`${menu == "Data Pengunjung" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconMd.MdToday size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Data Hari</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/waktu"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                              <div className={`${menu == "Data Pengunjung" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconMd.MdAccessTime size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Data Waktu</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/datapengunjung"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className={`${menu == "Data Pengunjung" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconFa.FaUserCog size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Pengguna</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/pengaduan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className={`${menu == "Pengaduan" ? "bg-yellow-600" : "bg-indigo-900 hover:bg-indigo-700 duration-200"} text-sm py-2 px-11 w-64 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}>
                                <div className="col-span-1">
                                    <IconMd.MdContactMail size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Pengaduan</span>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            )}

        </div>
    );
}