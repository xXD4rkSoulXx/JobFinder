// Página de ver os contactos do job específico

import { usePage } from '@inertiajs/react';
import Nav from '../components/Nav';
import ContactsShow from '../components/ContactsShow';

function contacts() {
	const { contacts, auth } = usePage().props; // O auth vai buscar o user autenticado para verificar se está ou não logado, e se não estiver é retornado null
	
	return (
		<>
			<header className="flex justify-between">
				{/* Seta de voltar para a página anterior */}
				<button onClick={() => window.location.href='/jobs_show'} className="fixed z-1 m-3 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
						<path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
					</svg>
				</button>
				{/* Menu, que não vai ter barras de pesquisa, e sempre será os botões sign in e log in */}
				<Nav auth={auth} />
			</header>
			<main className="min-h-screen flex flex-col items-center space-y-10 pt-30 px-6">
				{ contacts.length !== 0 ? (
					<>
						<h1 className="text-5xl font-bold">Contacts for this job</h1>
						<section className="space-y-3">
							{ contacts.map((contact) => (
								<ContactsShow key={contact.id} email={contact.email} phone={contact.phone} message={contact.message} />
							))}
						</section>
					</>
				) : (
					<div className="flex justify-center items-center">
						{/* Se o job não tem contactos ainda */}
						<h1 className="text-5xl mt-50 font-bold">This job doesn't have contacts yet!</h1>
					</div>
				)}
			</main>
		</>
	);
}

export default contacts;
