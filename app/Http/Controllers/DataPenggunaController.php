<?php

namespace App\Http\Controllers;
// use App\Models\registrasikunjungan;
use App\Models\User;
use App\Models\data_pengguna;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DataPenggunaController extends Controller
{
  public function index()
  {
    return inertia('DataPengguna', [
      'png' => user::paginate(10)
    ]);
  }

  public function data()
  {
    return user::latest()->get();
  }

  public function insert(Request $request)
  {
    $request->validate([
      'nomor_identitas' => ['unique:users']
    ]);

    $foto = $request->file('foto');
    $fileName = $request->username . '.' . $foto[0]->getClientOriginalExtension();

    $path = $request->foto[0]->storeAs('public/gambar', $fileName);

    $user = user::create([
      'nama_lengkap' => $request->nama_lengkap,
      'nomor_identitas' => $request->nomor_identitas,
      'email' => $request->email,
      'no_handphone' => $request->no_handphone,
      'username' => $request->username,
      'password' =>  Hash::make($request->password),
      'foto' => $path,
    ]);

    $user->assignRole('user');

    return redirect('/login')->with([
      'type' => 'success',
      'message' => 'Pendaftaran Berhasil, silahkan masuk!'
    ]);
  }

  public function edit(Request $request)
  {
    $request->validate([
      'nama_lengkap' => ['required'],
      'nomor_identitas' => ['required'],
      'email' => ['required'],
      'no_handphone' => ['required'],
      'username' => ['required'],
      'password' => ['required'],
      'foto' => ['required'],

    ]);

    data_pengguna::where('no_identitas', $request->no_register)->update([
      'nama_lengkap' => $request->nama_lengkap,
      'nomor_identitas' => $request->nomor_identitas,
      'email' => $request->email,
      'no_handphone' => $request->no_handphone,
      'username' => $request->username,
      'password' => $request->password,
      'foto' => $request->foto,
    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Titipan Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    data_pengguna::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}
