// Component do PopUp de eliminar o job

import { router } from '@inertiajs/react';

function PopUp(props) {
	function destroy(e) {
		e.preventDefault();
		router.delete(`/job_delete/${props.id}`);
		props.setVisible(false);
	}
	
	return (
		<div className="fixed z-2 bg-black/30 w-screen h-screen flex justify-center items-center">
			<div className="w-100 h-80 bg-white p-10 rounded-lg flex flex-col justify-between items-center">
				<div></div> {/* Div para simular o espaço para o justify between para a mensagem não ficar colada ao topo */}
				<h1 className="text-3xl text-center">Are you sure do you want delete this job?</h1>
				<div className="self-end space-x-5">
					{/* Botão de fechar o PopUp */}
					<button onClick={() => props.setVisible(false)} className="text-red-500 cursor-pointer">Cancel</button>
					{/* Botão de eliminar o job */}
					<button onClick={(e) => destroy(e)} className="max-w-30 w-30 h-10 bg-red-500 text-white rounded-lg cursor-pointer">Delete</button>
				</div>
			</div>
		</div>
	);
}

export default PopUp;
