import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import * as HiIkon from "react-icons/hi";
import * as IconAi from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";
import ModalRoot from "./ModalRoot";
import { form } from "../store";

export default function FormLupaPassword({ showModal, setShowModal }) {
const [email, setEmail] = useState("");

const {
    handleSubmit,
    formState: { errors },
} = useForm();

const insertData = () => {
    let formData = new FormData ();
    email && formData.append("email", email);
    Inertia.post("/forgot-password", formData, {
        onSuccess: () => {
            setShowForm(false);
        }
    });
}

const [showForm, setShowForm] = useState(form);
return (
  <ModalRoot showModal={showModal} setShowModal={setShowModal}>
          <div className="w-1/4 bg-white p-5 rounded-md shadow-xl absolute z-30 top-6 space-y-5">
              <div className="flex col-span-1 items-end justify-end">
                  <button>
                      <IconAi.AiFillCloseCircle size={40}
                          onClick={() => {
                              setShowModal(false)
                          }}
                      />
                  </button>
              </div>
              <div className="">
                
                  <h1 className='text-xl font-bold text-center text-indigo-900'> Tambah Data Jam</h1>
              </div>

              <form onSubmit={handleSubmit(insertData)} className="space-y-3 flex flex-col items-center justify-center h-full w-full">
             
                    <div className="flex space-x-4 w-full items-center justify-center">
                        <label
                            className="flex font-bold text-lg"
                            htmlFor="Email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e)=>{setEmail(e.target.value)}}
                            name="email"
                            className="block text-sm m-0 rounded-lg w-full border outline-none"
                        />
                    </div>
                    <div className="text_center mt-6">
                    <div className="py-5">
                        <button type='submit' className='w-full py-2 px-6  text-xl shadow-sm text-indigo-700 border-2 hover:text-white hover:bg-blue-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30'>
                   Kirim
                  </button>
                  </div>
                    </div>
                </form>
              </div>
      </ModalRoot>
);
}
