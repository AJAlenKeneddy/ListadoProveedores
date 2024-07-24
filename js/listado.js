document.addEventListener('DOMContentLoaded', () => {
    
    fetch('https://gmingenieros.somee.com/api/Consultas/Obtener_Todos_Los_Proveedores', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const tablaBody = document.getElementById('tabla-body');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.ruc}</td>
                <td>${item.nombre}</td>
                <td>${item.ubigeo}</td>
                <td>${item.departamento}</td>
                <td>${item.provincia}</td>
                <td>${item.distrito}</td>
                <td>${item.direccion}</td>
                
            `;
            tablaBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al obtener los datos:', error));
});
