<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('dogs', 'App\Http\Controllers\api\DogController');
Route::apiResource('clients', 'App\Http\Controllers\api\ClientController');
Route::apiResource('employess', 'App\Http\Controllers\api\EmployeeController');
