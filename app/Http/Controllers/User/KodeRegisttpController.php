<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\data_titipan;
use Illuminate\Http\Request;

class KodeRegisttpController extends Controller
{
    public function index(Request $request)
    {
        $user_id =  $request->session()->get('user_id');
        return inertia('User/KodeRegisttp', [
            'antrian' => data_titipan::with('wbp')->where('user_id', $user_id)->orderBy('created_at', 'DESC')->whereIn('status', ['1'])->first()
        ]);
    }
}
