// Agregar una nueva fila a la tabla
function agregarFila() {
    const tabla = document.getElementById('tablaEstudiantes').getElementsByTagName('tbody')[0];
    const numFilas = tabla.rows.length + 1;
    const nuevaFila = tabla.insertRow();

    nuevaFila.innerHTML = `
        <td>${numFilas}</td>
        <td><input type="text" placeholder="EST-${String(numFilas).padStart(3, '0')}" data-field="codigo"></td>
        <td><input type="text" placeholder="Nombre completo del estudiante" data-field="nombre"></td>
        <td><input type="text" placeholder="Ej: 3ro Básica A" data-field="curso"></td>
        <td><input type="text" placeholder="Nombre del profesor" data-field="profesor"></td>
        <td><input type="email" placeholder="profesor@ejemplo.com" data-field="correo"></td>
        <td><input type="tel" placeholder="809-XXX-XXXX" data-field="telefono"></td>
        <td><input type="text" placeholder="Código región" data-field="ceges"></td>
        <td><button class="btn-delete" onclick="eliminarFila(this)">🗑️</button></td>
    `;
    
    actualizarEstadisticas();
}

// Eliminar una fila específica
function eliminarFila(boton) {
    if (confirm('¿Está seguro de que desea eliminar este estudiante?')) {
        const fila = boton.parentNode.parentNode;
        fila.parentNode.removeChild(fila);
        renumerarFilas();
        actualizarEstadisticas();
    }
}

// Renumerar las filas después de eliminar
function renumerarFilas() {
    const filas = document.querySelectorAll('#tablaEstudiantes tbody tr');
    filas.forEach((fila, index) => {
        fila.cells[0].textContent = index + 1;
    });
}

// Limpiar toda la tabla
function limpiarTabla() {
    if (confirm('¿Está seguro de que desea limpiar todos los datos?')) {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        actualizarEstadisticas();
    }
}

// Obtener todos los datos de la tabla
function obtenerDatos() {
    const datos = [];
    const filas = document.querySelectorAll('#tablaEstudiantes tbody tr');
    
    filas.forEach((fila, index) => {
        const inputs = fila.querySelectorAll('input');
        datos.push({
            numero: index + 1,
            codigoEstudiante: inputs[0].value.trim(),
            nombreEstudiante: inputs[1].value.trim(),
            cursoAsignado: inputs[2].value.trim(),
            nombreProfesor: inputs[3].value.trim(),
            correoProfesor: inputs[4].value.trim(),
            telefonoPadre: inputs[5].value.trim(),
            codigoCeges: inputs[6].value.trim()
        });
    });

    return datos;
}

// Guardar datos en localStorage
function guardarDatos() {
    const datos = obtenerDatos();
    
    // Guardar en localStorage
    localStorage.setItem('datosEstudiantes', JSON.stringify(datos));
    
    console.log('Datos guardados:', datos);
    
    let mensaje = '✅ Datos guardados exitosamente en el navegador!\n\n';
    mensaje += `Total de registros: ${datos.length}\n`;
    mensaje += `Registros completos: ${contarCompletos()}\n`;
    mensaje += `Registros pendientes: ${datos.length - contarCompletos()}\n\n`;
    mensaje += 'Los datos se han guardado localmente y en la consola del navegador.';
    
    alert(mensaje);
    actualizarEstadisticas();
}

// Exportar datos como HTML
function exportarHTML() {
    const datos = obtenerDatos();
    
    if (datos.length === 0) {
        alert('No hay datos para exportar');
        return;
    }

    let html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos Estudiantes CEGES - ${new Date().toLocaleDateString()}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background: #f5f5f5;
        }
        .header {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px;
            margin-bottom: 30px;
        }
        h1 { margin: 0 0 10px 0; }
        .fecha { opacity: 0.9; font-size: 0.9em; }
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        th {
            background: #1e3c72;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        tr:hover {
            background: #f0f5ff;
        }
        .stats {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎓 Asistoya CEGES</h1>
        <p class="fecha">Registro de Estudiantes UAPA - Exportado el ${new Date().toLocaleString()}</p>
    </div>
    
    <div class="stats">
        <h3>Estadísticas</h3>
        <p><strong>Total de Estudiantes:</strong> ${datos.length}</p>
        <p><strong>Registros Completos:</strong> ${contarCompletos()}</p>
        <p><strong>Registros Pendientes:</strong> ${datos.length - contarCompletos()}</p>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Código Estudiante</th>
                <th>Nombre del Estudiante</th>
                <th>Curso Asignado</th>
                <th>Nombre del Profesor</th>
                <th>Correo del Profesor</th>
                <th>Teléfono del Padre</th>
                <th>Código de CEGES</th>
            </tr>
        </thead>
        <tbody>`;

    datos.forEach(estudiante => {
        html += `
            <tr>
                <td>${estudiante.numero}</td>
                <td>${estudiante.codigoEstudiante || '-'}</td>
                <td>${estudiante.nombreEstudiante || '-'}</td>
                <td>${estudiante.cursoAsignado || '-'}</td>
                <td>${estudiante.nombreProfesor || '-'}</td>
                <td>${estudiante.correoProfesor || '-'}</td>
                <td>${estudiante.telefonoPadre || '-'}</td>
                <td>${estudiante.codigoCeges || '-'}</td>
            </tr>`;
    });

    html += `
        </tbody>
    </table>
</body>
</html>`;

    descargarArchivo(html, `estudiantes_ceges_${new Date().toISOString().split('T')[0]}.html`, 'text/html');
    alert('✅ Archivo HTML exportado exitosamente!');
}

// Función auxiliar para descargar archivos
function descargarArchivo(contenido, nombreArchivo, tipoMime) {
    const blob = new Blob([contenido], { type: tipoMime });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Contar registros completos
function contarCompletos() {
    const filas = document.querySelectorAll('#tablaEstudiantes tbody tr');
    let completos = 0;
    
    filas.forEach(fila => {
        const inputs = fila.querySelectorAll('input');
        let llenos = 0;
        inputs.forEach(input => {
            if (input.value.trim() !== '') llenos++;
        });
        if (llenos === inputs.length) completos++;
    });
    
    return completos;
}

// Actualizar estadísticas
function actualizarEstadisticas() {
    const filas = document.querySelectorAll('#tablaEstudiantes tbody tr');
    const completos = contarCompletos();

    document.getElementById('totalEstudiantes').textContent = filas.length;
    document.getElementById('registrosCompletos').textContent = completos;
    document.getElementById('pendientes').textContent = filas.length - completos;
}

// Cargar datos guardados al iniciar
function cargarDatosGuardados() {
    const datosGuardados = localStorage.getItem('datosEstudiantes');
    
    if (datosGuardados) {
        try {
            const datos = JSON.parse(datosGuardados);
            
            if (confirm('Se encontraron datos guardados previamente. ¿Desea cargarlos?')) {
                const tbody = document.getElementById('tablaEstudiantes').getElementsByTagName('tbody')[0];
                tbody.innerHTML = '';

                datos.forEach((estudiante, index) => {
                    const fila = tbody.insertRow();
                    fila.innerHTML = `
                        <td>${index + 1}</td>
                        <td><input type="text" value="${estudiante.codigoEstudiante || ''}" data-field="codigo"></td>
                        <td><input type="text" value="${estudiante.nombreEstudiante || ''}" data-field="nombre"></td>
                        <td><input type="text" value="${estudiante.cursoAsignado || ''}" data-field="curso"></td>
                        <td><input type="text" value="${estudiante.nombreProfesor || ''}" data-field="profesor"></td>
                        <td><input type="email" value="${estudiante.correoProfesor || ''}" data-field="correo"></td>
                        <td><input type="tel" value="${estudiante.telefonoPadre || ''}" data-field="telefono"></td>
                        <td><input type="text" value="${estudiante.codigoCeges || ''}" data-field="ceges"></td>
                        <td><button class="btn-delete" onclick="eliminarFila(this)">🗑️</button></td>
                    `;
                });

                actualizarEstadisticas();
            }
        } catch (error) {
            console.error('Error al cargar datos guardados:', error);
        }
    }
}

// Actualizar estadísticas cuando cambie algún input
document.addEventListener('input', actualizarEstadisticas);

// Inicializar al cargar la página
window.addEventListener('load', function() {
    actualizarEstadisticas();
    cargarDatosGuardados();
});

// Auto-guardar cada 2 minutos
setInterval(() => {
    const datos = obtenerDatos();
    if (datos.some(d => d.codigoEstudiante || d.nombreEstudiante)) {
        localStorage.setItem('datosEstudiantes', JSON.stringify(datos));
        console.log('Auto-guardado realizado:', new Date().toLocaleTimeString());
    }
}, 120000);
