// Component do card de todos os jobs

function JobCards(props) {
	return (
		<article onClick={() => props.setId(props.job.id)} className={`card job max-w-100 p-4 pt-8 ${(props.id === props.job.id) ? 'border-5 border-[#3E6FBD]' : 'border-2 border-gray-500'} rounded-lg hover:shadow-md space-y-3 cursor-pointer`}>
			{/* Descrição do nome do job */}
			<h1 className="title text-xl font-bold">{props.job.name}</h1>
			<div className="text-md font-medium">
				{/* Descrição do nome da empresa */}
				<h2>{props.job.enterprise}</h2>
				{/* Descrição da localização do trabalho */}
				<h2>{props.job.location}</h2>
			</div>
			{/* Descrição dos detalhes do job */}
			<p className="text-[#595959] pr-8 line-clamp-5">{props.job.description}</p>
		</article>
	);
}

export default JobCards;
