<?php

use App\Http\Controllers\DatakunjunganController;
use App\Http\Controllers\DataPenggunaController;
use App\Http\Controllers\DataRuanganController;
use App\Http\Controllers\DataTitipanController;
use App\Http\Controllers\DataWaktuController;
use App\Http\Controllers\DataWBPController;
use App\Http\Controllers\HariKunjunganController;
use App\Http\Controllers\PengaduanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/caridataWBP/{cari}', [DataWBPController::class, 'Cari']);
Route::get('/caridatatitipan/{cari}', [DataTitipanController::class, 'Cari']);
Route::get('/caridatakunjungan/{cari}', [DatakunjunganController::class, 'Cari']);
Route::get('/datapengunjung', [DataPenggunaController::class, 'data']);
Route::get('/datakunjungan', [DatakunjunganController::class, 'data']);
Route::get('/datatitipan', [DataTitipanController::class, 'data']);
Route::get('/DataWBP', [DataWBPController::class, 'data']);
// Route::get('/KontakKami', [KontakKamiController::class, 'data']);
Route::get('/caridatapengaduan/{cari}', [PengaduanController::class, 'Cari']);
Route::get('/pengaduan', [PengaduanController::class, 'data']);
Route::get('/waktukunjungan', [DataWaktuController::class, 'data']);
Route::get('/harikunjungan', [HariKunjunganController::class, 'data']);
Route::get('/ruangankunjungan', [DataRuanganController::class, 'data']);
