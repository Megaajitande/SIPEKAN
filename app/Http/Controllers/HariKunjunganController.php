<?php

namespace App\Http\Controllers;

use App\Models\hari_kunjungan;
use Illuminate\Http\Request;

class HariKunjunganController extends Controller
{
    public function index()
  {
    return inertia('DataHariKunjungan', [
      'hari' => hari_kunjungan::paginate(10)
    ]);
  }
  public function data()
  {
    return hari_kunjungan::latest()->get();
  }

  public function insert(Request $request)
  {

    $request->validate([
      'kode_hari' => ['required'],
      'nama_hari' => ['required'], 
    ]);

    hari_kunjungan::create([
      'kode_hari' => $request->kode_hari,
      'nama_hari' => $request->nama_hari,
    ]);
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil Disimpan'
    ]);
  }

  public function edit(Request $request)
  {
    $request->validate([
        'kode_hari' => ['required'],
        'nama_hari' => ['required'], 
    ]);

    hari_kunjungan::where('id', $request->id)->update([
        'kode_hari' => $request->kode_hari,
        'nama_hari' => $request->nama_hari,
    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    hari_kunjungan::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}
