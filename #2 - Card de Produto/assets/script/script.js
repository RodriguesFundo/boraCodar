var vectorImage = document.getElementById('vector');
var changeImg = document.getElementById('img');

const div = document.createElement('div');
div.innerHTML = 'X';
div.classList.add('x')
vectorImage.addEventListener('click', () => {
  changeImg.src = 'https://drive.google.com/file/d/1-T5EsqpZXz7TvNjcA6-yQBBj6rga0sQG/view';

  vectorImage.replaceWith(div);

  div.addEventListener('click', function() {
    changeImg.src = './assets/img/sofa.png';

    div.replaceWith(vectorImage);
  });
});
