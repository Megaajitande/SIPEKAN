import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, form } from '../store';
import ModalRoot from './ModalRoot';
import * as IconAi from "react-icons/ai";

export default function FormRuangKunjungan({ showModal, setShowModal }) {
  const [showForm, setShowForm] = useState(false);
    const editruangan = useRecoilValue(editData);
    const { handleSubmit, formState: { error } } = useForm();
    const [kode_ruangan, setkode_ruangan] = useState(editruangan?.kode_ruangan);
    const [nama_ruangan, setnama_ruangan] = useState(editruangan?.nama_ruangan);
   
    const insertData = (ruangan) => {
        ruangan['kode_ruangan'] = kode_ruangan;
        ruangan['nama_ruangan'] = nama_ruangan;

        
        if (editruangan) {
            Inertia.post("/editruangan", ruangan, {
                onSuccess: () => {
                    setShowModal(false);
                }
            });
        } else {
            Inertia.post("/insertruangan", ruangan, {
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
                    <h1 className='text-xl font-bold text-center text-gray-800'> Tambah Data Ruangan</h1>
                </div>

                <form onSubmit={handleSubmit(insertData)} className="space-y-3 flex flex-col items-center justify-center h-full w-full">
                    <div className="space-y-3 flex flex-col items-center justify-center h-full w-full">

                        <div className="flex w-full items-center justify-center">
                            <label className='flex w-full items-center justify-center-bold text-lg'  htmlFor="data_ruangan">Kode Ruangan</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                  setkode_ruangan(e.target.value)
                                }}
                                value={kode_ruangan}
                            />
                        </div>
                        <div className="bg-green-500"></div>
                        <div className="flex w-full items-center justify-center">
                            <label className='flex w-full items-center justify-center-bold text-lg'  htmlFor="data_ruangan">Nama Ruangan</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setnama_ruangan(e.target.value);
                                }}
                                value={nama_ruangan}
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
