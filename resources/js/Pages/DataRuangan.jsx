import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import Authorized from '../Layout/Authorized';
import { editData, form, lihatdata } from '../store';
import * as GrIkon from "react-icons/gr"
import axios from 'axios';
import Tabel_Ruangan_Kunjungan from '../Components/Tabel_Ruangan_Kunjungan';

export default function DataRuangan(props) {
  const [cari, setCari] = useState();
  const [Ruangan, setruangan] = useState(props.ruangan.data);
  const pencarian = async () => {
      try {
          let response = await axios.get(`/cariruangankunjungan/${cari}`);
          setruangan(response.data);
      } catch (error) { }
  };

  const links = props.ruangan.links;
  const from = props.ruangan.from;


  const [showForm, setShowForm] = useRecoilState(form);
  const [editruangan, setEditruangan] = useRecoilState(editData);

  return (
      <div className='relative min-h-screen flex items-center justify-center'>
          {/* {showForm && <FormDataWBP showModal={showForm} setShowModal={setShowForm} />} */}

          <div className="w-full h-full space-y-3">
              <div className="flex px-5 items-start space-x-2 justify-start w-full ">
                  <button onClick={() => {
                      setEditruangan(null);
                      setShowForm(true);
                  }} className=" p-2  bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center hover:scale-105 transform transition-all duration-500">
                      <GrIkon.GrNewWindow size={15} />
                      <h1>Tambah Data</h1>
                  </button>
              </div>
              <Tabel_Ruangan_Kunjungan ruangan_kunjungan={Ruangan} from={from} />
          </div>
      </div>
  );
}
DataRuangan.layout = (page) => (
  <Authorized children={page} title="Data Ruangan Kunjungan" />
);
