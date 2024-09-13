document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    let cedula = document.getElementById('cedula').value;
    let apellidos = document.getElementById('apellidos').value;
    let nombres = document.getElementById('nombres').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;
    let ciudad = document.getElementById('ciudad').value;

    // Mostrar un mensaje de éxito
    let message = `Datos del posible spiderman:<br>
                   Cédula: ${cedula}<br>
                   Apellidos: ${apellidos}<br>
                   Nombres: ${nombres}<br>
                   Dirección: ${direccion}<br>
                   Teléfono: ${telefono}<br>
                   Correo: ${correo}<br>
                   Ciudad: ${ciudad}`;

    document.getElementById('message').innerHTML = message;
});
