import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { Grid, _ } from "gridjs-react";
import { useRecoilState } from 'recoil';
import swal from 'sweetalert';
import { editData, form, lihatdata } from '../store';
import * as MdIkon from "react-icons/md"
import * as FaIkon from "react-icons/fa"
import * as BiIkon from "react-icons/bi"
import "gridjs/dist/theme/mermaid.css";

export default function Tabel_Hari_Kunjungan({hari_kunjungan}) {
    const [edithari, setEdithari] = useRecoilState(editData);
    const [showForm, setShowForm] = useRecoilState(form);
    const [lihathari, setlihathari] = useState(false);

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
                    Inertia.post('/hapusdataharikunjungan', formData);
                }
            });

    }
    return (
               <>
            <Grid
                server={{
                    url: "http://localhost:8000/api/harikunjungan",
                    then: (data) =>
                        data.map((hari_kunjungan, index) => [
                            index + 1,
                            hari_kunjungan.kode_hari,
                            hari_kunjungan.nama_hari    ,
                            _(
                                <button onClick={() => {
                                    setEdithari(hari_kunjungan);
                                    setlihathari(true);
                                }} className=" p-2 rounded-lg bg-green-100 hover:bg-green-200 transition duration-200">
                                    <BiIkon.BiShowAlt size={16}
                                        className="text-green-400"
                                    />
                                </button>
                            ),
                            _(
                                <button onClick={() => {
                                    setEdithari(hari_kunjungan);
                                    setShowForm(true);
                                }} className=" p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition duration-200">
                                    <MdIkon.MdEdit size={16}
                                        className="text-yellow-400"
                                    />

                                </button>
                            ),
                            _(
                                <button onClick={() => {
                                    hapus(hari_kunjungan.id)
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
                        "KODE HARI",
                        "NAMA HARI",
                        { name: "Aksi", width: "20px" },
                        { name: "", width: "20px" },
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
            {/* <LihatDataWbp showModal={lihatwbp} setShowModal={setlihatwbp} />S */}
        </>

    )
}
