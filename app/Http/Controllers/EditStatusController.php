<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EditStatusController extends Controller
{
    public function index()
    {
        return inertia('Status');
    }

    public function edit(Request $request)
    {
        $request->validate([
            'status' => ['required'],

        ]);
    }
}
