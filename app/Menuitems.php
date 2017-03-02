<?php

namespace App;
use Libraries\functions;
use Illuminate\Database\Eloquent\Model;

class Menuitems extends Model {
protected $table="menu_items";
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
