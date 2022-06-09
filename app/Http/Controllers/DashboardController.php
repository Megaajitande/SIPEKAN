<?php

namespace App\Http\Controllers;

use App\Models\data_kunjungan;
use App\Models\data_titipan;
use App\Models\TabelPengaduan;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // return User::get()->count();
        return inertia('Dashboard', [
            'stat' => [
                'pengguna' => User::get()->count(),
                'kunjungan' => data_kunjungan::get()->count(),
                'titipan' => data_titipan::get()->count(),
                'Pengaduan' => TabelPengaduan::get()->count(),
            ]
        ]);
    }
}
