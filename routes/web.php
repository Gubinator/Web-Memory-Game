<?php

use App\Http\Controllers\TermController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',  [TermController::class, 'index']);

Route::get('/index', [TermController::class, 'index']);

Route::put('/index', [TermController::class, 'addTerm'])->name('terms.add');    

Route::delete('/index/{id}', [TermController::class, 'deleteTerm'])->name('terms.delete');
