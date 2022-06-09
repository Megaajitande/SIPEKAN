<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class data_pengguna extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
}
