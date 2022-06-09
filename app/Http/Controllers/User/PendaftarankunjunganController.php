<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\DataWBP;
use Illuminate\Http\Request;

class PendaftarankunjunganController extends Controller
{
    public function index()
    {
       return inertia('User/PendaftaranKunjungan', [
           'namawbp' => DataWBP::get()
       ]);
    }
}
