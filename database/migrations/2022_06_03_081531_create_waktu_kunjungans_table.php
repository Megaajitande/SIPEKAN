<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWaktuKunjungansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('waktu_kunjungans', function (Blueprint $table) {
            $table->id();
            $table->string('kode_jam')->unique();
            $table->string('mulai');
            $table->string('selesai');
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
        Schema::dropIfExists('waktu_kunjungans');
    }
}
