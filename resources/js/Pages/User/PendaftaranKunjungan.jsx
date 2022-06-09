import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import FormDataKunjungan from '../../Components/user/FormDataKunjungan';
import AuthorizedP from '../../Layout/AuthorizedP';
import { form } from '../../store';

export default function PendaftaranKunjungan({namawbp}) {
    const [showForm, setShowForm] = useRecoilState(form);
    return (
        <div className="flex items-center">
        <FormDataKunjungan namawbp={namawbp}/>
    </div>
    
  )
}
PendaftaranKunjungan.layout = (page) => <AuthorizedP children={page} title="Pendaftaran Kunjungan" />;
