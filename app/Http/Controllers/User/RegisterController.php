<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Register');
    }


    public function daftarakun(Request $request)
    {
        // return $request;
        $request->validate([
            'nomor_identitas' => ['unique:users']
        ]);
        if ($request->password == $request->konfirmasi_password) {
            $foto = $request->file('foto');
            $fileName = $request->username . '.' . $foto[0]->getClientOriginalExtension();

            $path = $request->foto[0]->storeAs('public/gambar', $fileName);

            $user = User::create([
                'nama_lengkap' => $request->nama_lengkap,
                'nomor_identitas' => $request->nomor_identitas,
                'email' => $request->email,
                'no_handphone' => $request->no_handphone,
                'username' => $request->username,
                'password' =>  Hash::make($request->password),
                'foto' =>   $path,
            ]);

            $user->assignRole('user');

            return redirect('/login')->with([
                'type' => 'success',
                'message' => 'Pendaftaran Berhasil, silahkan masuk!'
            ]);
        } else {
            throw ValidationException::withMessages([
                'konfirmasi_password' => 'Konfirmasi Katasandi tidak sama!'
            ]);
        }
    }
}
