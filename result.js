const saved =
  JSON.parse(
    localStorage.getItem('selectedConstraints') || '[]'
  );

const resultTotal =
  document.getElementById('result-total');

const teamBox =
  document.getElementById('result-team');

const controlBox =
  document.getElementById('result-control');

const envBox =
  document.getElementById('result-env');

let totalScore = 0;

function getType(name){

  if(name.startsWith('팀:')){
    return 'team';
  }

  if(name.startsWith('조작:')){
    return 'control';
  }

  if(name.startsWith('환경:')){
    return 'env';
  }

  return 'etc';
}

function colorizeDesc(text){

  return text

    .replace(
      /방어불능/g,
      '<span class="defense-text">방어불능</span>'
    )

    .replace(
      /아츠부착/g,
      '<span class="arts-text">아츠부착</span>'
    )

    .replace(
      /([+-]?\d+%|[+-]?\d+초)/g,
      '<span class="yellow-text">$1</span>'
    );
}

function createResultCard(card){

  totalScore += card.pts;

  const el = document.createElement('div');

  el.className = 'result-card';

  el.innerHTML = `
    <div class="result-card-left">

      <div class="result-card-score">
        ${card.pts}★
      </div>

      <div class="result-card-icon">
        <img
          src="${card.icon}"
          alt="${card.name}"
          draggable="false"
        >
      </div>

    </div>

    <div class="result-card-content">

      <div class="result-card-name">
        ${card.name}
      </div>

      <div class="result-card-desc">
        ${colorizeDesc(
          card.desc || '설명이 없습니다.'
        )}
      </div>

    </div>
  `;

  const type = getType(card.name);

  if(type === 'team'){
    teamBox.appendChild(el);
  }

  else if(type === 'control'){
    controlBox.appendChild(el);
  }

  else if(type === 'env'){
    envBox.appendChild(el);
  }
}

ROWS.forEach(row => {

  row.cards.forEach(card => {

    if(!card.id) return;

    if(saved.includes(card.id)){
      createResultCard(card);
    }

  });

});

resultTotal.textContent = totalScore;
