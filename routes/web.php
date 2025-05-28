<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\WorksController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SessionController;

Route::get('/', [IndexController::class, 'index']); // Página inicial da div centrada com barra de pesquisa

Route::get('/jobs', [WorksController::class, 'search']); // Página de pesquisar os trabalhos
Route::get('/job_create', [WorksController::class, 'create'])->middleware('auth'); // Página de formulário para criar os trabalhos
Route::post('/job_create', [WorksController::class, 'store'])->middleware('auth'); // Criar o trabalho para a base de dados
Route::get('/jobs_show', [WorksController::class, 'show'])->middleware('auth'); // Mostrar os trabalho que foi criado pelo utilizador autenticado
Route::get('/job_edit/{job}', [WorksController::class, 'edit'])->middleware('auth'); // Página de formulário para editar o trabalho
Route::put('/job_edit/{job}', [WorksController::class, 'update'])->middleware('auth'); // Editar o trabalho para a base de dados
Route::delete('/job_delete/{job}', [WorksController::class, 'destroy'])->middleware('auth'); // Eliminar o trabalho da base de dados, o parte de perguntar se quer eliminar está no jobs_show

Route::post('/contact', [ContactsController::class, 'store']); // Criar contacto do trabalho na base de dados, a página do formulário está na jobs_show
Route::get('/job/{job}/contacts', [ContactsController::class, 'show'])->middleware('auth'); // Página de contactos do trabalho específico

Route::get('/register', [UserController::class, 'create'])->middleware('guest'); // Página de formulário para registar
Route::post('/register', [UserController::class, 'store'])->middleware('guest'); // Registar user na base de dados

Route::get('/login', [SessionController::class, 'create'])->middleware('guest')->name('login'); // Página de formulário para login
Route::post('/login', [SessionController::class, 'store'])->middleware('guest'); // Fazer login
Route::delete('/logout', [SessionController::class, 'destroy'])->middleware('auth'); // Fazer logout
