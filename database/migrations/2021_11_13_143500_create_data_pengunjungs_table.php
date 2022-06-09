<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataPengunjungsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_pengunjungs', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap');
            $table->string('nomor_identitas')->unique();
            $table->string('alamat');
            $table->string('jenis_kelamin');
            $table->string('username');
            $table->string('password');
            $table->string('no_handphone');
            $table->string('email');
            $table->string('foto');
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
        Schema::dropIfExists('data_pengunjungs');
    }
}
