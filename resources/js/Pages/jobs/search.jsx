// Página de pesquisa dos jobs

import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import JobCards from '../components/JobCards';
import JobDetails from '../components/JobDetails';

function search() {
	// O nameSearched e o locationSeached é para preencher já por default nas caixa de texto, as pequisas efetuadas
	// O auth é para buscar o user autenticado para verificar se está ou não logado, e se não estiver é retornado null
	const { jobs, auth, nameSearched, locationSearched } = usePage().props;
	// Verificar qual job eu cliquei para configurar os detalhes certos
	const [id, setId] = useState(jobs[0]?.id);
	// Verificar se mostro ou não o PopUp
	const [visible, setVisible] = useState(false);
	
	return (
		<>		
			{/* PopUp de contactos */}
			{ visible && (
				<Contact setVisible={setVisible} id={id} />
			)}	
			<header>
				{/* Menu que vai ter a barra de pesquisa */}
				<Nav auth={auth} search={true} job={nameSearched ?? null} city={locationSearched ?? null} />
			</header>			
			<main className="min-h-screen flex justify-center space-x-50 pt-30 px-6">
				{ jobs.length !== 0 ? (
					<>
						<section className="flex flex-col items-center space-y-3">
							{/* Todos os jobs da pesquisa */}
							{ jobs.map((job, index) => (
								<JobCards id={id} setId={setId} key={job.id} job={job} />
							))}
						</section>
						<div></div> {/* Div para simular o espaço dos detalhes do job, já que originalmente os detalhes do job está fixed, o que faz sair do fluxo normal, então é necessário uma div invisível para substituir o fluxo e fazer o espaço normal */}
						<section className="flex flex-col space-y-3">
							{/* Detalhes do job clicado */}
							<JobDetails setVisible={setVisible} id={id} setId={setId} job={jobs.find((job) => job.id === id)} />
						</section>
					</>
				) : (
					<div className="flex justify-center items-center">
						{/* Se não tiver jobs ainda, ou se não foi encontrado nenhum job com a pesquisa, informa */}
						<h1 className="text-5xl mb-30 font-bold">Wasn't found any jobs with this search.</h1>
					</div>
				)}
			</main>
		</>
	);
}

export default search;
