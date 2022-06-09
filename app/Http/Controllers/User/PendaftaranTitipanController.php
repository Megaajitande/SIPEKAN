<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\DataWBP;
use Illuminate\Http\Request;

class PendaftaranTitipanController extends Controller
{
    public function index()
    {
       return inertia('User/PendaftaranTitipan', [
        'namawbp' => DataWBP::get()
    ]);
    }
}
