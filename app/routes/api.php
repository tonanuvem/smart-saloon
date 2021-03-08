<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('dogs', 'App\Http\Controllers\api\DogController');
Route::apiResource('clients', 'App\Http\Controllers\api\ClientController');
Route::apiResource('employees', 'App\Http\Controllers\api\EmployeeController');
Route::apiResource('appointments', 'App\Http\Controllers\api\AppointmentsController');
