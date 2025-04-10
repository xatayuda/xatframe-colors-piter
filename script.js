    const colores = ['#DA2E2E', '#C9665F', '#C96042', '#C9974B', '#BDBB40', '#84AD2A', 
        '#448F2E', '#2D9C7A', '#4086B8', '#452EB8', '#A94EB8', '#B84E8C', '#22202B'];
    let indiceColor = 0;

    document.getElementById('colorButton').addEventListener('click', () => {
    indiceColor = (indiceColor + 1) % colores.length;
    document.body.style.backgroundColor = colores[indiceColor];
    });
