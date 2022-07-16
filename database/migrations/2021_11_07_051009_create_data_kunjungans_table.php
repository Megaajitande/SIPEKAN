<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataKunjungansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_kunjungans', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('nama_wbp');
            $table->string('hubungan');
            $table->string('nama_pengunjung');
            $table->string('nomor_identitas')->unique();
            $table->string('no_handphone');
            $table->string('jenis_kelamin');
            $table->string('alamat');
            $table->string('jplaki_laki');
            $table->string('jpperempuan');
            $table->string('jpanak_anak');
            $table->string('detail_barang');
            $table->string('foto');
            $table->string('waktu_tglknj')->nullable();
            $table->string('kode_kunjungan')->nullable();
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
        Schema::dropIfExists('data_kunjungans');
    }
}
