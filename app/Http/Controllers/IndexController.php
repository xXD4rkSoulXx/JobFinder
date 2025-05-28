<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function index() {
		return Inertia::render('index', [
			'auth' => Auth::user() // Forma alternativa para usar o @auth no React
		]);
	}
}
