import React, { useState } from 'react'
import { Grid, _ } from "gridjs-react";
import { useRecoilState } from 'recoil';
import { Inertia } from '@inertiajs/inertia';
import swal from 'sweetalert';
import { editData, form, lihatdata } from '../store';
import * as FaIkon from "react-icons/fa"
import * as BiIkon from "react-icons/bi"
import LihatDataTitipan from './LihatDataTitipan';
import "gridjs/dist/theme/mermaid.css";

export default function TableDataTitipan2({ datattp }) {

    const [editttp, setEditttp] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(form);
    const [lihatttp, setlihatttp] = useState(false)

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
        <>
            <Grid
                server={{
                    url: "http://localhost:8000/api/datatitipan",
                    then: (data) =>
                        data.map((data_titipan, index) => [
                            index + 1,
                            data_titipan.wbp?.nama_wbp,
                            data_titipan.hubungan,
                            data_titipan.nama_pengirim,
                            data_titipan.nomor_identitas,
                            data_titipan.jenis_kelamin,
                            data_titipan.waktu_dan_tglpengiriman,
                            data_titipan.status,
                            _(
                                <button onClick={() => {
                                    setEditttp(data_titipan);
                                    setlihatttp(true);
                                }} className=" p-2 rounded-lg bg-green-100 hover:bg-green-200 transition duration-200">
                                    <BiIkon.BiShowAlt size={16}
                                        className="text-green-400"
                                    />
                                </button>
                            ),
                            _(
                                <button onClick={() => {
                                    hapus(data_titipan.id)
                                }} className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition duration-200">
                                    <FaIkon.FaTrash size={16}
                                        className="text-red-400"
                                    />
                                </button>
                            ),
                        ]),
                }}
                columns={[
                    { name: "No", width: "5%" },
                    "Nama WBP",
                    "Hubungan",
                    "Nama Pengirim",
                    "Nomor Identitas",
                    "Jenis Kelamin",
                    "Waktu dan Tanggal Penitipan",
                    "status",
                    { name: "Aksi", width: "10px" },
                    { name: "", width: "10px" },
                ]}
                search={true}
                pagination={{
                    enabled: true,
                    limit: 10,
                }}
                sort={true}
                className={{
                    container:
                        "bg-white shadow-md rounded-lg overflow-hidden p-5 overflow-x-auto w-full",
                    table: "mt-5 w-full",
                    thead: "bg-gray-200 w-full",
                    th: "text-center text-sm font-medium text-gray-700 px-4 py-3",
                    tbody: "text-sm",
                    tr: "hover:bg-gray-100 border-b-2 border-gray-200",
                    td: "px-4 py-3 text-center",
                    footer: "text-gray-500 text-sm",
                    pagination:
                        "flex justify-between items-center text-sm mt-5 pl-4 text-gray-800 w-full",
                    paginationButton: "mr-4",
                    paginationButtonCurrent:
                        "text-white px-2 py-1 rounded bg-gray-800 hover:bg-gray-700",
                    paginationButtonPrev:
                        "text-gray-800 px-2 py-1 rounded bg-gray-100 hover:bg-gray-200",
                    paginationButtonNext:
                        "text-gray-800 px-2 py-1 rounded bg-gray-100 hover:bg-gray-200",
                }}
                language={{
                    search: {
                        placeholder: "🔍 Cari...",
                    },
                    pagination: {
                        previous: "Sebelumnya",
                        next: "Selanjutnya",
                        showing: "Menampilkan",
                        results: () => "Data",
                    },
                }}
            />
            <LihatDataTitipan showModal={lihatttp} setShowModal={setlihatttp} />
        </>
    )
}
