import { useForm, usePage } from '@inertiajs/react';
import Nav from '../components/Nav';

function register() {
	const { data, setData, post, errors } = useForm({name: '', email: '', password: '', password_confirmation: ''});
	const { nameSearched, locationSearched } = usePage().props; // Preencher já por default nas caixa de texto, as pequisas efetuadas
	
	function register(e) {
		e.preventDefault();
		post('/register');
	}
	
	return (
		<>
			<header className="flex justify-between">
				{/* Seta de voltar para a página principal */}
				<button onClick={() => window.location.href='/'} className="fixed z-1 m-3 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
						<path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
					</svg>
				</button>
				{/* Menu, que não vai ter barras de pesquisa, e sempre será os botões sign in e log in */}
				<Nav job={nameSearched ?? null} city={locationSearched ?? null} />
			</header>
			<main className="min-h-screen p-20 flex justify-center items-center">
				<section className="card max-w-150 md:w-150 p-20 rounded-lg shadow-md hover:shadow-lg">
					{/* Formulário de registar */}
					<form onSubmit={(e) => register(e)} className="flex flex-col space-y-5">
						{/* Título do card */}
						<h1 className="text-4xl text-center font-bold">Sign Up</h1>
						<div>
							{/* Título da caixa de texto do nome */}							
							<label htmlFor="name" className="text-xl font-medium">Name:</label>
							{/* Caixa de texto do nome */}
							<input type="text" name="name" placeholder="Your name..." value={data.name} onChange={(e) => setData('name', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de validação do nome */}
							{ errors.name && (
								<p className="text-red-500">{errors.name}</p>
							)}
						</div>
						<div>
							{/* Título da caixa de texto do email */}
							<label htmlFor="email" className="text-xl font-medium">Email:</label>
							{/* Caixa de texto do email */}
							<input type="text" name="email" placeholder="Your email..." value={data.email} onChange={(e) => setData('email', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de validação do email */}
							{ errors.email && (
								<p className="text-red-500">{errors.email}</p>
							)}
						</div>
						<div>
							{/* Título da caixa de texto da password */}
							<label htmlFor="password" className="text-xl font-medium">Password:</label>
							{/* Caixa de texto da password */}
							<input type="password" name="password" placeholder="Your password..." value={data.password} onChange={(e) => setData('password', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de validação da password */}
							{ errors.password && (
								<p className="text-red-500">{errors.password}</p>
							)}
						</div>
						<div>
							{/* Título da caixa de texto de confirmar a password */}
							<label htmlFor="password_confirmation" className="text-xl font-medium">Confirm password:</label>
							{/* Caixa de texto de confirmar a password */}
							<input type="password" name="password_confirmation" placeholder="Confirm your password..." value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
						</div>
						{/* Botão de registar user */}
						<button type="submit" className="w-30 h-10 bg-[#2527A7] text-white mt-5 m-auto rounded-md hover:shadow-md cursor-pointer">Sign Up</button>
					</form>
				</section>
			</main>
		</>
	);
}

export default register;
