<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
	public function create() {
		return Inertia::render('auth/login');
	}
	
	public function store() {
		$validation = request()->validate([
			'email' => ['required'],
			'password' => ['required']
		]);
		
		// Se o attempt falhar, significa que e o email não coincidem, e lança um exception
		if(!Auth::attempt($validation)) {
			throw ValidationException::withMessages([
				'password' => 'Sorry, those credentials do not match.'
			]);
		}
		
		request()->session()->regenerate();
		
		return redirect('/');
	}
	
    public function destroy() {
		Auth::logout();
		
		return redirect('/');
	}
}
