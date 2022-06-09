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
            {/* {lihatpng && <LihatDataPengguna />} */}
            <div className="w-full h-full space-y-3">
                {/* <div className="flex px-12 items-start space-x-2 justify-start w-full ">
                    <button onClick={() => {
                        setEditWbp(null);
                        setShowForm(true);
                    }} className="p-2  bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center hover:scale-105 transform transition-all duration-500">
                        <GrIkon.GrNewWindow size={20} />
                        <h1>Cetak</h1>
                    </button> */}
                {/* <div className="flex items-center space-x-2 justify-end">
                        <BiIkon.BiSearchAlt2 size={20} />
                        <input type="text" className='p-1 bg-white border-yellow-500 border-2 rounded-md'
                            value={cari}
                            onChange={(e) => {
                                setCari(e.target.value);
                                if (e.target.value == "") {
                                    setdata(props.pnj.data);
                                }
                            }}
                        />
                    </div> */}
                {/* </div> */}
                {/* <div className="flex flex-col items-center justify-center ">
                    <h2 className='font-bold '>Data Pengguna</h2>
                    <TableResetPassword datapnj={pnj} from={from} />
                </div> */}
                <div className="flex flex-col items-center justify-center ">
                    <h2 className='font-bold'>Reset Password Pengguna</h2>
                    <TableDataPengguna datapng={png} from={from} />
                    {/* <Pagination links={links} /> */}
                </div>

            </div>
        </div >
    )
}
DataPengguna.layout = (page) => (
    <Authorized children={page} title="Data Pengguna" />
);
