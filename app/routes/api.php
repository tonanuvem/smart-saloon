<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('dogs', 'App\Http\Controllers\api\DogController');
