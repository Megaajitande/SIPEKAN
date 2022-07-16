import React, { useState } from "react";
// import Guest from '../Layout/Guest'
import { Link, usePage } from "@inertiajs/inertia-react";
import * as HiIkon from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

export default function LupaPassword() {
    const { email, token } = usePage().props;
    const [emails, setEmail] = useState(email);
    const [password, setPassword] = useState();
    const [password_confirmation, setKonfirmasiPassword] = useState();
    const [tokens, setToken] = useState(token);

    const { handleSubmit } = useForm();
    const resetpassword = () => {
        let data = {
            email: emails,
            password: password,
            password_confirmation: password_confirmation,
            token: tokens,
        };
        // let formData = new FormData ();
        // emails && formData.append("email", emails);
        // password && formData.append("password", password);
        // password_confirmation && formData.append("passwxord_confirmation", password_confirmation);
        // tokens && formData.append("token", tokens);
        Inertia.post("/password-update", data, {
            onSuccess: () => {
                toast.success("Reset Password Berhasil!");
            },
            onError: (e) => {
                toast.error(e?.error || "Gagal Reset Password!");
            },
        });
    };
    return (
        <div className="h-screen  w-full flex justify-center items-center ">
            <Toaster />
            <div className="w-1/4 flex h-a1 overflow-hidden rounded-3xl   ">
                <div className="py-8 px-10 text-center flex flex-col flex-grow  border-blue-900 border-2  bg-white bg-gradient-to-br shadow-xl justify-center items-center ">
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
                        <h1 className="text-3xl font-bold text-center mb-4 text-indigo-900">
                            Reset Password
                        </h1>
                    </div>
                    <form action="" onSubmit={handleSubmit(resetpassword)} className="space-y-3 flex flex-col items-center justify-start h-full w-full">
                        <div className="grid grid-cols-2 text-lg space-x-2 w-full items-center justify-center">
                            <label
                                className=" flex font-bold text-sm items-start justify-start"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                value={email}
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2  space-x-2 w-full items-center justify-center">
                            <label
                                className="flex font-bold text-sm items-start justify-start"
                                htmlFor="password_baru"
                            >
                                Password Baru
                            </label>
                            <input
                                type="password"
                                placeholder="password_baru"
                                name="password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 space-x-2 w-full items-center justify-center">
                            <label
                                className="flex font-bold text-sm items-start justify-start"
                                htmlFor="konfirmasi_password"
                            >
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                placeholder="konfirmasi_password"
                                name="password_confirmation"
                                onChange={(e)=>{setKonfirmasiPassword(e.target.value)}}
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                        </div>
                        <input type="hidden" name="token" value={tokens} />
                        <div className="py-5">
                        <button type='submit' className='w-full py-2 px-6 text-xl shadow-sm text-indigo-700 border-2 hover:text-white hover:bg-blue-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30'>
                   Kirim
                  </button>
                  </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
