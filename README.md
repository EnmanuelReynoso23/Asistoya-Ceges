# Asistoya CEGES - Sistema de Registro de Estudiantes UAPA

Sistema web completo para la gestión y registro de estudiantes del programa CEGES de la UAPA.

## Características

### Funcionalidades Principales

- **Registro de Estudiantes**: Formulario intuitivo con campos para toda la información necesaria
- **Gestión Dinámica**: Agregar, editar y eliminar estudiantes fácilmente
- **Estadísticas en Tiempo Real**: Visualización de registros completos y pendientes
- **Auto-guardado**: Los datos se guardan automáticamente cada 2 minutos
- **Diseño Responsive**: Compatible con dispositivos móviles y tablets

### Exportación de Datos

El sistema soporta múltiples formatos de exportación:

1. **HTML**: Genera un documento HTML completo con todos los datos formateados
2. **JSON**: Exporta los datos en formato JSON para integración con otros sistemas
3. **CSV/Excel**: Archivo compatible con Microsoft Excel y hojas de cálculo

### Importación de Datos

- Importa datos desde archivos JSON previamente exportados
- Validación automática del formato de archivo
- Recuperación de datos guardados en el navegador

## Diseño

- **Colores Azules Elegantes**: Paleta profesional con tonos azules (#1e3c72, #2a5298, #3b6cb5)
- **Interfaz Moderna**: Diseño limpio con gradientes y sombras suaves
- **Animaciones Fluidas**: Transiciones suaves para mejorar la experiencia del usuario
- **Tipografía Clara**: Fuente Segoe UI para máxima legibilidad

## Campos de Información

Para cada estudiante se registra:

- Código del Estudiante
- Nombre Completo del Estudiante
- Curso Asignado
- Nombre del Profesor
- Correo Electrónico del Profesor
- Teléfono del Padre/Tutor
- Código de CEGES

## Uso

### Iniciar el Sistema

1. Abra el archivo `index.html` en su navegador web preferido
2. El sistema cargará automáticamente los datos guardados (si existen)

### Agregar Estudiantes

1. Complete los campos en las filas existentes
2. Haga clic en "Agregar Estudiante" para añadir más filas
3. Los datos se auto-guardan cada 2 minutos

### Exportar Datos

1. Complete la información de los estudiantes
2. Haga clic en uno de los botones de exportación:
   - **Exportar HTML**: Para crear un documento web
   - **Exportar JSON**: Para integración con sistemas
   - **Exportar Excel**: Para análisis en hojas de cálculo

### Importar Datos

1. Haga clic en "Importar Datos"
2. Seleccione un archivo JSON previamente exportado
3. Los datos se cargarán automáticamente

## Almacenamiento

- **LocalStorage**: Los datos se guardan localmente en el navegador
- **Auto-guardado**: Cada 2 minutos automáticamente
- **Persistencia**: Los datos se mantienen entre sesiones

## Impresión

El sistema está optimizado para impresión:
- Los botones de acción se ocultan automáticamente
- Formato limpio y profesional
- Use Ctrl+P o Cmd+P para imprimir

## Compatibilidad

- Chrome/Edge (Recomendado)
- Firefox
- Safari
- Opera
- Dispositivos móviles

## Archivos del Proyecto

```
CEGES/
│
├── index.html       # Página principal
├── styles.css       # Estilos y diseño
├── script.js        # Funcionalidad JavaScript
└── README.md        # Documentación
```

## Notas Técnicas

- No requiere instalación de software adicional
- Funciona completamente offline después de la primera carga
- Sin dependencias externas
- Código limpio y bien documentado

## Casos de Uso

1. **Registro Inicial**: Capture información de nuevos estudiantes
2. **Actualización**: Modifique datos existentes fácilmente
3. **Exportación**: Genere reportes en múltiples formatos
4. **Integración**: Use JSON para conectar con otros sistemas
5. **Respaldo**: Exporte datos regularmente como backup

## Seguridad y Privacidad

- Los datos se almacenan localmente en su navegador
- No se envía información a servidores externos
- Control total sobre sus datos
- Recomendado hacer backups regulares usando la exportación

## Soporte

Sistema desarrollado para CEGES UAPA - Sistema de Gestión Estudiantil

---

**© 2025 Asistoya CEGES - Sistema de Gestión Estudiantil UAPA**
