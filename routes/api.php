<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;

Route::namespace('Api')->group(function() {
    Route::prefix('auth')->group(function() {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('register', [AuthController::class, 'register']);

        Route::middleware('jwt.auth')->group(function() {
            Route::post('logout', [AuthController::class, 'logout']);
            Route::get('me', [AuthController::class, 'me']);
        });
    });
});

Route::resource('users', UserController::class)->middleware('jwt.auth')->except(['create', 'edit']);
