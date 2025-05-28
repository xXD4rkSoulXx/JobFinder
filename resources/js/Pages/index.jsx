// Página principal, com o card centrado e as barras de pequisa

import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Nav from './components/Nav';

function index() {
	const { auth } = usePage().props; // Buscar o user autenticado para verificar se está ou não logado, e se não estiver é retornado null
	const [searchJob, setSearchJob] = useState(''); // Conteúdo da barra de pesquisa de trabalho
	const [searchCity, setSearchCity] = useState(''); // Conteúdo da barra de pesquisa da cidade
	
	function search(e) {
		// Verificar quais pesquisas foram mesmo efetuadas para configurar certo o link e fazer a pesquisa correta
		if(e.key === 'Enter') {
			if(searchJob && searchCity) {
				router.get(`/jobs?name=${searchJob}&location=${searchCity}`);
			} else if(searchJob) {
				router.get(`/jobs?name=${searchJob}`);
			} else if(searchCity) {
				router.get(`/jobs?location=${searchCity}`);
			} else {
				router.get(`/jobs`);
			}
		}
	}
	
	return (
		<>
			<header>
				{/* Menu, que só vai conter os botões da direita */}
				<Nav auth={auth} />
			</header>
			{/* Card da pesquisa */}
			<main className="h-screen p-20 flex justify-center items-center">
				<section className="card max-w-150 md:w-150 max-h-100 h-100 p-20 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between items-center">
					{/* Título do Card */}
					<h1 className="text-4xl font-bold">Find a Job</h1>
					<div className="flex flex-col md:flex-row">
						<div className="relative">
							{/* Caixa de textoo de pesquisar trabalho */}
							<input type="text" placeholder="Job" value={searchJob} onChange={(e) => setSearchJob(e.target.value)} onKeyDown={(e) => search(e)} className="max-w-50 w-50 h-10 placeholder-gray-700 p-2 pl-10 md:shadow-xl border-2 md:border-r-0 rounded-lg rounded-b-none md:rounded-lg md:rounded-r-none" />
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-2 left-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
							</svg>
						</div>
						<div className="relative">
							{/* Caixa de textoo de pesquisar localização */}
							<input type="text" placeholder="City" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} onKeyDown={(e) => search(e)} className="max-w-50 w-50 h-10 placeholder-gray-700 p-2 pl-10 md:pl-2 md:pr-10 shadow-xl border-2 border-t-0 md:border-t-2 rounded-lg rounded-t-none md:rounded-lg md:rounded-l-none" />
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-2 left-1 md:left-43">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
							</svg>
						</div>
					</div>
					<div></div> {/* Div para fazer o espaço do justify between, para as caixas de texto não ir para o baixo mas sim ficar no centro */}
				</section>
			</main>
		</>
	);
}

export default index;
