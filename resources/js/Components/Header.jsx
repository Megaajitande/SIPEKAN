import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import * as IconHi from "react-icons/hi";
import * as IconRi from "react-icons/Ri";
import * as IconBi from "react-icons/bi";
import * as IconCg from "react-icons/cg";
import { useRecoilState } from "recoil";
import { sidebar } from "../store";

export default function Header({ title, user }) {
    const [showSidebar, setShowsidebar] = useRecoilState(sidebar);
    const [GantiIcon, setIconside] = useState(true);
    const [Icon, setIcon] = useState(false);

    const [showDetail, setShowDetail] = useState(false);

    const logout = () => {
        Inertia.post('logout');
    }
    const profil = () => {
        Inertia.post('profil');
    }

    return (
        <div className="bg-indigo-900 shadow-2xl flex px-7 py-6 justify-between border-b-2 border-yellow-500 relative">
            {showDetail && <div className="flex flex-col space-y-5 space-x-2 w-52 items-start justify-start absolute rounded-lg bg-white  border border-yellow-500 shadow-sm right-10 top-14 p-3 bg ">
                {/* <div className="flex space-x-2 items-start justify-start">
                    <IconCg.CgProfile
                        className="flex flex-col items-center justify-center"
                        size={20}
                    />
                    <button onClick={profil}>Akun Saya</button>
                </div> */}
                <div className="flex space-x-2 items-start justify-start">
                    <IconBi.BiLogOutCircle
                        className="flex items-center justify-center"
                        size={20}
                    />
                    <button onClick={logout}>Logout</button>
                </div>
            </div>}
            <button className="hidden md:block sm:hidden"
                onClick={() => {
                    if (showSidebar) {
                        setShowsidebar(false);
                    } else {
                        setShowsidebar(true);
                    }
                    if (GantiIcon) {
                        setIconside(false);
                    } else {
                        setIconside(true);
                    }
                }}
            >
                {GantiIcon ? (
                    <div className="bg-yellow-500 rounded-lg p-1 font-bold border-2 border-yellow-500">
                        <IconHi.HiOutlineMenuAlt2
                            className="text-white"
                            size={20}
                        />
                    </div>
                ) : (
                    <div className="bg-white rounded-lg p-1 font-bold border-2 ">
                        <IconHi.HiOutlineMenuAlt3
                            className="text-gray-700"
                            size={20}
                        />
                    </div>
                )}
            </button>
            <h1 className=" flex text-base sm:text-lg text-white">Halaman {title}</h1>
            <div className="flex items-center justify-center font-semibold text-lg cursor-pointer" onClick={() => {
                setShowDetail(!showDetail);
            }}>
                <div className="h-6 sm:h-8 w-6 sm:w-8 bg-yellow-500 rounded-full flex items-center justify-center text-white ">
                    {/* <img src="/img/mey.jpg" alt="" /> */}
                    <IconHi.HiUserCircle size={26} />
                </div>
                <span className="pl-2 text-white text-base sm:text-lg">Hai, {user}</span>
                <IconRi.RiArrowDropDownLine
                    className="text-gray-500 hover:text-blue-400"
                    size={24}
                />
            </div>
        </div >
    );
}