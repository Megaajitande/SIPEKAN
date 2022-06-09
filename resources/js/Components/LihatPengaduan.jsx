import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, lihatdata } from '../store';
import * as IconAi from "react-icons/ai";
import ModalRoot from './ModalRoot';

export default function LihatPengaduan({ showModal, setShowModal }) {
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editpengaduan = useRecoilValue(editData);
    const [nama_lengkap, setnama_lengkap] = useState(editpengaduan?.nama_lengkap);
    const [email, setemail] = useState(editpengaduan?.email);
    const [pesan, setpesan] = useState(editpengaduan?.pesan);

    return (
        <ModalRoot showModal={showModal} setShowModal={setShowModal}>
            <div className="p-5 top-12 rounded-xl shadow-xl absolute space-y-3 items-center justify-center  bg-white ring-1 sm:w-2/4 w-full h-3/4">
                <div className="flex col-span-1 items-end justify-end">
                    <button>
                        <IconAi.AiFillCloseCircle size={40}
                            onClick={() => {
                                setShowModal(false)
                            }}
                        />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center font-bold mb-5 "> DETAIL</div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1"> Nama Lengkap </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpengaduan?.nama_lengkap}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1"> Alamat Email </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpengaduan?.email}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Pesan </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <textarea
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpengaduan?.pesan}
                        />
                    </div>
                </div>
            </div>
        </ModalRoot>

    )
}
