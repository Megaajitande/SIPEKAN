import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import Authorized from '../Layout/Authorized';
import { editData, form, lihatdata } from '../store';
import * as GrIkon from "react-icons/gr"
import axios from 'axios';
import TabelWaktuKunjungan from '../Components/TabelWaktuKunjungan';
import FormWaktuKunjungan from '../Components/FormWaktuKunjungan';

export default function DataWaktuKnj(props) {
  const [cari, setCari] = useState();
  const [waktu, setwaktu] = useState(props.waktu.data);
  const pencarian = async () => {
      try {
          let response = await axios.get(`/cariwaktukunjungan/${cari}`);
          setwaktu(response.data);
      } catch (error) { }
  };

  const links = props.waktu.links;
  const from = props.waktu.from;


  const [showForm, setShowForm] = useRecoilState(form);
  const [editwaktu, setEditwaktu] = useRecoilState(editData);

  return (
      <div className='relative min-h-screen flex items-center justify-center'>
          {showForm && <FormWaktuKunjungan showModal={showForm} setShowModal={setShowForm} />}

          <div className="w-full h-full space-y-3">
              <div className="flex px-5 items-start space-x-2 justify-start w-full ">
                  <button onClick={() => {
                      setEditwaktu(null);
                      setShowForm(true);
                  }} className=" p-2  bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center hover:scale-105 transform transition-all duration-500">
                      <GrIkon.GrNewWindow size={15} />
                      <h1>Tambah Data</h1>
                  </button>
                 
              </div>
              <TabelWaktuKunjungan waktukunjungan={waktu} from={from} />
            
          </div>

      </div>
  );
}
DataWaktuKnj.layout = (page) => (
  <Authorized children={page} title="Data Waktu Kunjungan" />
);
