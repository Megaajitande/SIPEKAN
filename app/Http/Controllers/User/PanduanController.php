<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PanduanController extends Controller
{
    public function index()
    {
        return inertia('User/Panduan');
    }
}
