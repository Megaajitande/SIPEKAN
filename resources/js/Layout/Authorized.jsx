import React from "react";
import Sidebar from "../Components/Sidebar";
import { Head, usePage } from "@inertiajs/inertia-react";
import * as IconHi from "react-icons/hi";
import Header from "../Components/Header";
import toast, { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

export default function Authorized({ children, title }) {
    const { flash } = usePage().props;
    flash.type && toast[flash.type](flash.message);
    return (
        <RecoilRoot>
           <div className="flex h-screen font-poppins bg-indigo-900">
                <Toaster />
                <Head title={title} />
                <Sidebar menu={title} />
                <div className="flex-grow bg-white text-white-400 flex flex-col overflow-hidden">
                    <Header className="shadow-2xl" title={title} user={"Mega"} />
                    <div className="flex flex-col sm:overflow-x-hidden overflow-x-auto overflow-y-auto p-5 bg-white">
                        {children}
                    </div>
                </div>
            </div>
        </RecoilRoot>
    );
}