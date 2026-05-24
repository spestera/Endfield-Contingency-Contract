const ROWS = [
  {
    tier:1,
    cards:[
      {id:'1-1', col:1, icon:'▦', name:'그룹1-I', pts:1, group:'g1', lineBottom:true},
      {id:'1-2', col:2, icon:'▲', name:'그룹2-I', pts:1, group:'g2', lineBottom:true},
      {id:'1-3', col:3, icon:'◴', name:'그룹3-I', pts:1, group:'g3', lineBottom:true},
      {id:'1-4', col:4, icon:'✹', name:'그룹4-I', pts:1, group:'g4', lineBottom:true},
      {id:'1-5', col:5, icon:'▣', name:'그룹5-I', pts:1, group:'g5', lineBottom:true},
      {id:'1-6', col:6, icon:'◒', name:'그룹6-I', pts:1, group:'g6', lineBottom:true},
      {id:'1-7', col:7, icon:'⌁', name:'그룹7-I', pts:1, group:'g7', lineBottom:true},
      {id:'1-8', col:8, icon:'✚', name:'그룹8-I', pts:1, group:'g8', lineBottom:true},
      {id:'1-9', col:9, icon:'◎', name:'그룹9-I', pts:1, group:'g9', lineBottom:true},

      {id:'1-10', col:10, icon:'◉', name:'독립 제약 I', pts:1},

      {empty:true, col:11},
      {empty:true, col:12},
      {empty:true, col:13},

      {id:'1-15', col:14, icon:'◉', name:'해금 독립 I', pts:1, unlockable:true, requiresAny:['3-12','3-13']},
      {id:'1-16', col:15, icon:'▧', name:'해금 그룹 I', pts:1, group:'unlock-group', unlockable:true, requiresAny:['3-12','3-13'], lineBottom:true}
    ]
  },

  {
    tier:2,
    cards:[
      {id:'2-1', col:1, icon:'▦', name:'그룹1-II', pts:2, group:'g1', lineTop:true, lineBottom:true},
      {id:'2-2', col:2, icon:'▲', name:'그룹2-II', pts:2, group:'g2', lineTop:true},
      {id:'2-3', col:3, icon:'◴', name:'그룹3-II', pts:2, group:'g3', lineTop:true, lineBottom:true},
      {id:'2-4', col:4, icon:'✹', name:'그룹4-II', pts:2, group:'g4', lineTop:true, lineBottom:true},
      {id:'2-5', col:5, icon:'▣', name:'그룹5-II', pts:2, group:'g5', lineTop:true},
      {id:'2-6', col:6, icon:'◒', name:'그룹6-II', pts:2, group:'g6', lineTop:true},

      {empty:true, col:7, group:'g7', connectorOnly:true, lineTop:true, lineBottom:true},

      {id:'2-8', col:8, icon:'✚', name:'그룹8-II', pts:2, group:'g8', lineTop:true},
      {id:'2-9', col:9, icon:'◎', name:'그룹9-II', pts:2, group:'g9', lineTop:true},

      {id:'2-10', col:10, icon:'✹', name:'독립 제약 II-A', pts:2},
      {id:'2-11', col:11, icon:'▨', name:'독립 제약 II-B', pts:2},

      {empty:true, col:12},
      {empty:true, col:13},

      {id:'2-15', col:14, icon:'◉', name:'해금 독립 II', pts:2, unlockable:true, requiresAny:['3-12','3-13']},
      {id:'2-16', col:15, icon:'▧', name:'해금 그룹 II', pts:2, group:'unlock-group', unlockable:true, requiresAny:['3-12','3-13'], lineTop:true}
    ]
  },

  {
    tier:3,
    cards:[
      {id:'3-1', col:1, icon:'▦', name:'그룹1-III', pts:3, group:'g1', lineTop:true},

      {empty:true, col:2},

      {id:'3-3', col:3, icon:'◴', name:'그룹3-III', pts:3, group:'g3', lineTop:true},
      {id:'3-4', col:4, icon:'✹', name:'그룹4-III', pts:3, group:'g4', lineTop:true},

      {empty:true, col:5},
      {empty:true, col:6},

      {id:'3-7', col:7, icon:'◒', name:'그룹7-III', pts:3, group:'g7', lineTop:true},

      {empty:true, col:8},
      {empty:true, col:9},

      {id:'3-10', col:10, icon:'⚔', name:'독립 제약 III-A', pts:3},
      {id:'3-11', col:11, icon:'♟', name:'독립 제약 III-B', pts:3},

      {id:'3-12', col:12, icon:'🔑', name:'노란 열쇠 I', pts:3, group:'yellow-key', key:true, lineRight:true},
      {id:'3-13', col:13, icon:'🗝', name:'노란 열쇠 II', pts:3, group:'yellow-key', key:true, lineLeft:true},

      {empty:true, col:14},
      {empty:true, col:15}
    ]
  }
];

const selected = new Set();
const selectedOrder = [];

function getAllCards(){
  return ROWS.flatMap(r=>r.cards);
}

function getCard(id){
  return getAllCards().find(c=>c.id===id);
}

function getTier(id){
  return ROWS.find(r=>r.cards.some(c=>c.id===id))?.tier || 1;
}

function removeFromOrder(id){
  const i = selectedOrder.indexOf(id);
  if(i !== -1) selectedOrder.splice(i,1);
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
    selected.delete(id);
    removeFromOrder(id);
    removeDependentCards();
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
        selected.delete(c.id);
        removeFromOrder(c.id);
      });

  }

  selected.add(id);
  selectedOrder.push(id);

  removeDependentCards();

  updateAll();
}

function removeDependentCards(){

  getAllCards().forEach(card => {

    if(!card.requiresAny) return;

    const unlocked =
      card.requiresAny.some(id => selected.has(id));

    if(!unlocked){
      selected.delete(card.id);
      removeFromOrder(card.id);
    }

  });

}

function buildGrid(){

  const area = document.getElementById('grid-area');

  area.innerHTML = '';

  ROWS.forEach(({tier,cards}) => {

    const wrap = document.createElement('div');

    wrap.className = 'row-wrap';

    wrap.innerHTML = `
      <div class="tier-bar t${tier}"></div>

      <div class="row-label">
        <span class="tier-num">${tier}</span>
        <span class="tier-icon">▰</span>
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

      if(card.group && isGroupSelected(card.group)){
        el.classList.add('line-active');
      }

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

      if(selected.has(card.id)){
        el.classList.add('selected');
      }

      if(disabled){
        el.classList.add('disabled');
      }

      if(conflict){
        el.classList.add('group-conflict');
      }

      if(card.key){
        el.classList.add('key-card');
      }

      if(card.unlockable){
        el.classList.add('unlockable-card');
      }

      el.innerHTML = `
        <span class="conn top"></span>
        <span class="conn bottom"></span>
        <span class="conn left"></span>
        <span class="conn right"></span>

        <div class="card-icon">${card.icon}</div>

        <div class="card-check">✓</div>

        <div class="conflict-text">충돌</div>
        <div class="conflict-mark">⊘</div>

        <div class="card-pts">${card.pts}</div>

        ${disabled ? '<div class="lock-mark">🔒</div>' : ''}
      `;

      if(!disabled){
        el.addEventListener('click', () => toggleCard(card.id));
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
    .filter(id => selected.has(id))
    .forEach(id => {

      const card = getCard(id);

      const tier = getTier(id);

      const item = document.createElement('div');

      item.className = `panel-item tier-${tier}`;

      item.innerHTML = `
        <div class="panel-score">${card.pts}★</div>

        <div class="panel-icon">${card.icon}</div>

        <div>
          <div class="panel-name">${card.name}</div>
          <div class="panel-desc">
            선택된 제약입니다.
          </div>
        </div>

        <button class="panel-del">×</button>
      `;

      item.querySelector('.panel-del')
        .addEventListener('click', () => {

          selected.delete(id);

          removeFromOrder(id);

          removeDependentCards();

          updateAll();

        });

      list.appendChild(item);

    });

}

function updateTotal(){

  let total = 0;

  selected.forEach(id => {

    const c = getCard(id);

    if(c) total += c.pts;

  });

  document.getElementById('total-pts')
    .textContent = total;

  document.getElementById('warn-text')
    .classList.toggle('visible', total >= 25);

}

function updateAll(){

  buildGrid();

  renderPanel();

  updateTotal();

}

const gridArea = document.getElementById('grid-area');

gridArea.addEventListener('wheel', (e) => {

  if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){

    e.preventDefault();

    gridArea.scrollLeft += e.deltaY;

  }

}, { passive:false });

updateAll();
