import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as IconAi from "react-icons/ai";
import * as IconFi from "react-icons/fi";
import * as IconRi from "react-icons/Ri";
import * as IconCg from "react-icons/cg";
import * as IconMd from "react-icons/md";
import * as IconFa from "react-icons/fa";
import { sidebar } from "../store";
import { useRecoilState } from "recoil";

export default function SidebarP({ menu }) {
    const [showSidebar, setShowsidebar] = useRecoilState(sidebar);

    return (
        <div className="">
            {showSidebar && (
                <div className="sm:h-screen h-fit sm:p-0 p-4 sm:w-fit md:w-64 fixed sm:relative bottom-0 w-full overflow-hidden bg-indigo-900">
                    <div className="hidden md:flex sm:hidden justify-center items-center border-b-2 border-yellow-500 space-x-3">
                        <div className="flex space-x-1">
                            <img src="img/logo.jpg" className="w-7 " alt="" />
                            <img src="img/log.jpg" className="w-9 " alt="" />
                        </div>
                        <h1 className="py-6 font-extrabold font-logo tracking-wider text-2xl text-white  hidden md:block sm:hidden">
                            SIPEKAN
                        </h1>
                    </div>
                    {/* <div className="font-poppins text-white overflow-x-hidden overflow-y-auto space-y-2 px-2 mt-5 text-sm"> */}
                    <div className="mt-0 sm:mt-5 md:px-2 flex flex-row sm:flex-col space-y-0 sm:space-y-2 items-center bottom-2 sm:items-start justify-evenly sm:justify-start w-full h-full sm:h-screen">
                        <Link
                            href="/userdashboard"
                            className="w-auto sm:w-full flex justify-between items-center font-semibold space-x-2"
                        >
                            <div
                                className={`${
                                    menu == "Dashboard"
                                        ? "bg-yellow-600"
                                        : "bg-indigo-900 hover:bg-indigo-700 duration-200"
                                } text-sm py-3 sm:px-11 px-6  w-2 sm:w-60 grid grid-cols-4 sm:gap-4 gap-0 place-items-center text-white rounded-xl`}
                            >
                                <div className="">
                                    <IconAi.AiOutlineHome size={25} />
                                </div>
                                <div className="col-span-3 w-full hidden sm:hidden md:block">
                                    <span className="">Beranda</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/antriansaya"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div
                                className={`${
                                    menu == "Antrian Saya"
                                        ? "bg-yellow-600 "
                                        : "bg-indigo-900 hover:bg-indigo-700 duration-200"
                                } text-sm py-3 sm:px-11 px-6  w-2 sm:w-60 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}
                            >
                                <div className="">
                                    <IconFi.FiServer size={25} />
                                </div>
                                <div className="col-span-3 w-full hidden sm:hidden md:block">
                                    <span className="">Jadwal Saya</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/informasikunjungan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div
                                className={`${
                                    menu == "Informasi Kunjungan"
                                        ? "bg-yellow-600"
                                        : "bg-indigo-900 hover:bg-indigo-700 duration-200"
                                } text-sm py-3 sm:px-11 px-6  w-2 sm:w-60 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}
                            >
                                <div className="">
                                    <IconRi.RiInformationLine size={25} />
                                </div>
                                <div className="col-span-3 w-full hidden sm:hidden md:block">
                                    <span className="">
                                        Informasi Kunjungan
                                    </span>
                                </div>
                            </div>
                        </Link>
                        {/* <Link
                            href="/panduan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div
                                className={`${
                                    menu == "Panduan"
                                        ? "bg-yellow-600"
                                        : "bg-indigo-900 hover:bg-indigo-700 duration-200"
                                } text-sm py-3 sm:px-11 px-6  w-2 sm:w-60 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}
                            >
                                <div className="">
                                    <IconCg.CgNotes size={25} />
                                </div>
                                <div className="col-span-3 w-full hidden sm:hidden md:block">
                                    <span className="">Panduan</span>
                                </div>
                            </div>
                        </Link> */}
                        <Link
                            href="/kontakkami"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div
                                className={`${
                                    menu == "Kontak Kami"
                                        ? "bg-yellow-600"
                                        : "bg-indigo-900 hover:bg-indigo-700 duration-200"
                                } text-sm py-3 sm:px-11 px-6  w-2 sm:w-60 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}
                            >
                                <div className="">
                                    <IconMd.MdContactMail size={25} />
                                </div>
                                <div className="col-span-3 w-full hidden sm:hidden md:block">
                                    <span className="">Hubungi Kami</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/koderegistrasi"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div
                                className={`${
                                    menu == "Kode Registrasi"
                                        ? "bg-yellow-600"
                                        : "bg-indigo-900 hover:bg-indigo-700 duration-200"
                                } text-sm py-3 sm:px-11 px-6  w-2 sm:w-60 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}
                            >
                                <div className="">
                                    <IconFa.FaCashRegister size={25} />
                                </div>
                                <div className="col-span-3 w-full hidden sm:hidden md:block">
                                    <span className="">
                                        Registrasi Kunjungan
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/koderegisttp"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div
                                className={`${
                                    menu == "Kode Registrasi titipan"
                                        ? "bg-yellow-600"
                                        : "bg-indigo-900 hover:bg-indigo-700 duration-200"
                                } text-sm py-3 sm:px-11 px-6  w-2 sm:w-60 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl`}
                            >
                                <div className="">
                                    <IconFa.FaCashRegister size={25} />
                                </div>
                                <div className="col-span-3 w-full hidden sm:hidden md:block">
                                    <span className="">Registrasi Titipan</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
