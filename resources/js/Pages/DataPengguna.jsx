import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import Authorized from '../Layout/Authorized';
import { editData, form, lihatdata } from '../store';
import * as BiIkon from "react-icons/bi"
import * as GrIkon from "react-icons/gr"
import Pagination from '../Components/pagination';
// import TableDataPengunjung from '../Components/TableDataPengunjung';
// import TableResetPassword from '../Components/TableResetPassword';
import TableDataPengguna from '../Components/TableDataPengguna';
import axios from 'axios';
// import LihatDataPengguna from '../Components/LihatDataPengguna';

export default function DataPengguna(props) {
    const [cari, setCari] = useState();
    const [png, setdata] = useState(props.png.data);
    const pencarian = async () => {
        try {
            let response = await axios.get(`/caridatakunjungan/${cari}`);
            setdata(response.data);

        } catch (error) { }
    };

    const links = props.png.links;
    const from = props.png.from;

    const [showForm, setShowForm] = useRecoilState(form);
    const [editpng, setEditpng] = useRecoilState(editData);
    const [lihatpng, setlihatpng] = useRecoilState(lihatdata)
    return (

        <div className='relative min-h-screen flex items-center justify-center w-full h-full'>
            {showForm && <FormDataWBP showModal={showForm} setShowModal={setShowForm} />}
            <div className="w-full h-full space-y-3">
                <div className="flex flex-col items-center justify-center ">
                    <TableDataPengguna datapng={png} from={from} />
                </div>

            </div>
        </div >
    )
}
DataPengguna.layout = (page) => (
    <Authorized children={page} title="Data Pengguna" />
);
