// Component do menu

import { useState } from 'react';
import { router } from '@inertiajs/react';

function Nav(props) {
	const [searchJob, setSearchJob] = useState(props.job); // Conteúdo da barra de pesquisa de trabalho
	const [searchCity, setSearchCity] = useState(props.city); // Conteúdo da barra de pesquisa da cidade
	
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
	
	function logout(e) {
		e.preventDefault();
		router.delete('/logout');
	}
	
	return (
		<nav className={`fixed w-full h-20 ${ props.search && 'bg-[#12BFDE]' } p-5`}>
			{/* Se tiver barra de pesquisa, o fundo muda de cor */}
			{/* Se tiver barra de pesquisa, mete para os itens estar a justify between, se não mete os botões na direita */}
			<ul className={`flex ${ props.search ? 'justify-between' : 'justify-end' }`}>
				{/* Menu com barra de pesquisa */}
				{ props.search && (
					<>
						<li className="w-80"></li> {/* Div da esquerda para fazer espaço para o justify between para a barra de pesquisa não ficar na esquerda */}
						<li className="flex flex-row">
							{/* Caixa de texto de pesquisar o job */}
							<div className="relative">
								<input type="text" placeholder="Job" value={searchJob ?? ''} onChange={(e) => setSearchJob(e.target.value)} onKeyDown={(e) => search(e)} className="max-w-50 w-50 h-10 bg-white placeholder-gray-700 p-2 pl-10 md:shadow-xl border-2 border-r-0 rounded-lg rounded-r-none" />
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-2 left-1">
									<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
								</svg>
							</div>
							{/* Caixa de texto de pesquisar a cidade */}
							<div className="relative">
								<input type="text" placeholder="City" value={searchCity ?? ''} onChange={(e) => setSearchCity(e.target.value)} onKeyDown={(e) => search(e)} className="max-w-50 w-50 h-10 bg-white placeholder-gray-700 p-2 pr-10 shadow-xl border-2 border-t-2 rounded-lg rounded-l-none" />
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-2 left-43">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
								</svg>
							</div>
						</li>
					</>
				)}
				{/* Menu sem a barra de pesquisa */}
				{/* Menu se estiver autenticado */}
				{ props.auth ? (
					<li className="flex space-x-5">
						<div className="space-x-2">
							{/* Botão de criar o job */}
							<a href="/job_create">
								<button className="max-w-30 w-30 h-10 bg-[#2527A7] text-white font-bold rounded-md hover:shadow-md cursor-pointer">Post a Job</button>
							</a>
							{/* Botão para ver os jobs criados */}
							<a href="/jobs_show">
								<button className="max-w-30 w-30 h-10 bg-white text-[#2527A7] font-bold rounded-md hover:shadow-md cursor-pointer">Your Jobs</button>
							</a>
						</div>
						{/* Botão de logout */}
						<button onClick={(e) => logout(e)}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-red-900 cursor-pointer">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
							</svg>
						</button>
					</li>
				) : (
					<li className="space-x-2">
						{/* Menu se não estiver autenticado */}
						{/* Botão de Sign In */}
						<a href="/register">
							<button className="max-w-30 w-30 h-10 bg-[#2527A7] text-white font-bold rounded-md hover:shadow-md cursor-pointer">Sign Up</button>
						</a>
						{/* Botão de Log In */}
						<a href="/login">
							<button className="max-w-30 w-30 h-10 bg-white text-[#2527A7] font-bold rounded-md hover:shadow-md cursor-pointer">Log In</button>
						</a>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Nav;
