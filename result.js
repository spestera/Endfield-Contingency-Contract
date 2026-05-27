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

const teamScoreEl =
  document.getElementById('team-score');

const controlScoreEl =
  document.getElementById('control-score');

const envScoreEl =
  document.getElementById('env-score');

const selectedCards = [];

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

function getTierClass(card){
  if(card.pts === 1) return 'tier-1';
  if(card.pts === 2) return 'tier-2';
  if(card.pts === 3) return 'tier-3';

  return '';
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

  const el = document.createElement('div');

  el.className = `result-card ${getTierClass(card)}`;

  el.innerHTML = `
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

  return el;
}

function renderEmpty(box){
  box.innerHTML = `
    <div class="result-empty">
      선택된 제약 없음
    </div>
  `;
}

ROWS.forEach(row => {

  row.cards.forEach(card => {

    if(!card.id) return;

    if(saved.includes(card.id)){
      selectedCards.push(card);
      totalScore += card.pts;
    }

  });

});

selectedCards.sort((a, b) => b.pts - a.pts);

const grouped = {
  team: [],
  control: [],
  env: []
};
const categoryScores = {
  team: 0,
  control: 0,
  env: 0
};

selectedCards.forEach(card => {
  const type = getType(card.name);

  if(grouped[type]){
    grouped[type].push(card);
  }
  if(categoryScores[type] !== undefined){
  categoryScores[type] += card.pts;
  }
});

grouped.team.forEach(card => {
  teamBox.appendChild(createResultCard(card));
});

grouped.control.forEach(card => {
  controlBox.appendChild(createResultCard(card));
});

grouped.env.forEach(card => {
  envBox.appendChild(createResultCard(card));
});

if(grouped.team.length === 0){
  renderEmpty(teamBox);
}

if(grouped.control.length === 0){
  renderEmpty(controlBox);
}

if(grouped.env.length === 0){
  renderEmpty(envBox);
}

teamScoreEl.textContent =
  `${categoryScores.team}★`;

controlScoreEl.textContent =
  `${categoryScores.control}★`;

envScoreEl.textContent =
  `${categoryScores.env}★`;

resultTotal.textContent = totalScore;

function fitResultScreen(){
  const baseWidth = 1920;
  const baseHeight = 1080;

  const scale = Math.min(
    window.innerWidth / baseWidth,
    window.innerHeight / baseHeight
  );

  const wrapper =
    document.querySelector('.result-wrapper');

  if(!wrapper) return;

  wrapper.style.transform =
    `scale(${scale})`;
}

window.addEventListener('load', fitResultScreen);
window.addEventListener('resize', fitResultScreen);

const guideList =
  document.getElementById('result-guide-list');

const guideCards = [...selectedCards].sort((a, b) => {
  if(a.col !== b.col){
    return a.col - b.col;
  }

  return a.pts - b.pts;
});

guideCards.forEach(card => {
  const item = document.createElement('div');

  item.className = `guide-item ${getTierClass(card)}`;

  item.innerHTML = `
    <img
      src="${card.icon}"
      alt="${card.name}"
      draggable="false"
    >

    <span>${card.pts}★</span>
  `;

  guideList.appendChild(item);
});


const copyResultBtn =
  document.getElementById('copy-result-btn');

if(copyResultBtn){
  copyResultBtn.addEventListener('click', async () => {
    const target =
      document.getElementById('capture-area');

    try{
      copyResultBtn.textContent = '복사 중...';

      const canvas = await html2canvas(target, {
        scale: 2,
        backgroundColor: '#020814',
        useCORS: true
      });

      canvas.toBlob(async blob => {
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ]);

        copyResultBtn.textContent = '복사 완료';
      });
    }
    catch(error){
      console.warn(error);
      copyResultBtn.textContent = '복사 실패';
    }
  });
}
