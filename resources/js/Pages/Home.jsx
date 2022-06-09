import React from 'react'
import { useRecoilState } from 'recoil';
import Navbar from '../Components/Navbar'
import Guest from '../Layout/Guest'
import { form } from '../store';
import InformasiKnj from './User/InformasiKnj';
import Footer from '../Components/footer'


export default function Home() {
    // const [showForm, setShowForm] = useRecoilState(form);
    return (
        <div>

            <div className="overflow-y-auto  w-full h-full bg-indigo-900">
                <div className="bg-hero flex items-center sm:items-start w-full h-full relative">
                    <span className="bg-indigo-900 bg-opacity-80 absolute w-full h-full z-10"></span>
                    <div className="flex justify-center py-20  items-center w-full z-20 h-full">
                        <div className="flex flex-col items-center w-full space-y-5 z-20 px-20">
                            <h1 className="text-3xl sm:text-5xl font-bold text-white flex flex-col text-center sm:text-left">Sistem Informasi Pendaftaran Kunjungan</h1>
                            <p className="text-white">Lapas Kelas IIA Palu</p>
                            <a href="/userdashboard" className="bg-white w-44 sm:w-96 text-center rounded-xl shadow-xl p-3 font-bold 
                            bg-gradient-to-r from-red-600 to-yellow-500 text-white transition-all duration-300 transform 
                            hover:scale-105">Daftar Sekarang</a>
                        </div>
                    </div>
                    {/* <div className="">
                        {showForm && <InformasiKnj />}
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}
Home.layout = (page) => <Guest children={page} title="Home" />;
// h-4/5
