window.onload = function () {
  let pallete = document.getElementsByClassName('color');
  let color1 = document.getElementById('color1');
  let color2 = document.getElementById('color2');
  let color3 = document.getElementById('color3');
  let color4 = document.getElementById('color4');

  color1.classList.add('selected');
  console.log(pallete);
  // Requisito 7 - Clicar na cor, seleciona para utilizar.
  // function colorPick() {
  //   let selected = 'selected';
  //   let empty = '';

  //   pallete.addEventListener('click', function (event) {
  //     event.target.classList.add = selected;
  //   });

  //   for (let index = 0; index < pallete.length; index += 1) {
  //     if (pallete[index].className === selected) {

  //     }
  //   }
  // }

  // colorPick();

  // Bônus - Randomiza cores

  let numbers = [];
  for (let index = 0; index <= 8; index += 1) {
    numbers.push(Math.ceil(Math.random() * 255));
  }

  let randomColors = {
    rgb1: '0, 0, 0',
    rgb2: numbers.slice(0, 3).join(', '),
    rgb3: numbers.slice(3, 6).join(', '),
    rgb4: numbers.slice(6, 9).join(', '),
  };

  document.getElementById('color1').style.backgroundColor =
    'rgb(' + randomColors.rgb1 + ')';
  document.getElementById('color2').style.backgroundColor =
    'rgb(' + randomColors.rgb2 + ')';
  document.getElementById('color3').style.backgroundColor =
    'rgb(' + randomColors.rgb3 + ')';
  document.getElementById('color4').style.backgroundColor =
    'rgb(' + randomColors.rgb4 + ')';
};
