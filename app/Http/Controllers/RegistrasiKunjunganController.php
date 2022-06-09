<?php

namespace App\Http\Controllers;

use App\Models\data_kunjungan;
use App\Models\registrasikunjungan;
use Illuminate\Http\Request;

class RegistrasiKunjunganController extends Controller
{
    // public function index()
    // {
    //     return inertia('RegistrasiKunjungan');
    // }
    public function cari($cari)
    {
        $regisknj = data_kunjungan::where('nama_pengunjung', 'LIKE', '%' . $cari . '%')->orwhere('nomor_identitas', 'LIKE', '%' . $cari . '%')->get();
        return $regisknj;
    }

    public function index()
    {
        return inertia('RegistrasiKunjungan', [
            'regisknj' => data_kunjungan::paginate(10)
        ]);
    }
}
