import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import swal from 'sweetalert';
import { useRecoilState } from 'recoil';
import { editData, form, lihatdata } from '../store';
import { Grid, _ } from "gridjs-react";
import * as MdIkon from "react-icons/md"
import * as FaIkon from "react-icons/fa"
import * as BiIkon from "react-icons/bi"
import LihatPengaduan from './LihatPengaduan';
import "gridjs/dist/theme/mermaid.css";
export default function TabelPengaduan() {
    const [editpengaduan, setEditpengaduan] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(form);
    const [lihatpengaduan, setlihatpengaduan] = useRecoilState(lihatdata)

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
                    Inertia.post('/hapusdatapengaduan', formData);
                }
            });

    }
    return (
        <>
            <Grid
                server={{
                    url: "http://localhost:8000/api/pengaduan",
                    then: (data) =>
                        data.map((TabelPengaduan, index) => [
                            index + 1,
                            TabelPengaduan.nama_lengkap,
                            TabelPengaduan.email,
                            TabelPengaduan.pesan,
                            _(
                                <button onClick={() => {
                                    setEditpengaduan(TabelPengaduan);
                                    setlihatpengaduan(true);
                                }} className=" p-2 rounded-lg bg-green-100 hover:bg-green-200 transition duration-200">
                                    <BiIkon.BiShowAlt size={16}
                                        className="text-green-400"
                                    />
                                </button>
                            ),
                            _(
                                <button onClick={() => {
                                    hapus(TabelPengaduan.id)
                                }} className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition duration-200">
                                    <FaIkon.FaTrash size={16}
                                        className="text-red-400"
                                    />
                                </button>
                            ),
                        ]),
                }}
                columns={
                    [
                        { name: "No", width: "5%" },
                        "Nama Lengkap",
                        "Email",
                        "Pesan",
                        { name: "Aksi", width: "20px" },
                        { name: "", width: "20px" },
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
            <LihatPengaduan showModal={lihatpengaduan} setShowModal={setlihatpengaduan} />
        </>

    )
}
