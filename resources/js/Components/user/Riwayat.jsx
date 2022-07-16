import React from 'react'
import { useRecoilState } from 'recoil';
import { form } from '../../store';

export default function Riwayat() {
  const [showForm, setShowForm] = useRecoilState(form);
  return (
    <div>Riwayat
      <div className="bg-blue-600">ini merupakan halaman riwayat</div>
    </div>
   
  )
}
