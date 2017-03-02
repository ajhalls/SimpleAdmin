<?php

namespace App;
use Libraries\functions;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model {
protected $table="categories";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
     
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
       
    ];
}
