<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use App\Models\User;
use App\Models\Works;

class WorksController extends Controller
{
    public function search() {
		return Inertia::render('jobs/search', [
				'jobs' => Works::with('user')
							   ->where('name', 'LIKE', '%' . request('name') . '%')
							   ->where('location', 'LIKE', '%' . request('location') . '%')
							   ->latest('id')
							   ->get(),
				'nameSearched' => request('name'), // Para já preencher automáticamente a barra de pesquisa nome
				'locationSearched' => request('location'), // Para já preencher automáticamente a barra de pesquisa localização
				'auth' => Auth::user() // Forma alternativa para usar o @auth no React
			]);
	}
	
	public function create() {
		return Inertia::render('jobs/create', [
			'auth' => Auth::user() // Forma alternativa para usar o @auth no React
		]);
	}
	
	public function store() {
		$validation = request()->validate([
			'name' => ['required'],
			'enterprise' => ['required'],
			'location' => ['required'],
			'time' => ['required', Rule::in(['Full-Time', 'Part-Time'])],
			'salary' => ['required', 'min:0', 'numeric'],
			'description' => ['required']
		]);
		$validation['user_id'] = Auth::user()->id;
		
		Works::create($validation);
		
		return redirect('/');
	}
	
	public function show() {
		return Inertia::render('jobs/show', [
			'jobs' => Works::with('user')
						   ->where('user_id', '=', Auth::user()->id)
						   ->latest('id')
						   ->get(),
			'auth' => Auth::user() // Forma alternativa para usar o @auth no React
		]);
	}
	
	public function edit(Works $job) {
		// Impedir que utilizadores que não postaram este trabalho, que não possam editar
		if($job['user_id'] !== Auth::user()->id) {
			abort(403, 'Access not authorizated.');
		}
		
		return Inertia::render('jobs/edit', [
			'job' => $job,
			'auth' => Auth::user() // Forma alternativa para usar o @auth no React
		]);
	}
	
	public function update(Works $job) {
		$validation = request()->validate([
			'name' => ['required'],
			'enterprise' => ['required'],
			'location' => ['required'],
			'time' => ['required', Rule::in(['Full-Time', 'Part-Time'])],
			'salary' => ['required', 'min:0', 'numeric'],
			'description' => ['required']
		]);
		
		$job->update($validation);
		
		return redirect('/jobs_show');
	}
	
	public function destroy(Works $job) {
		$job->delete();
		
		return redirect('/jobs_show');
	}
}
