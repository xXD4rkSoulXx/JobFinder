// Página de editar o job específico

import { useForm, usePage } from '@inertiajs/react';
import Nav from '../components/Nav';

function job_edit() {
	// O auth vai buscar o user autenticado para verificar se está ou não logado, e se não estiver é retornado null
	const { auth, job } = usePage().props;
	const { data, setData, put, errors } = useForm({name: job.name, enterprise: job.enterprise, location: job.location, time: job.time, salary: job.salary, description: job.description});
	
	function update(e) {
		e.preventDefault();
		put(`/job_edit/${job.id}`);
	}
	
	return (
		<>
			<header className="flex justify-between">
				{/* Seta de voltar para a página principal */}
				<button onClick={() => window.history.back()} className="fixed z-1 m-3 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
						<path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
					</svg>
				</button>
				{/* Menu, que só vai conter os botões da direita */}
				<Nav auth={auth} />
			</header>
			<main className="min-h-screen p-20 flex justify-center items-center">
				<section className="card max-w-150 md:w-150 p-20 rounded-lg shadow-md hover:shadow-lg">
					<form onSubmit={(e) => update(e)} className="flex flex-col space-y-5">
						{/* Titulo do card */}
						<h1 className="text-4xl text-center font-bold">Edit Job</h1>
						<div>
							{/* Título da caixa de texto do nome */}
							<label htmlFor="name" className="text-xl font-medium">Name:</label>
							{/* Caixa de texto do nome */}
							<input type="text" name="name" placeholder="The name of job..." value={data.name} onChange={(e) => setData('name', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de validação do nome */}
							{ errors.name && (
								<p className="text-red-500">{errors.name}</p>
							)}
						</div>
						<div>
							{/* Título da caixa de texto da empresa */}
							<label htmlFor="enterprise" className="text-xl font-medium">Enterprise:</label>
							{/* Caixa de texto da empresa */}
							<input type="text" name="enterprise" placeholder="The name of enterprise..." value={data.enterprise} onChange={(e) => setData('enterprise', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de validação da empresa */}
							{ errors.enterprise && (
								<p className="text-red-500">{errors.enterprise}</p>
							)}
						</div>
						<div>
							{/* Título da caixa de texto da localização */}
							<label htmlFor="location" className="text-xl font-medium">Location:</label>
							{/* Caixa de texto da localização */}
							<input type="text" name="location" placeholder="The location of enterprise..." value={data.location} onChange={(e) => setData('location', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de validação da localização */}
							{ errors.location && (
								<p className="text-red-500">{errors.location}</p>
							)}
						</div>
						<div>
							{/* Título do select se é Full-Time ou Part-Time */}
							<label htmlFor="time" className="text-xl font-medium">Time:</label>
							{/* Select de se é Full-Time ou Part-Time */}
							<select name="time" onChange={(e) => setData('time', e.target.value)} className="max-w-full w-full h-10 p-2 mt-1 shadow-xl border-2 rounded-lg">
								<option value="Full-Time">Full Time</option>
								<option value="Part-Time">Part Time</option>
							</select>
						</div>
						<div>
							{/* Título da caixa de texto do salário */}
							<label htmlFor="salary" className="text-xl font-medium">Salary:</label>
							{/* Caixa de texto do salário */}
							<input type="text" name="salary" placeholder="The salary of job..." value={data.salary} onChange={(e) => setData('salary', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de validação do salário */}
							{ errors.salary && (
								<p className="text-red-500">{errors.salary}</p>
							)}
						</div>
						<div>
							{/* Título da TextArea dos detalhes do job */}
							<label htmlFor="description" className="text-xl font-medium">Details of job:</label>
							{/* TextArea dos detalhes do job */}
							<textarea name="description" placeholder="More details about the job..." value={data.description} onChange={(e) => setData('description', e.target.value)} className="max-w-full w-full h-50 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg resize-none"></textarea>
							{/* Zona de erro de validação da descrição */}
							{ errors.description && (
								<p className="text-red-500">{errors.description}</p>
							)}
						</div>
						{/* Botão de editar um job */}
						<button type="submit" className="w-30 h-10 bg-[#2527A7] text-white mt-5 m-auto rounded-md hover:shadow-md cursor-pointer">Edit job</button>
					</form>
				</section>
			</main>
		</>
	);
}

export default job_edit;
