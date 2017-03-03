<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/slider', 'SliderController@index');
Route::post('/storeSlider', 'SliderController@storeSlider');
Route::get('/loadSlider', 'SliderController@loadSlider');
Route::get('/easingVisualizer', 'SliderController@easingVisualizer');
Route::get('/menuAdmin', 'menuAdmin@index');
Route::post('/updateMenu', 'menuAdmin@updateMenu');
Route::get('/userAdmin', 'userAdmin@index');
Route::post('/updateUser', 'userAdmin@updateUser');

Route::get('/categoryAdmin', 'categoryAdmin@index');
Route::post('/getCategoryItem', 'categoryAdmin@getCategoryItem');
Route::post('/updateCategory', 'categoryAdmin@updateCategory');


Auth::routes();

Route::get('/home', 'HomeController@index');
