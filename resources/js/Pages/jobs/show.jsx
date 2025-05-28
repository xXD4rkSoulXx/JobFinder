// Página de ver os jobs do user autenticado

import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import Nav from '../components/Nav';
import JobDetails from '../components/JobDetails';
import PopUp from '../components/PopUp';

function jobs_show() {
	// Verificar se mostrou ou não o PopUp
	const [visible, setVisible] = useState(false);
	// O auth vai buscar o user autenticado para verificar se está ou não logado, e se não estiver é retornado null
	const { jobs, auth } = usePage().props;
	// Variável que vai receber o user clicado para saber qual editar
	const [id, setId] = useState(jobs[0]?.id);
	
	return (
		<>
			{/* PopUp de eliminar job */}
			{ visible && (
				<PopUp setVisible={setVisible} id={id} />
			)}
			<header className="flex justify-between">
				{/* Seta de voltar para a página principal */}
				<button onClick={() => window.location.href='/'} className="fixed z-1 m-3 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
						<path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
					</svg>
				</button>
				{/* Menu, que só vai conter os botões da direita */}
				<Nav auth={auth} />
			</header>
			<main className="min-h-screen flex flex-col items-center space-y-10 pt-30 px-6">
				{ jobs.length !== 0 ? (
					<>
						{/* Título do card */}
						<h1 className="text-5xl font-bold">Your jobs</h1>
						<section className="flex flex-col items-center space-y-3">
							{/* Listar todos os jobs do user autenticado, o userJobs vai indicar para não meter fixed */}
							{ jobs.map((job, index) => (
								<JobDetails userJobs={true} setVisible={setVisible} setId={setId} key={job.id} job={job} />
							))}
						</section>
					</>
				) : (
					<>
						{/* Informa se o user autenticado não tem jobs */}
						<h1 className="text-5xl mt-50 font-bold">You don't have jobs.</h1>
					</>
				)}
			</main>
		</>
	);
}

export default jobs_show;
