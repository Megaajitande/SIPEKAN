import React from 'react'
import * as IconFa from "react-icons/fa";
import * as IconMd from "react-icons/md";
import * as IconAi from "react-icons/ai";

export default function footer() {
    return (
        <div className="bg-gray-800 ">
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 w-full p-10 ">
                <div className="flex flex-col bg-white rounded-lg items-center justify-center p-10 space-y-4">
                    <div className=""><IconFa.FaMap size={20} />
                    </div>
                    <div className="font-bold uppercase tracking-widest">Alamat</div>
                    <div className="text-sm italic">Jalan Dewi Sartika No.73, Birobuli Selatan, Palu Selatan, Birobuli Sel., Palu, Kota Palu, Sulawesi Tengah 94111</div>
                </div>
                <div className="flex flex-col bg-white rounded-lg items-center justify-center p-10 space-y-4">
                    <div className=""><IconMd.MdEmail size={20} />
                    </div>
                    <div className="font-bold uppercase tracking-widest">Email </div>
                    <div className="text-sm italic">lapaskelasIIAPalu@sultengprov.go.id</div>
                </div>
                <div className="flex flex-col bg-white rounded-lg items-center justify-center p-10 space-y-4">
                    <div className=""><IconAi.AiFillContacts size={20} />
                    </div>
                    <div className="font-bold uppercase tracking-widest">Telp</div>
                    <div className="text-sm italic">+62451481550 / +6281354522084</div>
                </div>
            </div>
            <div className="flex items-center justify-center py-8">
                <div className="text-white ">Copyright &copy; Sistem Pendaftaran Kunjungan 2022</div>
            </div>
        </div>
    )
}
