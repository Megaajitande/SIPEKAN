import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import Authorized from '../Layout/Authorized';
import { editData, form, lihatdata } from '../store';
import * as BiIkon from "react-icons/bi"
import * as GrIkon from "react-icons/gr"
import * as AiIkon from "react-icons/ai"
import Pagination from '../Components/pagination';
import { data } from 'autoprefixer';
import axios from 'axios';
import LihatDataTitipan from '../Components/LihatDataTitipan';
import TableDataTitipan2 from '../Components/TableDataTitipan2';


export default function DataTitipan(props) {
    const [cari, setCari] = useState();
    const [ttp, setdata] = useState(props.ttp.data);
    const pencarian = async () => {
        try {
            let response = await axios.get(`/caridatatitipan/${cari}`);
            setdata(response.data);

        } catch (error) { }
    };
    // console.log(ttp);
    // const data = props.ttp.data;
    const links = props.ttp.links;
    const from = props.ttp.from;

    const [showForm, setShowForm] = useRecoilState(form);
    const [editttp, setEditttp] = useRecoilState(editData);
    const [lihatttp, setlihatttp] = useRecoilState(lihatdata)
    return (

        <div className='relative min-h-screen flex items-center justify-center w-full h-full'>
            {showForm && <FormDataWBP showModal={showForm} setShowModal={setShowForm} />}


            <div className="w-full h-full space-y-3">
                <div className="flex px-5 justify-between">
                    <div className="flex items-start space-x-2 justify-start w-full ">
                        <button onClick={() => {
                            setEditttp(null);
                            setShowForm(true);
                        }} className="p-2  bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center hover:scale-105 transform transition-all duration-500">
                            <GrIkon.GrPrint size={15} />
                            <h1>Cetak</h1>
                        </button>
                        {/* <div className="flex items-center">
                            <p className='w-24' htmlFor="data_WBP">Status :</p>
                            <select
                                className="mt-1 block w-full py-2 px-3 border-2 border-yellow-500 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setstatus(e.target.value)
                                }}
                                value={status}>
                                <option value='Ya'>Ya</option>
                                <option value='Belum'>Belum</option>
                            </select>
                        </div> */}
                    </div>
                    {/* <div className="flex items-center space-x-2 justify-end ">
                        <button onClick={() => {
                            pencarian();
                        }}>
                            <BiIkon.BiSearchAlt2 size={20} /></button>

                        <input type="text" className='p-1 bg-white border-yellow-500 border-2 rounded-md'
                            value={cari}
                            onChange={(e) => {
                                setCari(e.target.value);
                                if (e.target.value == "") {
                                    setdata(props.ttp.data);
                                }
                            }}
                        />
                    </div> */}
                </div>
                {/* <div className="flex items-center justify-center"> */}
                <TableDataTitipan2 datattp={ttp} from={from} />
                {/* <Pagination links={links} /> */}

            </div>
        </div>

    )
}
DataTitipan.layout = (page) => (
    <Authorized children={page} title="Data Titipan" />
);

