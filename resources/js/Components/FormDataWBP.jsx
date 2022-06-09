import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, form } from '../store';
import ModalRoot from './ModalRoot';
import * as IconAi from "react-icons/ai";

export default function FormDataWBP({ showModal, setShowModal }) {
    const [showForm, setShowForm] = useState(false);
    const editWbp = useRecoilValue(editData);
    const { register, handleSubmit, formState: { error } } = useForm();
    const [nama_wbp, setnama_wbp] = useState(editWbp?.nama_wbp);
    const [no_register, setno_register] = useState(editWbp?.no_register);
    const [jenis_kelamin, setjenis_kelamin] = useState(editWbp ? editWbp?.jenis_kelamin : '-Pilih-');
    const [agama, setagama] = useState(editWbp ? editWbp?.agama : '-Pilih-');
    const [pendidikan, setpendidikan] = useState(editWbp ? editWbp?.pendidikan : '-Pilih-');
    const [tempat_lahir, settempat_lahir] = useState(editWbp?.tempat_lahir);
    const [tanggal_lahir, settanggal_lahir] = useState(editWbp?.tanggal_lahir);
    const [alamat, setalamat] = useState(editWbp?.alamat);
    const [kewarganegaraan, setkewarganegaraan] = useState(editWbp ? editWbp?.kewarganegaraan : '-Pilih-');
    const [perkara_pasal, setperkara_pasal] = useState(editWbp?.perkara_pasal);
    const [tanggal_mulai_ditahan, settanggal_mulai_ditahan] = useState(editWbp?.tanggal_mulai_ditahan);
    const [lama_dipidana, setlama_dipidana] = useState(editWbp?.lama_dipidana);
    const [remisi, setremisi] = useState(editWbp?.remisi);
    const [tanggal_habis_masa_penahanan, settanggal_habis_masa_penahanan] = useState(editWbp?.tanggal_habis_masa_penahanan);
    const [keterangan, setketerangan] = useState(editWbp?.keterangan);

    const insertData = (data) => {
        data['nama_wbp'] = nama_wbp;
        data['no_register'] = no_register;
        data['jenis_kelamin'] = jenis_kelamin;
        data['agama'] = agama;
        data['pendidikan'] = pendidikan;
        data['tempat_lahir'] = tempat_lahir;
        data['tanggal_lahir'] = tanggal_lahir;
        data['alamat'] = alamat;
        data['kewarganegaraan'] = kewarganegaraan;
        data['perkara_pasal'] = perkara_pasal;
        data['tanggal_mulai_ditahan'] = tanggal_mulai_ditahan;
        data['lama_dipidana'] = lama_dipidana;
        data['remisi'] = remisi;
        data['tanggal_habis_masa_penahanan'] = tanggal_habis_masa_penahanan;
        data['keterangan'] = keterangan;

        if (editWbp) {
            Inertia.post("/editWBP", data, {
                onSuccess: () => {
                    setShowModal(false);
                }
            });
        } else {
            Inertia.post("/insertWBP", data, {
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
                    <h1 className='text-xl font-bold text-center text-gray-800'> Tambah Data WBP</h1>
                </div>

                <form onSubmit={handleSubmit(insertData)} className="grid grid-cols-2 gap-5">
                    <div className="space-y-5">

                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Nama WBP <span className='text-red-500'>(Menggunakan Binti)</span> </label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setnama_wbp(e.target.value)
                                }}
                                value={nama_wbp}
                            />
                        </div>
                        <div className="bg-green-500"></div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">No. Register</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setno_register(e.target.value);
                                }}
                                value={no_register}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Jenis Kelamin</label>
                            <select
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setjenis_kelamin(e.target.value)
                                }}
                                value={jenis_kelamin}>
                                <option value=''>-Pilih-</option>
                                <option value='Laki-laki'>Laki-laki</option>
                                <option value='Perempuan'>Perempuan</option>

                            </select>
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Agama</label>
                            <select
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setagama(e.target.value)
                                }}
                                value={agama}>
                                <option value=''>-Pilih-</option>
                                <option value='Islam'>Islam</option>
                                <option value='Katolik'>Katolik</option>
                                <option value='Protestan'>Protestan</option>
                                <option value='Hindu'>Hindu</option>
                                <option value='Budha'>Budha</option>\
                                <option value='Kong hu Chu'>Kong hu Chu</option>
                            </select>

                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Pendidikan</label>
                            <select
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setpendidikan(e.target.value)
                                }}
                                value={pendidikan}>
                                <option value=''>-Pilih-</option>
                                <option value='Tidak -'>-</option>
                                <option value='Tidak Sekolah'>Tidak Sekolah SD</option>
                                <option value='Tidak Tamat SD'>Tidak Lulus SD</option>
                                <option value='SD'>SD/Sederajat</option>
                                <option value='SMP'>SMP/Sederajat</option>
                                <option value='SMA'>SMA/Sederajat</option>
                                <option value='D3'>D3</option>
                                <option value='S1'>S1</option>
                                <option value='S2'>S2</option>
                                <option value='S3'>S3</option>
                            </select>

                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Tempat Lahir</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    settempat_lahir(e.target.value)
                                }}
                                value={tempat_lahir}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Tanggal Lahir</label>
                            <input type="date" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    settanggal_lahir(e.target.value)
                                }}
                                value={tanggal_lahir}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Alamat</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setalamat(e.target.value)
                                }}
                                value={alamat}
                            />
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Kewarganegaraan</label>
                            <select
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setkewarganegaraan(e.target.value)
                                }}
                                value={kewarganegaraan}>
                                <option value=''>-Pilih-</option>
                                <option value='WNI'>WNI</option>
                                <option value='WNA'>WNA</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Perkara/Pasal</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setperkara_pasal(e.target.value)
                                }}
                                value={perkara_pasal}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Tanggal Mulai di tahan</label>
                            <input type="date" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    settanggal_mulai_ditahan(e.target.value)
                                }}
                                value={tanggal_mulai_ditahan}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Lama Pidana</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setlama_dipidana(e.target.value)
                                }}
                                value={lama_dipidana}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Remisi yang diperoleh</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setremisi(e.target.value)
                                }}
                                value={remisi}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Tanggal Ekspirasi/ Tanggal Habis Masa Penahanan</label>
                            <input type="date" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    settanggal_habis_masa_penahanan(e.target.value)
                                }}
                                value={tanggal_habis_masa_penahanan}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="data_WBP">Keterangan</label>
                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setketerangan(e.target.value)
                                }}
                                value={keterangan}
                            />
                        </div>

                    </div>
                    <div className="flex items-center justify-center w-full bg-red-400">
                        <button type='submit' className=' bg-blue-500 text-white font-bold p-3 rounded-md'>Simpan</button>
                        {/* <button onClick={() => {
                            setShowForm(false)
                        }} className='bg-red-500 text-white font-bold p-3 rounded-md'>Tutup</button> */}

                    </div>

                </form>
                {/* <div className="flex items-center justify-center py-8">
                    <div className="text-black ">Copyright &copy; Sistem Pendaftaran Kunjungan 2022</div>
                </div> */}
            </div>
        </ModalRoot>
    )
}
