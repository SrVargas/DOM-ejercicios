document.getElementById('addClassBtn').addEventListener('click', () => {
  // Aquí debes escribir el código para agregar la clase highlight al div

  const fondo = document.getElementById('classContainer')

  fondo.classList.add('highlight')

});

document.getElementById('removeClassBtn').addEventListener('click', () => {
  // Aquí debes escribir el código para quitar la clase highlight del div

  const fondo = document.getElementById('classContainer');
  fondo.classList.remove('highlight');

  if (fondo.classList.length === 0) {
    fondo.removeAttribute('class'); // Eliminar el atributo class si no hay clases
  }
});
