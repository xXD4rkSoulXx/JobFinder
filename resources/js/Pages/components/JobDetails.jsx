// Component do card de todos os detalhes

function JobDetails(props) {
	function openDelete() {
		props.setVisible(true);
		props.setId(props.job.id);
	}
	
	function openContact() {
		props.setVisible(true);
	}
	
	return (
		<article className={`details ${ !props.userJobs && 'fixed top-30 right-[calc(50vw-500px)]' } w-117 max-h-[95vh] pt-8 border-2 border-gray-500 rounded-lg hover:shadow-md overflow-auto`}>
			{/* O userJobs, é para verificar qual página estou, se é de pesquisa de jobs que caso seja mete fixed, ou se é a de listar os jobs do user autenticado que nesse caso já não é fixed */}
			<div className="space-y-7 border-gray-500 border-b-1 p-8 flex flex-col items-center">
				{/* Título do job */}
				<h1 className="title text-3xl text-center font-bold">{props.job.name}</h1>
				<div className="flex space-x-3">
					{/* Nome da empresa */}
					<p className="text-md text-[#595959] font-medium cursor-pointer">
						{/* Simular o link da empresa */}
						<a href={`https://www.${props.job.enterprise}.com`}>{props.job.enterprise}</a>
					</p>
					<p>|</p>
					{/* Localização da empresa */}
					<p className="text-md text-[#595959] font-medium">{props.job.location}</p>
					<p>|</p>
					{/* Full-Time ou Part-Time */}
					<p className="text-md text-[#595959] font-medium">{props.job.time}</p>
					<p>|</p>
					{/* Salário do trabalho */}
					<p className="text-md text-[#595959] font-medium">{props.job.salary}€</p>
				</div>
				{/* Se for os jobs do user autenticado, vai aparecer os 3 botões, editar, ver contactos e eliminar */}
				{ props.userJobs ? (
					<div className="flex space-x-3">
						{/* Botão de editar o job */}
						<a href={`/job_edit/${props.job.id}`}>
							<button className="max-w-30 w-30 h-10 bg-[#2527A7] text-white font-bold rounded-md hover:shadow-md cursor-pointer">Edit Job</button>
						</a>
						{/* Botão de ver quem contactou para o job */}
						<a href={`/job/${props.job.id}/contacts`}>
							<button className="max-w-30 w-30 h-10 bg-white text-[#2527A7] font-bold rounded-md hover:shadow-md cursor-pointer">See contacts</button>
						</a>
						{/* Botão de abrir o PopUp para eliminar o job */}
						<button onClick={() => openDelete()} className="max-w-30 w-30 h-10 bg-red-500 text-white font-bold rounded-md hover:shadow-md cursor-pointer">Delete Job</button>
					</div>
				) : (
					// Botão de abrir o PopUp para contactar sobre o job
					<button onClick={() => openContact()} className="w-48 h-10 bg-[#2527A7] text-white rounded-md hover:shadow-md cursor-pointer">Contacte-nos</button>
				)}
			</div>
			<div className="space-y-2 border-gray-500 p-8">
				<h2 className="text-lg font-bold">Details of Job</h2>
				{/* Detalhes do job */}
				<p className="text-md text-[#595959] font-medium">{props.job.description}</p>
			</div>
		</article>
	);
}

export default JobDetails;
