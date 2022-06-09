<?php

namespace App\Http\Controllers;

use App\Models\waktu_kunjungan;
use Illuminate\Http\Request;

class DataWaktuController extends Controller
{
    public function index()
  {
    return inertia('DataWaktuKnj', [
      'waktu' => waktu_kunjungan::paginate(10)
    ]);
  }
  public function data()
  {
    return waktu_kunjungan::latest()->get();
  }

  public function insert(Request $request)
  {

    $request->validate([
      'kode_jam' => ['required'],
      'mulai' => ['required'], 
      'selesai' => ['required'],

    ]);

    waktu_kunjungan::create([
      'kode_jam' => $request->kode_jam,
      'mulai' => $request->mulai,
      'selesai' => $request->selesai,
    ]);
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil Disimpan'
    ]);
  }

  public function edit(Request $request)
  {
    $request->validate([
      'kode_jam' => ['required'],
      'mulai' => ['required'], 
      'selesai' => ['required'],

    ]);

    waktu_kunjungan::where('id', $request->id)->update([
      'kode_jam' => $request->kode_jam,
      'mulai' => $request->mulai,
      'selesai' => $request->selesai,
    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    waktu_kunjungan::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}

