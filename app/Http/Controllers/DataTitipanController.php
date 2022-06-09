<?php

namespace App\Http\Controllers;

use App\Models\data_titipan;
use App\Models\DataWBP;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class DataTitipanController extends Controller
{
  public function cari($cari)
  {
    $datatitipan = data_titipan::with('wbp')->where('nama_wbp', 'LIKE', '%' . $cari . '%')->orwhere('nama_pengirim', 'LIKE', '%' . $cari . '%')->get();
    return $datatitipan;
  }

  public function index()
  {
    return inertia('DataTitipan', [
      'ttp' => data_titipan::with('wbp')->paginate(10)
    ]);
  }
  public function data()
  {
    return data_titipan::with(['wbp'])->latest()->get();
    return DataWBP::orderBy('wbp', 'ASC')->get();
  }
  public function insert(Request $request)
  {
    $request->validate([
      'nama_wbp' => ['required'],
      'hubungan' => ['required'],
      'nama_pengirim' => ['required'],
      'nomor_identitas' => ['required'],
      'nomor_hanphone' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'jenis_kiriman' => ['required'],
      'foto' => ['required'],

    ]);
    $user_id =  Auth::user()->id;

    $cek2 = data_titipan::where('tanggaldaftar', date("Y/m/d"))->where('user_id', $user_id)->where('status', "1")->first();
    // return $cek2;
    if ($cek2) {
      throw ValidationException::withMessages([
        'type' => 'error',
        'message' => 'Gagal Mendaftar !'
      ]);
    } else {
      $foto = $request->file('foto');
      $fileName = $request->nama_pengirim . '.' . $foto[0]->getClientOriginalExtension();

      $path = $request->foto[0]->storeAs('public/gambar', $fileName);

      data_titipan::create([
        'nama_wbp' => $request->nama_wbp,
        'hubungan' => $request->hubungan,
        'nama_pengirim' => $request->nama_pengirim,
        'nomor_identitas' => $request->nomor_identitas,
        'nomor_hanphone' => $request->nomor_hanphone,
        'jenis_kelamin' => $request->jenis_kelamin,
        'alamat' => $request->alamat,
        'jenis_kiriman' => $request->jenis_kiriman,
        'jumlah_uang' => $request->jumlah_uang,
        'detail_kiriman' => $request->detail_kiriman,
        'foto' => $path,
        'status' => '1',
        'user_id' => $user_id,
        'tanggaldaftar' => date(now()),
      ]);
      return redirect('/koderegisttp')->with([
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

    data_titipan::where('id', $request->id)->update([
      'nama_wbp' => $request->nama_wbp,
      'hubungan' => $request->hubungan,
      'nama_pengirim' => $request->nama_pengirim,
      'nomor_identitas' => $request->nomor_identitas,
      'nomor_hanphone' => $request->nomor_hanphone,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'jenis_kiriman' => $request->jenis_kiriman,
      'jumlah_uang' => $request->jumlah_uang,
      'detail_kiriman' => $request->detail_kiriman,
      'foto' => $request->foto,
      // 'status' => $request->status,

    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Titipan Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    data_titipan::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}
