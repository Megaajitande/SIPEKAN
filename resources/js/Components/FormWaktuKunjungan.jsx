import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, form } from '../store';
import ModalRoot from './ModalRoot';
import * as IconAi from "react-icons/ai";

export default function FormWaktuKunjungan({ showModal, setShowModal }) {
    const [showForm, setShowForm] = useState(false);
    const editwaktu = useRecoilValue(editData);
    const { handleSubmit, formState: { error } } = useForm();
    const [kode_jam, setkode_jam] = useState(editwaktu?.kode_jam);
    const [mulai, setmulai] = useState(editwaktu?.mulai);
    const [selesai, setselesai] = useState(editwaktu?.selesai);
   
    const insertData = (waktu) => {
        waktu['kode_jam'] = kode_jam;
        waktu['mulai'] = mulai;
        waktu['selesai'] = selesai;
        
        if (editwaktu) {
            Inertia.post("/editwaktu", waktu, {
                onSuccess: () => {
                    setShowModal(false);
                }
            });
        } else {
            Inertia.post("/insertwaktu", waktu, {
                onSuccess: () => {
                    setShowModal(false);
                }
            });
        }
    }
    return (
        <ModalRoot showModal={showModal} setShowModal={setShowModal}>
            <div className="bg-white p-5 rounded-md shadow-xl absolute z-30 top-6 space-y-5">
                <div className="flex col-span-1 items-end justify-end">
                    <button>
                        <IconAi.AiFillCloseCircle size={40}
                            onClick={() => {
                                setShowModal(false)
                            }}
                        />
                    </button>
                </div>
                <div className="">
                    <h1 className='text-xl font-bold text-center text-gray-800'> Tambah Data Jam</h1>
                </div>

                <form onSubmit={handleSubmit(insertData)} className="space-y-3 flex flex-col items-center justify-center h-full w-full">
                    <div className="space-y-3 flex flex-col items-center justify-center h-full w-full">

                        <div className="flex w-full items-center justify-center">
                            <label className='flex w-full items-center justify-center-bold text-lg' htmlFor="waktu_kunjungan">Kode Jam</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setkode_jam(e.target.value)
                                }}
                                value={kode_jam}
                            />
                        </div>
                        <div className="flex w-full items-center justify-center">
                            <label className='flex w-full items-center justify-center-bold text-lg' htmlFor="waktu_kunjungan">Mulai</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setmulai(e.target.value);
                                }}
                                value={mulai}
                            />
                        </div>
                        <div className="flex w-full items-center justify-center">
                            <label className='flex w-full items-center justify-center-bold text-lg' htmlFor="waktu_kunjungan">Selesai</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setselesai(e.target.value);
                                }}
                                value={selesai}
                            />
                        </div>
                        </div>
                       
                    <div className="p-5 flex items-center justify-center w-full bg-white-400">
                        <button type='submit' className=' bg-blue-500 text-white font-bold p-3 rounded-md'>Tambah</button>
                    </div>
                   
                </form>
                </div>
        </ModalRoot>
    )
}
