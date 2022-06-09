import React, { useState } from 'react'
import Authorized from '../Layout/Authorized';
import * as BiIkon from "react-icons/bi"
import axios from 'axios';
import TableDataKunjungan from '../Components/TableDataKunjungan';
import { useRecoilState } from 'recoil';

export default function RegistrasiKunjungan(props) {
    const [cari, setCari] = useState();
    const [knj, setdata] = useState(props.regisknj.data);
    // const [ttp, setdata] = useState(props.ttp.data);
    const pencarian = async () => {
        try {
            let response = await axios.get(`/caridatakunjugan/${cari}`);
            setdata(response.data);
        } catch (error) { }
    };
    // const links = props.knj.links;
    const from = props.regisknj.from;
    // const from = props.ttp.from;
    // const [showForm, setShowForm] = useRecoilState(form);

    return (
        <div className="flex flex-col border-2 border-yellow-500 h-full w-full">
            <div className="flex flex-col items-center justify-center font-bold">HALAMAN REGISTRASI KUNJUNGAN</div>
            <div className="flex flex-col bg-red-500 py-2">
                <div className="flex py-5 px-5 place-items-start font-bold">Kode Pendaftaran Kunjungan</div>
                <div className="flex p-5 bg-green-500">
                    <input type="text" className=' px-2 py-1 bg-white border-2 rounded-md'
                        value={cari}
                        onChange={(e) => {
                            setCari(e.target.value);
                            if (e.target.value == "") {
                                setdata(props.knj.data);
                            }
                        }}
                    />
                    <div className="flex place-items-end">
                        <button onClick={() => {
                            pencarian();
                        }}>
                            <BiIkon.BiSearchAlt2 size={32} /></button>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}
RegistrasiKunjungan.layout = (page) => <Authorized children={page} title="Register Kunjungan" />;