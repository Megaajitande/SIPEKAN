<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\riwayat;
use Illuminate\Http\Request;

class RiwayatController extends Controller
{
    public function index()
    {
      return inertia('Riwayat', [
        'rwyt' => riwayat::paginate(10)
      ]);
    }
}



