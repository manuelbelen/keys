let datosExcel;

function cargarExcel(event) {
    const archivo = event.target.files[0];
    const lector = new FileReader();

    lector.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const primeraHoja = workbook.Sheets[workbook.SheetNames[0]];
        datosExcel = XLSX.utils.sheet_to_json(primeraHoja, { header: 'A' });

        console.log(datosExcel);
    };

    lector.readAsArrayBuffer(archivo);
}

function consultarPuerta() {
    const idLlave = $('#llaveInput').val();

    const resultado = datosExcel.find(row => row.ID === idLlave);

    if (resultado) {
        $('#resultado').text(`La puerta correspondiente al ID ${idLlave} es ${resultado.Puerta}`);
    } else {
        $('#resultado').text(`No se encontró información para el ID ${idLlave}`);
    }
}
