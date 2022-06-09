import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, form, lihatdata } from '../store';
import * as IconAi from "react-icons/ai";
import ModalRoot from './ModalRoot';

export default function LihatDataWbp({ showModal, setShowModal }) {
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editWbp = useRecoilValue(editData);

    return (
        <ModalRoot showModal={showModal} setShowModal={setShowModal}>
            <div className="p-5 top-10 rounded-md shadow-xl absolute space-y-3 items-center justify-center bg-white ring-1 md:w-3/6 w-full">
                <div className="flex col-span-1 items-end justify-end">
                    <button>
                        <IconAi.AiFillCloseCircle size={40}
                            onClick={() => {
                                setShowModal(false)
                            }}
                        />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center font-bold "> DETAIL</div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1"> Nama WBP </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.nama_wbp}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className=" col-span-5 flex space-x-1"> Nomor Register </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.no_register}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Jenis Kelamin </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.jenis_kelamin}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Agama  </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.agama}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Pendidikan </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.pendidikan}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Tempat Lahir </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.tempat_lahir}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Alamat </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.alamat}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Kewarganegaraan </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.kewarganegaraan}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Perkara/Pasal </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.perkara_pasal}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Tanggal Mulai ditahan </div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.tanggal_mulai_ditahan}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Lama Pidana</div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.lama_dipidana}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Remisi yang diberikan</div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.remisi}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Tanggal Habis Masa Penahanan</div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.tanggal_habis_masa_penahanan}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Keterangan</div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <input
                            disabled
                            type="text"
                            className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                            value={editWbp?.keterangan}
                        />
                    </div>
                </div>
            </div>
        </ModalRoot>
    )
}
