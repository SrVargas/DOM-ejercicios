document.getElementById('addTextBtn').addEventListener('click', () => {
    // Aquí debes escribir el código para agregar texto al div

    const texto =document.getElementById('textContainer')

    texto.innerText='Texto'


  });
  
  document.getElementById('removeTextBtn').addEventListener('click', () => {
    // Aquí debes escribir el código para eliminar texto del div


    
    const texto =document.getElementById('textContainer')

    texto.innerText=''

  });
  