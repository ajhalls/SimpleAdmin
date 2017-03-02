<?php

namespace App;
use Libraries\functions;
use Illuminate\Database\Eloquent\Model;

class CategoryItem extends Model {
protected $table="category-item";
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
