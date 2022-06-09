import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, lihatdata } from '../store';
import * as IconAi from "react-icons/ai";
import ModalRoot from './ModalRoot';
import { Inertia } from '@inertiajs/inertia';

export default function LihatDataTitipan({ showModal, setShowModal }) {
    const { register, handleSubmit, formState: { error } } = useForm();
    const [editstatus, setEditttp] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editttp = useRecoilValue(editData);
    // const [nama_wbp, setnama_wbp] = useState(editttp ? editttp?.wbp.nama_wbp : namawbp[0].id);
    const [nama_wbp, setnama_wbp] = useState(editttp?.wbp?.nama_wbp);
    const [hubungan, sethubungan] = useState(editttp?.hubungan);
    const [nama_pengirim, setnama_pengirim] = useState(editttp?.nama_pengirim);
    const [nomor_identitas, setnomor_identitas] = useState(editttp?.nomor_identitas);
    const [nomor_hanphone, setnomor_hanphone] = useState(editttp?.nomor_hanphone);
    const [jenis_kelamin, setjenis_kelamin] = useState(editttp ? editttp?.jenis_kelamin : 'Laki-laki');
    const [alamat, setalamat] = useState(editttp?.alamat);
    const [jenis_kiriman, setjenis_kiriman] = useState(editttp ? editttp?.jenis_kiriman : 'Makanan');
    const [jumlah_uang, setjumlah_uang] = useState(editttp?.jumlah_uang);
    const [detail_kiriman, setdetail_kiriman] = useState(editttp?.detail_kiriman);
    const [waktu_dan_tglpengiriman, setwaktu_dan_tglpengiriman] = useState(editttp?.waktu_dan_tglpengiriman);
    const [foto, setfoto] = useState(editttp?.foto);
    const [status, setstatus] = useState(editttp ? editttp?.status : '1');

    const updatestatus = (ttp) => {
        ttp['status'] = status;

        Inertia.post("/editdatatitipan", ttp, {
            onSuccess: () => {
                setShowModal(false);
            }
        });
    }

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
                <form onSubmit={handleSubmit(updatestatus)}>

                    <div className="flex flex-col items-center justify-center font-bold mb-5 "> DETAIL</div>
                    <div className="flex justify-center items-center w-full ">
                        <div className=" flex  justify-center items-center">
                            <img src={`storage/${editttp?.foto}`} alt="" className='w-56' />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1"> Nama WBP </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.wbp?.nama_wbp}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1"> Hubungan </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.hubungan}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Nama Pengirim </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.nama_pengirim}
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
                                value={editttp?.nomor_identitas}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Nomor Handphone </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.nomor_hanphone}
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
                                value={editttp?.jenis_kelamin}
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
                                value={editttp?.alamat}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Jenis Kiriman </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.jenis_kiriman}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Jumlah Uang </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.jumlah_uang}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Detail Kiriman </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.detail_kiriman}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Waktu dan Tanggal Penitipan</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.waktu_dan_tglpengiriman}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Kode Penitipan</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editttp?.hubungan}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Status</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 text-left">
                            <select
                                className="mt-1 block w-full py-2 px-3 border-2 border-yellow-500 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setstatus(e.target.value)
                                }}
                                value={status}>
                                <option value=''>--Pilih--</option>
                                <option value='1'>1. Belum Menitip</option>
                                <option value='2'>2. Sudah Menitip</option>
                                <option value='3'>3. Kadaluwarsa</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col space-x-4 items-center justify-center">
                        <button type='submit' className='bg-blue-500 text-white font-bold p-3 rounded-md'>Simpan</button>

                    </div>
                </form >
            </div>
        </ModalRoot>
    )
}
