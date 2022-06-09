import React from 'react'
import { useRecoilState } from 'recoil';
import FormDataTitipan from '../../Components/user/FormDataTitipan';
import AuthorizedP from '../../Layout/AuthorizedP';
import { form } from '../../store';

export default function PendaftaranTitipan({namawbp}) {
        const [showForm, setShowForm] = useRecoilState(form);
        return (
            <div className="flex items-center">
            <FormDataTitipan namawbp={namawbp}/>
    
        </div>
    )
}
PendaftaranTitipan.layout = (page) => <AuthorizedP children={page} title="Pendaftaran Titipan" />;