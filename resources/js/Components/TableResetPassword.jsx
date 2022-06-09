import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import { useRecoilState } from 'recoil';
import swal from 'sweetalert';
import { editData, form } from '../store';


export default function TableResetPassword({ datapnj }) {
    const [editWbp, setEditpnj] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(form);

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
                    Inertia.post('/hapusdatapengunjung', formData);
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
                                        Nama Lengkap
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
                                        Alamat
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Username
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
                                {datapnj?.map((pnj, key) => (
                                    <tr key={key} className='text-sm'>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {key + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.nama}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.nomor_identitas}
                                        </td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.jenis_kelamin}
                                        </td> */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.alamat}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.username}
                                        </td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.password}
                                        </td> */}
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.no_handphone}
                                        </td> */}
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            {pnj.email}
                                        </td> */}
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-5">
                                            <a href="#" className="text-green-600 hover:text-green-900">
                                                Lihat
                                            </a>
                                            {/* <button onClick={() => {
                                                setEditWbp(pnj);
                                                setShowForm(true);
                                            }} className="text-yellow-600 hover:text-yellow-900">
                                                Edit
                                            </button> */}
                                            <button onClick={() => {
                                                hapus(pnj.id)
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

