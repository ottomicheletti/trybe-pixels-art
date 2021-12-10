window.onload = function () {
  // Requisito 6
  function blackStartsSelected() {
    let black = document.querySelector('#color1');
    black.className = 'color selected';
  }

  blackStartsSelected();

  // Requisito 12 - Randomiza cores da paleta
  function randomColors() {
    const colors = document.querySelectorAll('.color');
    let numbers = [];
    for (let index = 0; index <= 8; index += 1) {
      numbers.push(Math.floor(Math.random() * 256));
    }

    let randomColors = {
      rgb1: '0, 0, 0',
      rgb2: numbers.slice(0, 3).join(', '),
      rgb3: numbers.slice(3, 6).join(', '),
      rgb4: numbers.slice(6, 9).join(', '),
    };

    colors[0].style.backgroundColor = `rgb(${randomColors.rgb1})`;
    colors[1].style.backgroundColor = `rgb(${randomColors.rgb2})`;
    colors[2].style.backgroundColor = `rgb(${randomColors.rgb3})`;
    colors[3].style.backgroundColor = `rgb(${randomColors.rgb4})`;
  }
  randomColors();
};

// Requisito 7 - Clicar na cor, seleciona para utilizar.
function selectColor() {
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const color3 = document.getElementById('color3');
  const color4 = document.getElementById('color4');

  color1.addEventListener('click', function () {
    color1.className = 'color selected';
    color2.className = 'color';
    color3.className = 'color';
    color4.className = 'color';
  });

  color2.addEventListener('click', function () {
    color2.className = 'color selected';
    color1.className = 'color';
    color3.className = 'color';
    color4.className = 'color';
  });

  color3.addEventListener('click', function () {
    color3.className = 'color selected';
    color1.className = 'color';
    color2.className = 'color';
    color4.className = 'color';
  });

  color4.addEventListener('click', function () {
    color4.className = 'color selected';
    color1.className = 'color';
    color2.className = 'color';
    color3.className = 'color';
  });
}

selectColor();

// Requisito 8 - Pinta o pixel com a cor escolhida
function paintPixels() {
  document.addEventListener('click', function (event) {
    const colorDiv = document.querySelector('.selected').getAttribute('style');

    if (event.target.classList.contains('pixel')) {
      event.target.style = colorDiv;
    }
    // console.log(colorDiv);
  });
}
paintPixels();

// Requisito 9 - Cria botão que reseta o quadro com a cor branca
function cleanMyCanvas() {
  let button = document.getElementById('clear-board');
  let pixels = document.querySelectorAll('.pixel');

  console.log(pixels);

  button.onclick = function clear() {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  };
}
cleanMyCanvas();

// Requisito 10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário
