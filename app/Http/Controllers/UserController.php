<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use App\Models\User;

class UserController extends Controller
{
    public function create() {
		return Inertia::render('auth/register');
	}
	
	public function store() {
		$validation = request()->validate([
			'name' => ['required', 'regex:/^[a-zA-ZÀ-ÿ\s]+$/'],
			'email' => ['required', 'email', 'unique:users,email'],
			'password' => ['required', Password::default(), 'confirmed']
		]);
		
		$user = User::create($validation);
		
		Auth::login($user);
		
		return redirect('/');
	}
}
