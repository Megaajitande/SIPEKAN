import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { set } from 'lodash';
import { editData, form, lihatdata } from '../store';
import swal from 'sweetalert';
import { useRecoilState } from 'recoil';

export default function TableDataTitipan({ datattp }) {
    const [editWbp, setEditttp] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(form);
    const [lihatttp, setlihatttp] = useRecoilState(lihatdata)

    const hapus = (id) => {
        let formData = new FormData;
        formData.append('id', id)

        swal({
            title: "Yakin Ingin Menghapus?",
            text: "Data yang dihapus tidak akan kembali!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    Inertia.post('/hapusdatatitipan', formData);
                }
            });

    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-indigo-900">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Nama WBP
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Hubungan
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Nama Pengirim
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Nomor Identitas
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        jenis Kelamin
                                    </th>
                                    {/* <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Alamat
                                    </th> */}

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Waktu dan Tanggal Pengiriman
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Status
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Aksi
                                    </th>
                                </tr>

                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {datattp?.map((ttp, key) => (
                                    <tr key={key} className='text-sm'>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {key + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {ttp?.wbp?.nama_wbp}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {ttp.hubungan}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {ttp.nama_pengirim}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {ttp.nomor_identitas}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {ttp.jenis_kelamin}
                                        </td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            {ttp.alamat}
                                        </td> */}
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            {ttp.jenis_kiriman}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {ttp.jumlah_uang}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {ttp.detail_kiriman}
                                        </td> */}
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {ttp.waktu_dan_tglpengiriman}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {ttp.status}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-5">
                                            <button onClick={() => {
                                                setEditttp(ttp);
                                                setlihatttp(true);
                                            }} className="flex-1  text-green-600 hover:text-green-900">
                                                Lihat
                                            </button>
                                            {/* <button onClick={() => {
                                                setEditttp(ttp);
                                                setShowForm(true);
                                            }} className="text-yellow-600 hover:text-yellow-900">
                                                Edit
                                            </button> */}
                                            <button onClick={() => {
                                                hapus(ttp.id)
                                            }} className="text-red-600 hover:text-red-900">
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}
