// Cargar el archivo Excel con SheetJS
function cargarExcel(event) {
    const archivo = event.target.files[0];
    const lector = new FileReader();

    lector.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Aquí puedes procesar los datos del archivo Excel
        // Por ejemplo, almacenarlos en una variable global para su posterior consulta
    };

    lector.readAsArrayBuffer(archivo);
}

// Función para consultar la puerta
function consultarPuerta() {
    const idLlave = $('#llaveInput').val();

    // Aquí puedes implementar la lógica de búsqueda en los datos del Excel
    // y mostrar el resultado en el elemento con id 'resultado'
}

// Evento de cambio de archivo Excel
$('#archivoInput').on('change', cargarExcel);
