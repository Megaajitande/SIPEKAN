import { atom } from "recoil";

const form = atom({
    key: 'form',
    default: false
})

const editData = atom({
    key: 'editData',
    default: []
})

const lihatdata = atom({
    key: 'lihatdata',
    default: false
})

const sidebar = atom({
    key:"sidebar",
    default: [],
})


export{form, editData, sidebar, lihatdata};

