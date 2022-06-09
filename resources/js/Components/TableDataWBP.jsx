import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import { useRecoilState } from 'recoil';
import swal from 'sweetalert';
import { editData, form, lihatdata } from '../store';

export default function TableDataWBP({ datawbp }) {
    const [editWbp, setEditWbp] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(form);
    const [lihatwbp, setlihatwbp] = useRecoilState(lihatdata)

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
                    Inertia.post('/hapusdataWBP', formData);
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
                                <tr className="text-center">
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
                                        No. Register
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
                                        Perkara/Pasal
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Tanggal Mulai di Tahan
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        Lama Pidana/Denda/Uang Pengganti
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
                                {datawbp?.map((wbp, key) => (
                                    <tr key={key} className='text-sm'>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {key + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {wbp.nama_wbp}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {wbp.no_register}
                                        </td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            {wbp.alamat}
                                        </td> */}
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {wbp.perkara_pasal}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {wbp.tanggal_mulai_ditahan}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {wbp.lama_dipidana}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-5">

                                            <button onClick={() => {
                                                setEditWbp(wbp);
                                                setlihatwbp(true);
                                            }} className="text-green-600 hover:text-green-900 ">
                                                Lihat
                                            </button>
                                            <button onClick={() => {
                                                setEditWbp(wbp);
                                                setShowForm(true);
                                            }} className="text-yellow-600 hover:text-yellow-900">
                                                Edit
                                            </button>
                                            <button onClick={() => {
                                                hapus(wbp.id)
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
            <div className="flex items-center justify-center py-8">
                <div className="text-white ">Copyright &copy; Sistem Pendaftaran Kunjungan 2022</div>
            </div>
        </div>


    )
}
