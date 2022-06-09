import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, lihatdata } from '../store';
import * as IconAi from "react-icons/ai";
import ModalRoot from './ModalRoot';
import { Inertia } from '@inertiajs/inertia';

export default function LihatDataKunjungan({ showModal, setShowModal }) {
    const { handleSubmit, formState: { error } } = useForm();
    const [editstatus, setEditknj] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editknj = useRecoilValue(editData);
    const [nama_wbp, setnama_wbp] = useState(editknj?.wbp?.nama_wbp);
    const [hubungan, sethubungan] = useState(editknj?.hubungan);
    const [nama_pengunjung, setnama_pengunjung] = useState(editknj?.nama_pengunjung);
    const [nomor_identitas, setnomor_identitas] = useState(editknj?.nomor_identitas);
    const [no_handphone, setno_handphone] = useState(editknj?.no_handphone);
    const [jenis_kelamin, setjenis_kelamin] = useState(editknj ? editknj?.jenis_kelamin : 'Laki-laki');
    const [status, setstatus] = useState(editknj ? editknj?.status : '1');
    const [alamat, setalamat] = useState(editknj?.alamat);
    const [jplaki_laki, setjplaki_laki] = useState(editknj?.jplaki_laki);
    const [jpperempuan, setjpperempuan] = useState(editknj?.jpperempuan);
    const [jpanak_anak, setjpanak_anak] = useState(editknj?.jpanak_anak);
    const [detail_barang, setdetail_barang] = useState(editknj?.detail_barang);
    const [waktu_dan_tglknj, setwaktu_dan_tglknj] = useState(editknj?.waktu_dan_tglknj);
    const [kode_kunjungan, setkode_kunjungan] = useState(editknj?.kode_kunjungan);
    const [foto, setfoto] = useState(editknj?.foto);

    const updatestatus = (knj) => {
        knj['status'] = status;

        Inertia.post("/editdatakunjungan", knj, {
            onSuccess: () => {
                setShowModal(false);
            }
        });
    }

    return (
        <ModalRoot showModal={showModal} setShowModal={setShowModal}>
            <div className=" p-5 top-12 rounded-xl shadow-xl absolute space-y-3 items-center justify-center  bg-white ring-1 sm:w-2/4 w-full">
                <div className="flex col-span-1 items-end justify-end w-full">
                    <button>
                        <IconAi.AiFillCloseCircle size={40}
                            onClick={() => {
                                setShowModal(false)
                            }}
                        />
                    </button>
                </div>
                <form onSubmit={handleSubmit(updatestatus)}>
                    <div className="space-y-3 flex flex-col items-center justify-center font-bold mb-5"> DETAIL</div>
                    <div className="flex justify-center items-center w-full ">
                        <div className=" flex  justify-center items-center">
                            <img src={`storage/${editknj?.foto}`} alt="" className='w-40' />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center w-full">
                        <div className="col-span-5  flex space-x-1"> Nama WBP </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.wbp?.nama_wbp}
                            />
                        </div>

                    </div>
                    <div className=" grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1"> Hubungan</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.hubungan}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Nama Pengunjung</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.nama_pengunjung}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Nomor Identitas</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.nomor_identitas}
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
                                value={editknj?.no_handphone}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Jenis Kelamin</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.jenis_kelamin}
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
                                value={editknj?.alamat}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">JP Laki-laki</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.jplaki_laki}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">JP Perempuan </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.jpperempuan}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">JP Anak-anak </div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.jpanak_anak}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Detail Barang</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.detail_barang}
                            />
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-12 items-center ">
                    <div className="col-span-5 flex space-x-1">Foto</div>
                    <div className="col-span-1 space-x-1">:</div>
                    <div className="col-span-6 border-b border-blue-400 w-full">
                        <img src={`storage/${foto}`} alt="" />
                    </div>
                </div> */}
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Waktu, Tanggal Kunjungan</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.waktu_dan_tglknj}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Kode Kunjungan</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="col-span-6 border-b border-blue-400 w-full">
                            <input
                                disabled
                                type="text"
                                className="bg-white border-0 focus:outline-none 
                        focus:ring-white px-0 w-full"
                                value={editknj?.kode_kunjungan}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center ">
                        <div className="col-span-5 flex space-x-1">Status</div>
                        <div className="col-span-1 space-x-1">:</div>
                        <div className="space-x-4 col-span-6 text-left">
                            <select
                                className="mt-1 block w-full py-2 px-3 border-2 border-yellow-500 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setstatus(e.target.value)
                                }}
                                value={status}>
                                <option value=''>--Pilih--</option>
                                <option value='1'>1. Belum Berkunjung</option>
                                <option value='2'>2. Sudah Berkunjung</option>
                                <option value='3'>3. Kadaluwarsa</option>
                            </select>

                        </div>
                    </div>
                    <div className="mt-4 flex flex-col space-x-4 items-center justify-center">
                        <button type='submit' className='bg-blue-500 text-white font-bold p-3 rounded-md'>Simpan</button>

                    </div>
                </form >
            </div>
        </ModalRoot>
    )
}
