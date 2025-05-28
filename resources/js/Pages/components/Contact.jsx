// Component do PopUp para contactar o job específico

import { useForm } from '@inertiajs/react';

function Contact(props) {
	const { data, setData, post, errors } = useForm({email: '', phone: '', message: '', works_id: props.id});
	
	function create(e) {
		e.preventDefault();
		post('/contact', {
			preserveScroll: true,
			onSuccess: () => {
				props.setVisible(false);
			}
		});
	}
	
	return (
		<div className="fixed z-2 bg-black/30 w-screen h-screen flex justify-center items-center">
			<div className="max-w-200 w-200 bg-white p-10 rounded-lg">
				<form onSubmit={(e) => create(e)} className="flex flex-col justify-between items-center">
					{/* Título do PopUp */}
					<h1 className="text-3xl text-center">Contact</h1>
					<div className="space-y-5">
						<div>
							{/* Título o email */}
							<label htmlFor="email" className="text-xl font-medium">Email:</label>
							{/* Caixa de texto do email */}
							<input type="text" name="email" placeholder="Your email..." value={data.email} onChange={(e) => setData('email', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro de email */}
							{ errors.email && (
								<p className="text-red-500">{errors.email}</p>
							)}
						</div>
						<div>
							{/* Título o número de telemóvel */}
							<label htmlFor="phone" className="text-xl font-medium">Phone Number:</label>
							{/* Caixa de texto do email */}
							<input type="text" name="phone" placeholder="Your phone number..." value={data.phone} onChange={(e) => setData('phone', e.target.value)} className="max-w-full w-full h-10 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg" />
							{/* Zona de erro do número de telemóvel */}
							{ errors.phone && (
								<p className="text-red-500">{errors.phone}</p>
							)}
						</div>
						<div>
							{/* Título dos detalhes */}
							<label htmlFor="message" className="text-xl font-medium">Why do you want this job? Speak a lot about you</label>
							{/* TextArea dos detalhes */}
							<textarea name="message" placeholder="Details..." value={data.message} onChange={(e) => setData('message', e.target.value)} className="max-w-full w-full h-50 placeholder-gray-700 p-2 mt-1 shadow-xl border-2 rounded-lg resize-none"></textarea>
							{/* Zona de erro da descrição */}
							{ errors.message && (
								<p className="text-red-500">{errors.message}</p>
							)}
						</div>
					</div>
					<div className="self-end space-x-5 mt-5 mr-10">
						{/* Botão de fechar o PopUp */}
						<button onClick={() => props.setVisible(false)} className="text-red-500 cursor-pointer">Cancel</button>
						{/* Botão de contactar */}
						<button type="submit" className="max-w-30 w-30 h-10 bg-[#2527A7] text-white rounded-lg cursor-pointer">Contact</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
