<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\TabelPengaduan;
use Illuminate\Http\Request;

class KontakKamiController extends Controller
{
    // public function index()
    // {
    //     return inertia('User/KontakKami');
    // }
    public function index()
    {
        return inertia('User/KontakKami', [
            'png' => TabelPengaduan::paginate(10)
        ]);
    }
    // public function data()
    // {
    //     return TabelPengaduan::latest()->get();
    // }
    // public function insert(Request $request)
    // {
    //     $request->validate([
    //         'nama_lengkap' => ['required'],
    //         'email' => ['required'],
    //         'pesan' => ['required'],
    //     ]);

    //     TabelPengaduan::create([
    //         'nama_lengkap' => $request->nama_lengkap,
    //         'email' => $request->email,
    //         'pesan' => $request->pesan,
    //     ]);
    //     return back()->with([
    //         'type' => 'success',
    //         'message' => 'Data Berhasil Disimpan'
    //     ]);
    // }

    // public function edit(Request $request)
    // {
    //     $request->validate([
    //         'nama_lengkap' => ['required'],
    //         'email' => ['required'],
    //         'pesan' => ['required'],
    //     ]);

    //     TabelPengaduan::where('id', $request->id)->update([
    //         'nama_lengkap' => $request->nama_lengkap,
    //         'email' => $request->email,
    //         'pesan' => $request->pesan,
    //     ]);

    //     return back()->with([
    //         'type' => 'success',
    //         'message' => 'Data Berhasil Diupdate'
    //     ]);
    // }

    // public function hapus(Request $request)
    // {
    //     TabelPengaduan::where('id', $request->id)->delete();
    //     return back()->with([
    //         'type' => 'success',
    //         'message' => 'Data Berhasil diHapus!'
    //     ]);
    // }
}
