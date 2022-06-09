<?php

namespace Database\Seeders;

use App\Models\data_kunjungan;
use App\Models\data_pengguna;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(RoleSeeder::class);
        $this->call(DataWbpSeeder::class);
        // $this->call(data_kunjunganSeeder::class);
        // $this->call(data_titipanSeeder::class);



        $user = User::create([
            'nama_lengkap' => 'admin',
            'nomor_identitas' => '12345567890154',
            'email' => 'megawaty@gmail.com',
            'no_handphone' => '082246250306',
            'foto' => '',
            'username' => 'admin',
            'password' => Hash::make('admin')
        ]);
        $user->assignRole('admin');
    }
}
