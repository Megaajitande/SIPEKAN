<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\data_kunjungan;
use Illuminate\Http\Request;

class KodeRegistrasiController extends Controller
{
    public function index(Request $request)
    {
        $user_id =  $request->session()->get('user_id');
        return inertia('User/KodeRegistrasi', [
            'antrian' => data_kunjungan::with('wbp')->where('user_id', $user_id)->orderBy('created_at', 'DESC')->whereIn('status', ['1'])->first()
        ]);
    }
}
