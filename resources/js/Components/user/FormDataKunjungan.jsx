import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, form } from '../../store';
import { Link } from "@inertiajs/inertia-react";
import * as IconAi from "react-icons/ai";
import * as IconTi from "react-icons/ti";
import toast from 'react-hot-toast';

export default function FormDataKunjungan({ namawbp }) {
  const [showForm, setShowForm] = useRecoilState(form);
  const editknj = useRecoilValue(editData);

  const { handleSubmit, formState: { error } } = useForm();
  const [nama_wbp, setnama_wbp] = useState(editknj ? editknj?.nama_wbp : '-Pilih-');
  const [hubungan, sethubungan] = useState(editknj?.hubungan);
  const [nama_pengunjung, setnama_pengunjung] = useState(editknj?.nama_pengunjung);
  const [nomor_identitas, setnomor_identitas] = useState(editknj?.nomor_identitas);
  const [no_handphone, setno_handphone] = useState(editknj?.no_handphone);
  const [jenis_kelamin, setjenis_kelamin] = useState(editknj ? editknj?.jenis_kelamin : '-Pilih-');
  const [alamat, setalamat] = useState(editknj?.alamat);
  const [jplaki_laki, setjplaki_laki] = useState(editknj?.jplaki_laki);
  const [jpperempuan, setjpperempuan] = useState(editknj?.jpperempuan);
  const [jpanak_anak, setjpanak_anak] = useState(editknj?.jpanak_anak);
  const [detail_barang, setdetail_barang] = useState(editknj?.detail_barang);
  const [waktu_dan_tglknj, setwaktu_dan_tglknj] = useState(editknj?.waktu_dan_tglknj);
  const [foto, setfoto] = useState(editknj?.foto);

  const insertData = (knj) => {
    knj['nama_wbp'] = nama_wbp;
    knj['hubungan'] = hubungan;
    knj['nama_pengunjung'] = nama_pengunjung;
    knj['nomor_identitas'] = nomor_identitas;
    knj['no_handphone'] = no_handphone;
    knj['jenis_kelamin'] = jenis_kelamin;
    knj['alamat'] = alamat;
    knj['jplaki_laki'] = jplaki_laki;
    knj['jpperempuan'] = jpperempuan;
    knj['jpanak_anak'] = jpanak_anak;
    knj['detail_barang'] = detail_barang;
    knj['waktu_dan_tglknj'] = waktu_dan_tglknj;
    knj['foto'] = foto;

    Inertia.post("/insertdatakunjungan", knj, {
      onSuccess: () => {
        setShowForm(false);
      },
      onError: (e) => {
        // console.log(e);
        e.type && toast[e.type](e.message);
        toast.error("Gagal mendafatar !")
      }
    });
    // if (editknj) {
    //   Inertia.post("/editdatakunjungan", knj, {
    //     onError: (e) => {
    //       console.log(e);
    //     },
    //     onSuccess: () => {
    //       setShowForm(false);
    //     }
    //   });
    // } else {
    //   Inertia.post("/insertdatakunjungan", knj, {
    //     onSuccess: () => {
    //       setShowForm(false);
    //     },
    //     onError: (e) => {
    //       console.log(e);
    //     }
    //   });
    // }
  }
  return (
    <>
      <form onSubmit={handleSubmit(insertData)} className='w-full'>
        <div className="flex items-center justify-center text-2xl text-bold">Halaman Pendaftaran Kunjungan</div>
        <div className="flex items-center justify-center text-bold">Masukkan identitas dengan benar dan jelas</div>
        <div className="mt-8 overflow-hidden sm:rounded-md flex justify-center">
          <div className="px-10 py-5 bg-white rounded-md sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <div className="flex flex-col">
                  <label htmlFor="data_WBP">Nama WBP</label>

                  <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setnama_wbp(e.target.value)
                    }}
                    value={nama_wbp}>
                    <option value=''>-Pilih-</option>

                    {namawbp?.map((wbp, key) => {
                      return (
                        <option key={key} value={wbp.id}>{wbp.nama_wbp}</option>
                      )
                    })}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Hubungan</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      sethubungan(e.target.value)
                    }}
                    value={hubungan} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Nama Pengunjung</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                         bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                         focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setnama_pengunjung(e.target.value)
                    }}
                    value={nama_pengunjung} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Nik/Nomor Identitas</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                       bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                       focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setnomor_identitas(e.target.value)
                    }}
                    value={nomor_identitas} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Nomor Handphone</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                       bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                       focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setno_handphone(e.target.value)
                    }}
                    value={no_handphone} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Jenis Kelamin</label>
                  <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md 
                    shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                    sm:text-sm"
                    onChange={(e) => {
                      setjenis_kelamin(e.target.value)
                    }}
                    value={jenis_kelamin}>

                    <option value=''>-Pilih-</option>
                    <option value='Laki-laki'>Laki-laki</option>
                    <option value='Perempuan'>Perempuan</option>
                  </select>
                </div>

              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Alamat</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                      focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setalamat(e.target.value)
                    }}
                    value={alamat} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Jumlah Pengikut</label>
                </div>
                <div className="grid grid-cols-2">
                  <label htmlFor="data_kunjungan" className='flex items-center'>Laki-laki</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setjplaki_laki(e.target.value)
                    }}
                    value={jplaki_laki} />
                </div>
                <div className="grid grid-cols-2">
                  <label htmlFor="data_kunjungan" className='flex items-center'>Perempuan</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setjpperempuan(e.target.value)
                    }}
                    value={jpperempuan} />

                </div>
                <div className="grid grid-cols-2">
                  <label htmlFor="data_kunjungan" className='flex items-center'>Anak-anak</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setjpanak_anak(e.target.value)
                    }}
                    value={jpanak_anak} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Detail Barang Bawaan</label>
                  <textarea

                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 
                    mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    onChange={(e) => {
                      setdetail_barang(e.target.value)
                    }}
                    value={detail_barang}></textarea>
                </div>
                {/* <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Waktu dan Tanggal Kunjungan</label>
                  <textarea
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 
                  block w-full sm:text-sm border border-gray-300 rounded-md" 
                  onChange={(e) => {
                    setwaktu_dan_tglknj(e.target.value)
                  }}
                  value={waktu_dan_tglknj}></textarea>
                </div> */}

                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Foto KTP/Foto Kartu Identitas</label>
                  <input type="file"
                    onChange={(e) => {
                      setfoto(e.target.files);
                    }}
                  />
                </div>

                <div className="space-x-4 mt-5 flex">
                  <Link
                    href="/userdashboard"
                    className="">
                    <button onClick={() => {
                      setShowForm(false)
                    }} className='bg-red-500 text-white font-bold p-3 rounded-md flex items-center justify-center'>
                      <IconTi.TiArrowBack
                        className="text-white"
                        size={20}
                      />Kembali</button>
                  </Link>
                  <button type='submit' className='bg-green-500 text-white font-bold p-3 rounded-md flex items-center justify-center'>
                    <IconAi.AiOutlineSend
                      className="text-white"
                      size={20} />Kirim</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </>
  )
}
