import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import TabelPengaduan from '../Components/TabelPengaduan';
import Authorized from '../Layout/Authorized';
import * as GrIkon from "react-icons/gr"
import { editData, form, lihatdata } from '../store';
import KontakKami from './User/KontakKami';
import axios from 'axios';
import LihatPengaduan from '../Components/LihatPengaduan';


export default function Pengaduan(props) {
    const [cari, setCari] = useState();
    const [pengaduan, setdata] = useState(props.pengaduan.data);
    const pencarian = async () => {
        try {
            let response = await axios.get(`/caridatapengaduan/${cari}`);
            setdata(response.data);

        } catch (error) { }
    };
    const links = props.pengaduan.links;
    const from = props.pengaduan.from;

    const [showForm, setShowForm] = useRecoilState(form);
    const [editpengaduan, setEditpengaduan] = useRecoilState(editData);
    const [lihatpengaduan, setlihatpengaduan] = useRecoilState(lihatdata)
    return (

        <div className='relative min-h-screen flex items-center justify-center w-full h-full'>
            {showForm && <KontakKami showModal={showForm} setShowModal={setShowForm} />}


            <div className="w-full h-full space-y-3">
                {/* <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <button onClick={() => {
                            setEditpng(null);
                            setShowForm(true);
                        }} className="p-2  bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center">
                            <GrIkon.GrNewWindow size={15} />
                            <h1>Cetak</h1>
                        </button>

                    </div>
                </div> */}
                <div className="flex items-center justify-center">
                    <TabelPengaduan datapengaduan={Pengaduan} from={from} />
                </div>



            </div>
        </div>
    )
}
Pengaduan.layout = (page) => (
    <Authorized children={page} title="Pengaduan" />
);
