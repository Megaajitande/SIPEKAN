<?php

namespace App\Http\Controllers;

use App\Models\ruang_kunjungan;
use Illuminate\Http\Request;

class DataRuanganController extends Controller
{
  public function index()
{
  return inertia('DataRuangan', [
    'ruangan' => ruang_kunjungan::paginate(10)
  ]);
}
public function data()
{
  return ruang_kunjungan::latest()->get();
}

public function insert(Request $request)
{

  $request->validate([
    'kode_ruangan' => ['required'],
    'nama_ruangan' => ['required'], 
  ]);

  ruang_kunjungan::create([
    'kode_ruangan' => $request->kode_ruangan,
    'nama_ruangan' => $request->nama_ruangan,
  ]);
  return back()->with([
    'type' => 'success',
    'message' => 'Data Berhasil Disimpan'
  ]);
}

public function edit(Request $request)
{
  $request->validate([
    'kode_ruangan' => ['required'],
    'nama_ruangan' => ['required'], 
  ]);

  ruang_kunjungan::where('id', $request->id)->update([
    'kode_ruangan' => $request->kode_ruangan,
    'nama_ruangan' => $request->nama_ruangan,
  ]);

  return back()->with([
    'type' => 'success',
    'message' => 'Data Berhasil Diupdate'
  ]);
}

public function hapus(Request $request)
{
  ruang_kunjungan::where('id', $request->id)->delete();
  return back()->with([
    'type' => 'success',
    'message' => 'Data Berhasil diHapus!'
  ]);
}
}
