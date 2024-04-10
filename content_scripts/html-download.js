(() => {
    // Obtener el contenido HTML de document.documentElement.outerHTML
    var htmlContent = document.documentElement.outerHTML;

    // Crear un objeto Blob para almacenar el contenido HTML
    var blob = new Blob([htmlContent], { type: 'text/html' });

    // Crear un objeto URL a partir del Blob
    var url = URL.createObjectURL(blob);

    // Crear un enlace temporal
    var link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';

    // Simular un clic en el enlace para iniciar la descarga
    link.click();

    // Liberar el objeto URL creado para evitar fugas de memoria
    URL.revokeObjectURL(url);

  })();
  