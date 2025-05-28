// Component de mostrar os contactos do job específico

function ContactsShow(props) {
	return (
		<article className="details w-117 max-h-[95vh] pt-8 border-2 border-gray-500 rounded-lg hover:shadow-md overflow-auto">
			<div className="space-y-2 border-gray-500 pt-8 pl-8">
				<h2 className="text-xl font-bold">Email:</h2>
				<p className="text-lg text-[#595959] font-medium">{props.email}</p>
			</div>
			<div className="space-y-2 border-gray-500 pt-8 pl-8">
				<h2 className="text-xl font-bold">Phone Number</h2>
				<p className="text-lg text-[#595959] font-medium">{props.phone}</p>
			</div>
			<div className="space-y-2 border-gray-500 p-8">
				<h2 className="text-xl font-bold">Additional Information</h2>
				<p className="text-lg text-[#595959] font-medium">{props.message}</p>
			</div>
		</article>
	);
}

export default ContactsShow;
