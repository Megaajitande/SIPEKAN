<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        if ($auth) {
            if ($auth["roles"][0]["name"] == 'admin') {
                return redirect('/dashboard');
            } elseif ($auth["roles"][0]["name"] == 'user') {
                return redirect('/userdashboard');
            }
        }
        return inertia('Login');
    }
    public function tes()
    {
        return User::all();
    }
    public function cekLogin(Request $request)
    {
        if (Auth::attempt($request->only('username', 'password'))) {
            $user = User::where('username', $request->username)->first();

            session()->regenerate();
            session()->put('user_id', $user->id);
            if ($user->hasRole('admin')) {
                return redirect('/dashboard')->with([
                    'type' => 'success',
                    'message' => 'Selamat Datang'
                ]);
            } else {
                return redirect('/userdashboard')->with([
                    'type' => 'success',
                    'message' => 'Selamat Datang'
                ]);
            }
        }
        throw ValidationException::withMessages([
            'failed' => 'Nama Pengguna dan Kata Sandi tidak sesuai'
        ]);
    }
    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
