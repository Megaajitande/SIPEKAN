<?php

namespace App\Http\Controllers;

use App\Models\data_pengunjung;
use App\Models\User;
use Illuminate\Http\Request;

class DataPengunjungController extends Controller
{
  public function index()
  {
    return inertia('DataPengunjung', [
      'pnj' => User::paginate(10)
    ]);
  }
  public function insert(Request $request)
  {
    $request->validate([
      'nama_lengkap' => ['required'],
      'nomor_identitas' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'username' => ['required'],
      'password' => ['required'],
      'no_handphone' => ['required'],
      'email' => ['required'],
      'foto' => ['required'],

    ]);

    data_pengunjung::create([
      'nama_lengkap' => $request->nama_lengkap,
      'nomor_identitas' => $request->nomor_identitas,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'username' => $request->username,
      'password' => $request->password,
      'no_handphone' => $request->no_handphone,
      'email' => $request->email,
      'foto' => $request->foto,

    ]);
    return back()->with([
      'type' => 'success',
      'message' => 'Pendaftaran Titipan Berhasil dilakukan'
    ]);
  }

  public function edit(Request $request)
  {
    $request->validate([
      'nama_lengkap' => ['required'],
      'nomor_identitas' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'username' => ['required'],
      'password' => ['required'],
      'no_handphone' => ['required'],
      'email' => ['required'],
      'foto' => ['required'],
    ]);

    data_pengunjung::where('no_identitas', $request->no_register)->update([
      'nama_lengkap' => $request->nama_lengkap,
      'nomor_identitas' => $request->nomor_identitas,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'username' => $request->username,
      'password' => $request->password,
      'no_handphone' => $request->no_handphone,
      'email' => $request->email,
      'foto' => $request->foto,
    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Titipan Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    data_pengunjung::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}
