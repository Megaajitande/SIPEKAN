<?php

namespace App\Http\Controllers;

use App\Models\data_kunjungan;
use App\Models\DataWBP;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class DatakunjunganController extends Controller
{
  public function cari($cari)
  {
    $datakunjungan = data_kunjungan::with('wbp')->where('nama_wbp', 'LIKE', '%' . $cari . '%')->orwhere('nama_pengunjung', 'LIKE', '%' . $cari . '%')->get();
    return $datakunjungan;
  }

  public function index()
  {
    return inertia('DataKunjungan', [
      'knj' => data_kunjungan::with('wbp')->paginate(10)
    ]);
  }

  public function data()
  {
    return data_kunjungan::with(['wbp'])->latest()->get();
    return DataWBP::orderBy('wbp', 'ASC')->get();
  }

  public function insert(Request $request)
  {
    $request->validate([
      'nama_wbp' => ['required'],
      'hubungan' => ['required'],
      'nama_pengunjung' => ['required'],
      'nomor_identitas' => ['required'],
      'no_handphone' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'jplaki_laki' => ['required'],
      'jpperempuan' => ['required'],
      'jpanak_anak' => ['required'],
      'detail_barang' => ['required'],
      'foto' => ['required'],
    ]);
    $user_id =  Auth::user()->id;

    $cek2 = data_kunjungan::where('tanggaldaftar', date("Y/m/d"))->where('user_id', $user_id)->where('status', "1")->first();
    // return $cek2;
    if ($cek2) {
      throw ValidationException::withMessages([
        'type' => 'error',
        'message' => 'Gagal Mendaftar !'
      ]);
    } else {
      $foto = $request->file('foto');
      $fileName = $request->nama_pengunjung . '.' . $foto[0]->getClientOriginalExtension();

      $path = $request->foto[0]->storeAs('public/gambar', $fileName);

      data_kunjungan::create([
        'nama_wbp' => $request->nama_wbp,
        'hubungan' => $request->hubungan,
        'nama_pengunjung' => $request->nama_pengunjung,
        'nomor_identitas' => $request->nomor_identitas,
        'no_handphone' => $request->no_handphone,
        'jenis_kelamin' => $request->jenis_kelamin,
        'alamat' => $request->alamat,
        'jplaki_laki' => $request->jplaki_laki,
        'jpperempuan' => $request->jpperempuan,
        'jpanak_anak' => $request->jpanak_anak,
        'detail_barang' => $request->detail_barang,
        'foto' => $path,
        'status' => '1',
        'user_id' => $user_id,
        'tanggaldaftar' => date(now()),
      ]);
      // return back()->with([
      //   'type' => 'success',
      //   'message' => 'Data Kunjungan Berhasil Dikirim'
      // ]);

      return redirect('/koderegistrasi')->with([
        'type' => 'success',
        'message' => 'Data Kunjungan Berhasil Disimpan'
      ]);
    }
  }

  public function edit(Request $request)
  {
    $request->validate([
      'status' => ['required'],
    ]);

    data_kunjungan::where('id', $request->id)->update([
      'nama_wbp' => $request->nama_wbp,
      'hubungan' => $request->hubungan,
      'nama_pengunjung' => $request->nama_pengunjung,
      'nomor_identitas' => $request->nomor_identitas,
      'no_handphone' => $request->no_handphone,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'jplaki_laki' => $request->jplaki_laki,
      'jpperempuan' => $request->jpperempuan,
      'jpanak_anak' => $request->jpanak_anak,
      'detail_barang' => $request->detail_barang,
      'foto' => $request->foto,
      // 'status' => $request->status,
    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Kunjungan Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    data_kunjungan::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}
