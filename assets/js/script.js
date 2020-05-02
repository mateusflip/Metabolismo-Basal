const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); //evento que impede a página de recarregar

  const genero = getSelectedValue('gender');
  const idade = getselectorvalue('age');
  const peso = getselectorvalue('weight');
  const altura = getselectorvalue('height');
  const nivel_atividade = getSelectedValue('activity_level');

  const calc = (
    genero === 'female'
    ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade))
    : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade))
  )

    const manter = Math.round(calc * nivel_atividade);
    const perder = manter - 450
    const ganhar = manter + 450

    const layout = `   <h2>Aqui está o resultado:</h2>

      <div class="result-content">
        <ul>
          <li>
            Seu metabolismo basal é de <strong> ${calc} </strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média <strong>${manter}</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média <strong>${perder}</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média <strong>${ganhar}</strong>.
          </li>
        </ul>
      </div>
    </div>`


    const resultado = document.getElementById('resultado')

    resultado.innerHTML = layout;
}


function getSelectedValue(id){
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getselectorvalue(id){
  return Number(document.getElementById(id).value); // Já converte de String para number logo que pegamos o número

}
