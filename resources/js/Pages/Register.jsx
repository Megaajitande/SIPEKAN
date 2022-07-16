import React, { useState } from 'react'
import { Link } from "@inertiajs/inertia-react";
import * as HiIkon from "react-icons/hi"
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';
import { form } from '../store';
import { useRecoilState } from 'recoil';


export default function Register(props) {
    // const [showForm, setShowForm] = useRecoilState(form);
    const [error, seterror] = useState()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [foto, setfoto] = useState(foto);

    const daftarakun = (data) => {
        data["foto"] = foto;
        Inertia.post("register", data, {
            onError: (e) => {
                seterror(e);
            }
        });

    };

    return (
        <div className="">
            <div className="h-screen  w-full flex justify-center items-center">
                <div className="w-1/4 flex h-a1 overflow-hidden rounded-3xl">
                    
                    {/* <div className="p-12 bg-indigo-900 w-3/5 shadow-xl md:flex hidden flex-col justify-center ">
                        <div className="mb-10">
                            <Link
                                href="/"
                                className="text-xs text-white hover:text-green-200"
                            >
                                <HiIkon.HiOutlineLogin size={20} />
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center w-5/6">
                                <img
                                    src="/img/logo.jpg"
                                    alt=""
                                    className="px-5"
                                />
                            </div>
                            <div className="mt-8 text-xs italic text-white text-center">
                                Selamat Datang Di Halaman Register SIPEKAN
                            </div>
                        </div>
                    </div> */}

                    <div className="py-8 px-10 text-center flex flex-col flex-grow border-indigo-500 border-2  bg-indigo-800 bg-gradient-to-br shadow-xl justify-center items-center ">
                    <div className="flex w-16 h-16 items-center justify-center">
                        <img
                            src="/img/logo.jpg"
                            alt=""
                            className="w-12"
                        />
                        <img
                            src="/img/log.jpg"
                            alt=""
                            className=""
                        />
                    </div>
                        <form onSubmit={handleSubmit(daftarakun)}>
                            <div>
                                <h1 className="text-3xl font-bold text-center mb-4 text-White">
                                    Register Page
                                </h1>
                            </div>
                            <div className="space-y-2 w-full">
                                <input
                                    type="text"
                                    placeholder="Masukkan Nama Lengkap Anda"
                                    name="nama_lengkap"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("nama_lengkap", {
                                        required: true,
                                    })}
                                />
                                {errors?.nama_lengkap && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Nama Lengkap
                                    </span>
                                )}
                                <input
                                    type="text"
                                    placeholder="Masukkan Nomor Identitas Anda"
                                    name="nomor_identitas"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("nomor_identitas", {
                                        required: true,
                                    })}
                                />
                                {errors?.nomor_identitas && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *nomor_identitas
                                    </span>
                                )}
                                <input
                                    type="text"
                                    placeholder="Email anda"
                                    name="email"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors?.alamat && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Email
                                    </span>
                                )}
                                <input
                                    type="text"
                                    placeholder="No_Handphone"
                                    name="no_handphone"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("no_handphone", {
                                        required: true,
                                    })}
                                />
                                {errors?.no_handphone && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Nomor Handphone
                                    </span>
                                )}
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("username", {
                                        required: true,
                                    })}
                                />
                                {errors?.username && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Username
                                    </span>
                                )}
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors?.password && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Password
                                    </span>
                                )}
                                <input
                                    type="password"
                                    placeholder="Konfirmasi_Password"
                                    name="konfirmasi_password"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("konfirmasi_password", {
                                        required: true,
                                    })}
                                />
                                {errors?.password && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Konfirmasi Password
                                    </span>
                                )}
                                <input className='text-white' type="file"
                                    onChange={(e) => {
                                        setfoto(e.target.files);
                                    }}
                                />
                                {errors?.foto && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Masukkan Foto Anda yang terlihat jelas
                                    </span>
                                )}
                                {error?.konfirmasi_password && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        {error?.konfirmasi_password}
                                    </span>
                                )}
                            </div>
                            {props?.errors.nip_nomor_identitas && <span className='text-red-300 text-xs'> Nomor Identitas Sudah di daftarkan, silahkan coba Nomor Identitas lain!</span>}
                            <div className="text-center mt-6 w-full">
                                <button
                                    type='submit'
                                    className="w-full py-2 text-xl shadow-sm text-white border-2 hover:text-white hover:bg-blue-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30"
                                >
                                    Daftar
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
// Register.layout = (page) => <Guest children={page} title="Register"/>;
