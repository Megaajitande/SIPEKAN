<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class data_titipan extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function wbp()
    {
        return $this->belongsTo('App\Models\DataWBP', 'nama_wbp', 'id');
    }
}
