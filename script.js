const ROWS = [
  {
    tier: 1,
    cards: [
      {
        id: '1-1',
        col: 1,
        icon: 'assets/icons/위축1.png',
        name: '팀: 위축 I',
        pts: 1,
        group: 'g1',
        lineBottom: true,
        desc: '오퍼레이터의 주요 능력치 -10%'
      },
      {
        id: '1-2',
        col: 2,
        icon: 'assets/icons/공격1.png',
        name: '조작: 공격 I',
        pts: 1,
        group: 'g2',
        lineBottom: true,
        desc: '적이 주는 피해 +30%'
      },
      {
        id: '1-3',
        col: 3,
        icon: 'assets/icons/시간1.png',
        name: '환경: 시간 제한 I',
        pts: 1,
        group: 'g3',
        lineBottom: true,
        desc: '카운트다운 -100초'
      },
      {
        id: '1-4',
        col: 4,
        icon: 'assets/icons/활성1.png',
        name: '조작: 활성 I',
        pts: 1,
        group: 'g4',
        lineBottom: true,
        desc: '적 생명력 +50%'
      },
      {
        id: '1-5',
        col: 5,
        icon: 'assets/icons/억제1.png',
        name: '팀: 억제 I',
        pts: 1,
        group: 'g5',
        lineBottom: true,
        desc: '오퍼레이터가 적의 방어불능 또는 아츠부착 스택 수치를 증가시키면, 해당 오퍼레이터가 주는 해당 유형의 피해 -45%, 10초간 지속'
      },
      {
        id: '1-6',
        col: 6,
        icon: 'assets/icons/참수1.png',
        name: '팀: 참수 I',
        pts: 1,
        group: 'g6',
        lineBottom: true,
        desc: '메인 컨트롤 오퍼레이터가 받는 피해 +50%'
      },
      {
        id: '1-7',
        col: 7,
        icon: 'assets/icons/호흡.png',
        name: '환경: 호흡 불가',
        pts: 1,
        group: 'g7',
        lineBottom: true,
        desc: '기력 회복 속도 -50%'
      },
      {
        id: '1-8',
        col: 8,
        icon: 'assets/icons/쇠퇴1.png',
        name: '환경: 쇠퇴 I',
        pts: 1,
        group: 'g8',
        lineBottom: true,
        desc: '웨이브 사이에 치유 물질이 1개만 생성'
      },
      {
        id: '1-9',
        col: 9,
        icon: 'assets/icons/칼날1.png',
        name: '팀: 부러진 칼날 I',
        pts: 1,
        group: 'g9',
        lineBottom: true,
        desc: '오퍼레이터가 궁극기를 1회 사용할 때마다, 해당 오퍼레이터가 이후 사용하는 궁극기 피해 -50% 감소'
      },
      {
        id: '1-10',
        col: 10,
        icon: 'assets/icons/보호벽.png',
        name: '조작: 보호벽',
        pts: 1,
        desc: '각 적은 5초마다 방어불능 또는 같은 유형의 아츠부착을 1회만 부여받을 수 있음'
      },

      { empty: true, col: 11 },
      { empty: true, col: 12 },
      { empty: true, col: 13 },

      {
        id: '1-15',
        col: 14,
        icon: 'assets/icons/모름1.png',
        name: '조작: 부착',
        pts: 1,
        unlockable: true,
        requiresAny: ['3-12', '3-13'],
        desc: '적에게 부착된 방어불능 또는 아츠부착 1단계마다 해당 적이 받는 부착 스택과 대응되는 데미지 -10%(해당 버프는 부착 지속시간 종료 0.1초후에 소멸)'
      },
      {
        id: '1-16',
        col: 15,
        icon: 'assets/icons/독성1.png',
        name: '조작: 독성 I',
        pts: 1,
        group: 'unlock-group',
        unlockable: true,
        requiresAny: ['3-12', '3-13'],
        lineBottom: true,
        desc: '처치 당한 적이 독성 물질을 남기고 오퍼레이터가 독성 물질의 범위에 있을 때, 매초마다 최대 생명력의 2% 피해를 입음'
      }
    ]
  },

  {
    tier: 2,
    cards: [
      {
        id: '2-1',
        col: 1,
        icon: 'assets/icons/위축2.png',
        name: '팀: 위축 II',
        pts: 2,
        group: 'g1',
        lineTop: true,
        lineBottom: true,
        desc: '오퍼레이터의 주요 능력치 -20%'
      },
      {
        id: '2-2',
        col: 2,
        icon: 'assets/icons/공격2.png',
        name: '조작: 공격 II',
        pts: 2,
        group: 'g2',
        lineTop: true,
        desc: '적이 주는 피해 +80%'
      },
      {
        id: '2-3',
        col: 3,
        icon: 'assets/icons/시간2.png',
        name: '환경: 시간 제한 II',
        pts: 2,
        group: 'g3',
        lineTop: true,
        lineBottom: true,
        desc: '카운트다운 -200초'
      },
      {
        id: '2-4',
        col: 4,
        icon: 'assets/icons/활성2.png',
        name: '조작: 활성 II',
        pts: 2,
        group: 'g4',
        lineTop: true,
        lineBottom: true,
        desc: '적 생명력 +100%'
      },
      {
        id: '2-5',
        col: 5,
        icon: 'assets/icons/억제2.png',
        name: '팀: 억제 II',
        pts: 2,
        group: 'g5',
        lineTop: true,
        desc: '오퍼레이터가 적의 방어불능 또는 아츠부착 스택 수치를 증가시키면, 해당 오퍼레이터가 주는 해당 유형의 피해 -90%, 10초간 지속'
      },
      {
        id: '2-6',
        col: 6,
        icon: 'assets/icons/참수2.png',
        name: '팀: 참수 II',
        pts: 2,
        group: 'g6',
        lineTop: true,
        desc: '메인 컨트롤 오퍼레이터가 받는 피해 +100%'
      },

      {
        empty: true,
        col: 7,
        group: 'g7',
        connectorOnly: true,
        lineTop: true,
        lineBottom: true
      },

      {
        id: '2-8',
        col: 8,
        icon: 'assets/icons/쇠퇴2.png',
        name: '환경: 쇠퇴 II',
        pts: 2,
        group: 'g8',
        lineTop: true,
        desc: '웨이브 사이에 치유 물질이 생성되지 않음'
      },
      {
        id: '2-9',
        col: 9,
        icon: 'assets/icons/칼날2.png',
        name: '팀: 부러진 칼날 II',
        pts: 2,
        group: 'g9',
        lineTop: true,
        desc: '오퍼레이터가 궁극기를 1회 사용할 때마다, 해당 오퍼레이터가 이후 사용하는 궁극기 피해 -100% 감소'
      },
      {
        id: '2-10',
        col: 10,
        icon: 'assets/icons/모름2.png',
        name: '조작: ??',
        pts: 2,
        desc: '적 이동속도 관련 제약'
      },
      {
        id: '2-11',
        col: 11,
        icon: 'assets/icons/모름3.png',
        name: '환경: 동시 성장',
        pts: 2,
        desc: '메인 컨트롤 오퍼레이터가 최대 HP의 10% 이상으로 회복하거나 20% 이상에 해당하는 보호막을 얻을 때, 전장의 모든 적도 최대 HP의 8%를 회복한다'
      },

      { empty: true, col: 12 },
      { empty: true, col: 13 },

      {
        id: '2-15',
        col: 14,
        icon: 'assets/icons/분리.png',
        name: '환경: 분리',
        pts: 2,
        unlockable: true,
        requiresAny: ['3-12', '3-13'],
        desc: '전투가 시작된 후 메인 컨트롤 오퍼레이터 전환 불가'
      },
      {
        id: '2-16',
        col: 15,
        icon: 'assets/icons/독성2.png',
        name: '조작: 독성 II',
        pts: 2,
        group: 'unlock-group',
        unlockable: true,
        requiresAny: ['3-12', '3-13'],
        lineTop: true,
        desc: '처치 당한 적이 독성 물질을 남기고 오퍼레이터가 독성 물질의 범위에 있을 때, 매초마다 최대 생명력의 5% 피해를 입음'
      }
    ]
  },

  {
    tier: 3,
    cards: [
      {
        id: '3-1',
        col: 1,
        icon: 'assets/icons/위축3.png',
        name: '팀: 위축 III',
        pts: 3,
        group: 'g1',
        lineTop: true,
        desc: '오퍼레이터의 주요 능력치 -40%'
      },

      { empty: true, col: 2 },

      {
        id: '3-3',
        col: 3,
        icon: 'assets/icons/시간3.png',
        name: '환경: 시간 제한 III',
        pts: 3,
        group: 'g3',
        lineTop: true,
        desc: '카운트다운 -300초'
      },
      {
        id: '3-4',
        col: 4,
        icon: 'assets/icons/활성3.png',
        name: '조작: 활성 III',
        pts: 3,
        group: 'g4',
        lineTop: true,
        desc: '적 생명력 +200%'
      },

      { empty: true, col: 5 },
      { empty: true, col: 6 },

      {
        id: '3-7',
        col: 7,
        icon: 'assets/icons/속박.png',
        name: '환경: 속박',
        pts: 3,
        group: 'g7',
        lineTop: true,
        desc: '회피 불가'
      },

      { empty: true, col: 8 },
      { empty: true, col: 9 },

      {
        id: '3-10',
        col: 10,
        icon: 'assets/icons/피로.png',
        name: '팀: 피로',
        pts: 3,
        desc: '오퍼레이터의 일반공격 피해 -70%'
      },
      {
        id: '3-11',
        col: 11,
        icon: 'assets/icons/쇠퇴.png',
        name: '팀: 쇠퇴',
        pts: 3,
        desc: '오퍼레이터가 받은 데미지에 비례한 수치만큼 최대 체력 감소(근거리:30%,원거리50%)'
      },
      {
        id: '3-12',
        col: 12,
        icon: 'assets/icons/과속.png',
        name: '환경: 과속',
        pts: 3,
        group: 'yellow-key',
        key: true,
        lineRight: true,
        desc: '오퍼레이터 연계스킬 쿨타임 -60%, 배틀스킬 피해 -60%'
      },
      {
        id: '3-13',
        col: 13,
        icon: 'assets/icons/충격.png',
        name: '환경: 충격',
        pts: 3,
        group: 'yellow-key',
        key: true,
        lineLeft: true,
        desc: '오퍼레이터 일반공격, 배틀스킬,연계스킬, 궁극기 이외의 피해 +100%, 배틀스킬 피해 -60%'
      },

      { empty: true, col: 14 },
      { empty: true, col: 15 }
    ]
  }
];

const selected = new Set();
const selectedOrder = [];
let lastSelectedId = null;

const exitingPanelItems = new Map();
const PANEL_EXIT_MS = 240;


function getAllCards(){
  return ROWS.flatMap(r => r.cards);
}

function getCard(id){
  return getAllCards().find(c => c.id === id);
}

function getTier(id){
  return ROWS.find(r => r.cards.some(c => c.id === id))?.tier || 1;
}

function removeFromOrder(id){
  const i = selectedOrder.indexOf(id);
  if(i !== -1) selectedOrder.splice(i, 1);
}

function startPanelExit(id){
  if(exitingPanelItems.has(id)) return;

  const card = getCard(id);
  if(!card) return;

  exitingPanelItems.set(id, {
    card,
    tier: getTier(id)
  });

  setTimeout(() => {
    exitingPanelItems.delete(id);
    removeFromOrder(id);
    updateAll();
  }, PANEL_EXIT_MS);
}

function deselectCard(id, animate = true){
  selected.delete(id);

  if(animate){
    startPanelExit(id);
  }
  else{
    removeFromOrder(id);
  }
}

function isGroupSelected(group){
  return getAllCards().some(c =>
    c.group === group &&
    selected.has(c.id)
  );
}

function isDisabled(card){
  if(card.requiresAny){
    return !card.requiresAny.some(id => selected.has(id));
  }

  return false;
}

function isGroupConflict(card){
  if(!card.group) return false;
  if(selected.has(card.id)) return false;

  return getAllCards().some(c =>
    c.group === card.group &&
    selected.has(c.id)
  );
}

function toggleCard(id){
  const card = getCard(id);

  if(!card) return;
  if(isDisabled(card)) return;

  if(selected.has(id)){
    deselectCard(id, true);
  
    if(lastSelectedId === id){
      lastSelectedId = null;
    }
  
    removeDependentCards();
    playSfx(sfxCancel);
  
    saveState();
    updateAll();
    return;
  }

  if(card.group){
    getAllCards()
      .filter(c =>
        c.group === card.group &&
        selected.has(c.id)
      )
      .forEach(c => {
        deselectCard(c.id, true);
      });
  }

  selected.add(id);

  if(!selectedOrder.includes(id)){
    selectedOrder.push(id);
  }

  lastSelectedId = id;

  removeDependentCards();
  playSfx(sfxSelect);
  
  saveState();
  updateAll();
}

function removeDependentCards(){
  getAllCards().forEach(card => {
    if(!card.requiresAny) return;

    const unlocked = card.requiresAny.some(id => selected.has(id));

    if(!unlocked && selected.has(card.id)){
      deselectCard(card.id, true);
    }
  });
}

function buildGrid(){
  const area = document.getElementById('grid-area');
  area.innerHTML = '';

  ROWS.forEach(({tier, cards}) => {
    const wrap = document.createElement('div');
    wrap.className = 'row-wrap';

    wrap.innerHTML = `
      <div class="tier-bar t${tier}"></div>

      <div class="row-label">
        <span class="tier-num">${tier}</span>
        <span class="tier-icon">★</span>
      </div>
    `;

    const row = document.createElement('div');
    row.className = 'cards-row';

    cards.forEach(card => {
      const el = document.createElement('div');
      el.className = 'card';
      el.style.gridColumn = card.col;

      if(card.lineTop) el.classList.add('line-top');
      if(card.lineBottom) el.classList.add('line-bottom');
      if(card.lineLeft) el.classList.add('line-left');
      if(card.lineRight) el.classList.add('line-right');


      if(card.empty){
        el.classList.add('empty');

        if(card.connectorOnly){
          el.classList.add('connector-only');
        }

        el.innerHTML = `
          <span class="conn top"></span>
          <span class="conn bottom"></span>
          <span class="conn left"></span>
          <span class="conn right"></span>

          ${card.connectorOnly ? '' : '<div class="card-x"></div>'}
        `;

        row.appendChild(el);
        return;
      }

      const disabled = isDisabled(card);
      const conflict = isGroupConflict(card);

      if(selected.has(card.id)) el.classList.add('selected');
      if(card.id === lastSelectedId && selected.has(card.id)){
        el.classList.add('select-flash');
      }
      if(disabled) el.classList.add('disabled');
      if(conflict) el.classList.add('group-conflict');
      if(card.key) el.classList.add('key-card');
      if(card.unlockable) el.classList.add('unlockable-card');

      el.innerHTML = `
        <span class="conn top"></span>
        <span class="conn bottom"></span>
        <span class="conn left"></span>
        <span class="conn right"></span>

        <div class="card-icon">
          <img src="${card.icon}" alt="${card.name}" draggable="false">
        </div>

        <div class="card-check">✓</div>

        <div class="conflict-text">충돌</div>
        <div class="conflict-mark">⊘</div>

        <div class="card-tooltip">
          <div class="tooltip-title">${card.name}</div>
        
          <div class="tooltip-desc">
            ${colorizeDesc(card.desc || '설명이 없습니다.')}
          </div>
        </div>
        
        ${disabled ? '<div class="lock-mark">🔒</div>' : ''}
      `;

     if(!disabled){
      el.addEventListener('click', () => toggleCard(card.id));
    
      el.addEventListener('mouseenter', () => {
        showFloatingTooltip(card, el);
      });
    
      el.addEventListener('mouseleave', () => {
        hideFloatingTooltip();
      });
    }

      row.appendChild(el);
    });

    wrap.appendChild(row);
    area.appendChild(wrap);
  });
}

function renderPanel(){
  const list = document.getElementById('panel-list');
  const count = document.getElementById('selected-count');

  count.textContent = selected.size;

  if(selected.size === 0){
    list.innerHTML = `
      <div class="panel-empty">
        지표를 선택하면<br>
        여기에 표시됩니다
      </div>
    `;
    return;
  }

  list.innerHTML = '';

  selectedOrder
    .filter(id => selected.has(id) || exitingPanelItems.has(id))
    .forEach(id => {
      const exiting = exitingPanelItems.get(id);
      const card = exiting ? exiting.card : getCard(id);
      const tier = exiting ? exiting.tier : getTier(id);
      
      const item = document.createElement('div');
      item.className = `panel-item tier-${tier}`;
      
      if(id === lastSelectedId && selected.has(id)){
        item.classList.add('new-item');
      }
      
      if(exitingPanelItems.has(id) && !selected.has(id)){
        item.classList.add('removing-item');
      }

      item.innerHTML = `
        <div class="panel-score">${card.pts}★</div>

        <div class="panel-icon">
          <img src="${card.icon}" alt="${card.name}" draggable="false">
        </div>

          <div class="panel-content">
            <div class="panel-name">${card.name}</div>
            <div class="panel-desc">
              ${colorizeDesc(
                card.desc || '설명이 아직 입력되지 않았습니다.'
              )}
            </div>
          </div>

        <button class="panel-del">×</button>
      `;

      item.querySelector('.panel-del')
        .addEventListener('click', () => {
          deselectCard(id, true);
          removeDependentCards();
          playSfx(sfxCancel);
          
          saveState();
          updateAll();
        });

      list.prepend(item);
    });
}

function updateTotal(){
  let total = 0;

  selected.forEach(id => {
    const c = getCard(id);
    if(c) total += c.pts;
  });

  document.getElementById('total-pts').textContent = total;

  document.getElementById('warn-text')
    .classList.toggle('visible', total >= 25);
  document.querySelector('.total-score')
  .classList.toggle('danger', total >= 25);
}

function updateAll(){
  buildGrid();
  renderPanel();
  updateTotal();
}

const floatingTooltip = document.createElement('div');
floatingTooltip.className = 'floating-tooltip';
document.body.appendChild(floatingTooltip);

function showFloatingTooltip(card, el){
  const rect = el.getBoundingClientRect();

  floatingTooltip.innerHTML = `
    <div class="tooltip-title">${card.name}</div>
    <div class="tooltip-desc">
      ${colorizeDesc(card.desc || '설명이 없습니다.')}
    </div>
  `;

  floatingTooltip.style.left = `${rect.left + rect.width / 2}px`;
  floatingTooltip.style.top = `${rect.top - 18}px`;
  
  floatingTooltip.classList.add('visible');
}

function hideFloatingTooltip(){
  floatingTooltip.classList.remove('visible');
}

const boardWrap = document.querySelector('.board-wrap');

boardWrap.addEventListener('wheel', (e) => {
  if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
    e.preventDefault();
    boardWrap.scrollLeft += e.deltaY;
  }
}, { passive:false });

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

boardWrap.addEventListener('mousedown', (e) => {

  if(
    e.target.closest('.card') ||
    e.target.closest('.selected-item')
  ){
    return;
  }

  isDragging = true;

  boardWrap.classList.add('dragging');

  startX = e.pageX - boardWrap.offsetLeft;
  scrollLeft = boardWrap.scrollLeft;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  boardWrap.classList.remove('dragging');
});

boardWrap.addEventListener('mousemove', (e) => {

  if(!isDragging) return;

  e.preventDefault();

  const x = e.pageX - boardWrap.offsetLeft;

  const walk = (x - startX) * 1.15;

  boardWrap.scrollLeft = scrollLeft - walk;
});


function resetSelected(){
  selected.clear();
  selectedOrder.length = 0;
  
  saveState();
  updateAll();
}


const bgm = document.getElementById('bgm');
const musicToggle = document.getElementById('music-toggle');
const musicVolume = document.getElementById('music-volume');

if(bgm && musicToggle && musicVolume){
  bgm.volume = Number(musicVolume.value);

  musicToggle.addEventListener('click', async () => {
    try{
      if(bgm.paused){
        await bgm.play();
        musicToggle.textContent = '⏸';
      }
      else{
        bgm.pause();
        musicToggle.textContent = '▶';
      }
      saveState();
    }
    catch(error){
      console.warn('음악 재생 실패:', error);
    }
  });

  musicVolume.addEventListener('input', () => {
    bgm.volume = Number(musicVolume.value);

    saveState();
  });
}

window.addEventListener('load', () => {
  const intro = document.getElementById('intro-screen');

  setTimeout(() => {
    if(intro){
      intro.remove();
    }
  }, 2600);
});

const sfxSelect = document.getElementById('sfx-select');
const sfxCancel = document.getElementById('sfx-cancel');

function playSfx(audio){
  if(!audio) return;

  audio.currentTime = 0;
  audio.volume = 0.45;
  audio.play().catch(() => {});
}
let bgmStarted = false;

function startBgmOnce(){
  if(bgmStarted) return;
  if(!bgm) return;

  bgmStarted = true;
  bgm.play()
    .then(() => {
      if(musicToggle){
        musicToggle.textContent = '⏸';
      }
    })
    .catch(() => {
      bgmStarted = false;
    });
}

document.addEventListener('click', startBgmOnce, { once:true });


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


function saveState(){
  localStorage.setItem(
    'selectedConstraints',
    JSON.stringify(selectedOrder)
  );

  if(musicVolume){
    localStorage.setItem(
      'musicVolume',
      musicVolume.value
    );
  }

  if(bgm){
    localStorage.setItem(
      'musicPlaying',
      !bgm.paused
    );
  }
}

function loadState(){
  const saved =
    localStorage.getItem('selectedConstraints');

  if(saved){
    try{
      const arr = JSON.parse(saved);

      arr.forEach(id => {
        selected.add(id);

        if(!selectedOrder.includes(id)){
          selectedOrder.push(id);
        }
      });
    }
    catch(error){
      console.warn('저장 데이터 복원 실패');
    }
  }

  const savedVolume =
    localStorage.getItem('musicVolume');

  if(savedVolume && bgm && musicVolume){
    musicVolume.value = savedVolume;
    bgm.volume = Number(savedVolume);
  }
  removeDependentCards();
  updateAll();
}

const screenFlash = document.createElement('div');
screenFlash.className = 'screen-flash';
document.body.appendChild(screenFlash);

function playScreenFlash(){
  screenFlash.classList.remove('active');
  void screenFlash.offsetWidth;
  screenFlash.classList.add('active');
}


loadState();
