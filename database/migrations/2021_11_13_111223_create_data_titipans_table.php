<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataTitipansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_titipans', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('nama_wbp');
            $table->string('hubungan');
            $table->string('nama_pengirim');
            $table->string('nomor_identitas')->unique();
            $table->string('nomor_hanphone');
            $table->string('jenis_kelamin');
            $table->string('alamat');
            $table->string('jenis_kiriman');
            $table->string('jumlah_uang')->nullable();
            $table->string('detail_kiriman')->nullable();
            $table->string('foto');
            $table->string('waktu_tglttp')->nullable();
            $table->string('kode_titipan')->nullable();
            $table->string('Status')->nullable();
            $table->date('tanggaldaftar');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_titipans');
    }
}
