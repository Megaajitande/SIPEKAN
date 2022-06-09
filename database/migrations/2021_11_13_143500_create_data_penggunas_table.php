<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataPenggunasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_penggunas', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap');
            $table->string('nomor_identitas')->unique();
            $table->string('email')->nullable();
            $table->string('no_handphone');
            $table->string('username')->unique();
            $table->string('foto')->nullable();
            $table->string('password');
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
        Schema::dropIfExists('data_penggunas');
    }
}
