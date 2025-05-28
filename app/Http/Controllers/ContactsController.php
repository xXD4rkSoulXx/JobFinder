<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Contacts;
use App\Models\Works;

class ContactsController extends Controller
{
    function store() {
		$validation = request()->validate([
			'email' => ['required', 'email'],
			'phone' => ['required', 'regex:/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/'],
			'message' => ['required'],
			'works_id' => ['required']
		]);
		
		Contacts::create($validation);
		
		return redirect('/jobs');
	}
	
	function show(Works $job) {
		// Impedir que utilizadores que não postaram este trabalho, que não ver os contactos
		if($job['user_id'] !== Auth::user()->id) {
			abort(403, 'Access not authorizated.');
		}
		
		return Inertia::render('contacts/show', [
			'contacts' => Contacts::with('job')
								  ->where('works_id', '=', $job->id)
								  ->latest('id')
								  ->get(),
			'auth' => Auth::user() // Forma alternativa para usar o @auth no React
		]);
	}
}
