import React from 'react'
// import Guest from '../Layout/Guest'
import { Link, usePage } from "@inertiajs/inertia-react";
import * as HiIkon from "react-icons/hi"
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';
import { form } from '../store';
import { useRecoilState } from 'recoil';
import FormLupaPassword from '../Components/FormLupaPassword';

export default function Login(props) {
    const [showForm, setShowForm] = useRecoilState(form);
    const { flash } = usePage().props;
    flash.type && toast[flash.type](flash.message);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const cekLogin = (data) => {
        Inertia.post("login", data, {
            onError: (e) => {
                console.log(e);
            }
        });
    }
    return (
        <div className="h-screen  w-full flex justify-center items-center">
            <Toaster />
            {showForm && <FormLupaPassword showModal={showForm} setShowModal={setShowForm} />}
            <div className="w-1/4 flex h-a1 overflow-hidden rounded-3xl ">
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
                        <div className="flex items-center justify-center w-1/2">
                            <img
                                src="/img/logo.jpg"
                                alt=""
                                className="px-5"
                            />
                        </div>
                        <div className="mt-8 text-xs italic text-white text-center">
                            Selamat Datang Di Halaman Login SIPEKAN
                        </div>
                    </div>
                </div> */}

                <div className="py-8 px-10 text-center flex flex-col flex-grow  border-indigo-500 border-2  bg-indigo-700 bg-linier-gradient-to-br shadow-xl justify-center items-center">
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
                    <div>
                        <h1 className="text-2xl font-bold text-center mb-4 text-white">
                            Halaman Login
                        </h1>
                    </div>
                    <form action="" onSubmit={handleSubmit(cekLogin)} className="py-8">
                        <div className="space-y-4 w-full">
                            <input
                                {...register("username", {
                                    required: true,
                                })}
                                type="text"
                                placeholder="Username"
                                name="username"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            {errors?.username && (
                                <span className="flex pl-1 justify-start text-red-300 text-xs">
                                    *Username
                                </span>
                            )}
                            <input
                                {...register("password", {
                                    required: true,
                                })}
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            {errors?.password && (
                                <span className="flex pl-1 justify-start text-red-300 text-xs">
                                    *Password
                                </span>
                            )}
                        </div>
                        <div className="text-center mt-6 w-full">
                            <button
                                type="submit"
                                className="w-full py-2 text-xl shadow-sm text-white border-2 hover:text-white hover:bg-blue-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30"
                            >
                                Masuk
                            </button>
                            {props?.errors?.failed && (
                                <span className="text-xs text-red-500 p1">
                                    {props.errors.failed}
                                </span>
                            )}
                            <p className="mt-4 text-sm text-white">
                                Belum Punya Akun?{" "}
                                <Link
                                    href="/register"
                                    className="underline hover:text--400 cursor-pointer"
                                >
                                    Buat Akun
                                </Link>
                            </p>
                            <a className="mt-4 text-sm text-white" href='#Lupa_Password' onClick={() =>{
                                    setShowForm(true);
                            }}
                                >
                                    Lupa Password
                                </a>
                            </div> 
                    </form>
                </div>
                
            </div>
        </div>
    )
}
// Login.layout = (page) => <Guest children={page} title="Login" />;
