<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataWBPSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_w_b_p_s', function (Blueprint $table) {
            $table->id();
            $table->string('nama_wbp');
            $table->string('no_register')->unique();
            $table->string('jenis_kelamin');
            $table->string('agama');
            $table->string('pendidikan');
            $table->string('tempat_lahir');
            $table->string('tanggal_lahir');
            $table->string('alamat');
            $table->string('kewarganegaraan');
            $table->string('perkara_pasal');
            $table->string('tanggal_mulai_ditahan');
            $table->string('lama_dipidana');
            $table->string('remisi');
            $table->string('tanggal_habis_masa_penahanan');
            $table->string('keterangan')->nullable();
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
        Schema::dropIfExists('data_w_b_p_s');
    }
}
