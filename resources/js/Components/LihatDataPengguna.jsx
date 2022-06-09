import React, { useState } from 'react'
import * as IconAi from "react-icons/ai";
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, lihatdata } from '../store';
import ModalRoot from './ModalRoot';


export default function LihatDataPengguna({ showModal, setShowModal }) {
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editpng = useRecoilValue(editData);
    const [nama_lengkap, setnama_lengkap] = useState(editpng?.nama_lengkap);
    const [nomor_identitas, setnomor_identitas] = useState(editpng?.nomor_identitas);
    const [email, setemail] = useState(editpng?.email);
    const [no_handphone, setno_handphone] = useState(editpng?.no_handphone);
    const [username, setusername] = useState(editpng?.username);
    const [foto, setfoto] = useState(editpng?.foto);

    return (
        <ModalRoot showModal={showModal} setShowModal={setShowModal}>
            <div className="p-5 top-12 rounded-xl shadow-xl absolute space-y-3 items-center justify-center  bg-white ring-1 sm:w-2/4 w-full">
                <div className="flex col-span-1 items-end justify-end">
                    <button>
                        <IconAi.AiFillCloseCircle size={40}
                            onClick={() => {
                                setShowModal(false)
                            }}
                        />
                    </button>
                </div>
                {/* <div className="p-5 rounded-md shadow-xl absolute space-y-3 items-center justify-center bg-white  sm:w-2/4 w-full"> */}
                <div className="flex flex-col items-center justify-center font-bold mb-5 "> DETAIL</div>
                <div className="flex justify-center items-center w-full ">
                    <div className=" flex  justify-center items-center">
                        <img src={`storage/${editpng?.foto}`} alt="" className='w-56' />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1"> Nama Lengkap </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpng?.nama_lengkap}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1"> Username </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpng?.username}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Nomor Identitas </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpng?.nomor_identitas}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Nomor Handphone</div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpng?.no_handphone}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Alamat Email</div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editpng?.email}
                        />
                    </div>
                </div>
            </div>
        </ModalRoot>
    )
}
