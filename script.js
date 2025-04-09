    const colores = ['#DA2E2E', '#C9665F', '#C96042', '#C9974B', '#BDBB40', '#84AD2A', 
        '#448F2E', '#2D9C7A', '#4086B8', '#452EB8', '#A94EB8', '#B84E8C', '#22202B'];
    let indiceColor = 0;

    const colorGuardado = localStorage.getItem('colorFondo');
    if (colorGuardado && colores.includes(colorGuardado)) {
      document.body.style.backgroundColor = colorGuardado;
      indiceColor = colores.indexOf(colorGuardado);
    }
    document.getElementById('colorButton').addEventListener('click', () => {
      indiceColor = (indiceColor + 1) % colores.length;
      const nuevoColor = colores[indiceColor];
      document.body.style.backgroundColor = nuevoColor;
      localStorage.setItem('colorFondo', nuevoColor);
    });
