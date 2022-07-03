function confirmar()
{
	Swal.fire({
		title: '¿Seguro que desea ingresar:?',
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#6c757d',
		confirmButtonText: 'Confirmar'
	}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			window.location='index.html';
		}
	})
}

function agregar()
{
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Producto agregado!',
		showConfirmButton: false,
		timer: 1500
	})
}

function registrar()
{
	Swal.fire('El pedido se ha registrado exitosamente!!')
}
function registrarCliente()
{
	Swal.fire(
  'Usuario registrado con exio!',
  'success'
)
}