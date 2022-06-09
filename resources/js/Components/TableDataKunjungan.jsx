import { Inertia } from '@inertiajs/inertia';
import { set } from 'lodash';
import React from 'react'
import { useRecoilState } from 'recoil';
import swal from 'sweetalert';
import { editData, form, lihatdata } from '../store';

export default function TableDataKunjungan({ dataknj }) {
    const [editknj, setEditknj] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(form);
    const [lihatknj, setlihatknj] = useRecoilState(lihatdata)
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
                    Inertia.post('/hapusdatakunjungan', formData);
                }
            });


    }
    const cekstatus = (status) => {
        let ket;
        if (status == "1") {
            ket = "Belum Berkunjung"
        } if (status == "2") {
            ket = "Sudah Berkunjung"
        } if (status == "3") {
            ket = "Kadalursa"
        }
        return ket;

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
                                        Nama Pengunjung
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
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Waktu dan Tanggal Kunjungan
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
                                {dataknj?.map((knj, key) => (
                                    <tr key={key} className='text-sm'>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {key + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {knj?.wbp?.nama_wbp}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {knj?.hubungan}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {knj?.nama_pengunjung}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {knj?.nomor_identitas}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {knj?.jenis_kelamin}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {knj?.waktu_tglknj}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {/* {
                                                (knj?.status == "1" &&
                                                    "Kondisi 1",
                                                    knj?.status == "2" &&
                                                    "Kondisi 2",
                                                    knj?.status == "3" &&
                                                    "Kondisi 3")
                                            } */}
                                            {cekstatus(knj.status)}
                                            {/* {knj?.status} */}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-5">

                                            <button onClick={() => {
                                                setEditknj(knj);
                                                setlihatknj(true);
                                            }} className="flex-1  text-green-600 hover:text-green-900">
                                                Lihat
                                            </button>
                                            {/* <button onClick={() => {
                                                setEditknj(knj);
                                                setShowForm(true);
                                            }} className="text-yellow-600 hover:text-yellow-900">
                                                Edit
                                            </button> */}
                                            <button onClick={() => {
                                                hapus(knj.id)
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




