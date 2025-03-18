<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('ToDo');
})->where("any",".*");//using vue-router with laravel
