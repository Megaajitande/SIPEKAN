<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTabelPengaduansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tabel_pengaduans', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap');
            $table->string('email')->unique();
            $table->string('pesan');
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
        Schema::dropIfExists('tabel_pengaduans');
    }
}
