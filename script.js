// Exercicio 01
function createH1Title() {
  const h1Title = document.createElement('h1');
  h1Title.id = 'title';
  h1Title.innerText = 'Paleta de Cores';
  document.body.appendChild(h1Title);
}
createH1Title();
