(() => {
  const e1Base = '../e01-part1-lines17-30/';
  const e1 = {
    'Dhika ↔ Uncle':[1,3,5],
    'Dhika ↔ Aunty':[1,5],
    'Dhika ↔ Pappu':[1,5,7,9,10],
    'Aunty ↔ Uncle':[1,3],
    'Dhika ↔ John':[1,9,10],
    'John ↔ Aunty / Uncle':[1],
    'Pappu ↔ Aunty / Uncle':[1,5],
    'Dhika ↔ Bantu':[2,4],
    'Dhika ↔ Bobby':[2,4],
    'Bantu ↔ Bobby':[2,4],
    'Dhika ↔ Students (general)':[2],
    'Dhika ↔ Sharmi':[2],
    'Sharmi ↔ Raj':[2],
    'Dhika ↔ Raj':[2],
    'Dhika ↔ Her Mother':[5],
    'Dhika ↔ Bindu Maami':[5,8,10],
    'Dhika ↔ Chotu/Babu':[6,7,8,9,10,11,12],
    'Chotu ↔ Pappu':[6,7],
    'Chotu ↔ Mother/Family':[6,8,10],
    'Bindu Maami ↔ Chotu':[7,8,10],
    'John ↔ Pappu':[]
  };
  const e2 = {
    'Dhika ↔ John':[1,2,3,4,5,7,8,10,13],
    'John ↔ Pappu':[1,2],
    'Dhika ↔ Pappu':[1,5,7,14],
    'Dhika ↔ Aunty':[5,14],
    'Dhika ↔ Uncle':[5,6,7],
    'John ↔ Aunty / Uncle':[3,5],
    'Pappu ↔ Aunty / Uncle':[5,7,14],
    'Aunty ↔ Uncle':[5],
    'Dhika ↔ Chotu/Babu':[4,11,14],
    'Dhika ↔ Bantu':[9,10,12],
    'Dhika ↔ Bobby':[9,10,12],
    'Bantu ↔ Bobby':[9,10,12],
    'Dhika ↔ Students (general)':[9,10],
    'Dhika ↔ Bindu Maami':[11,14],
    'Bindu Maami ↔ Chotu':[11,14]
  };
  const esc = s => String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function pointer(label, href){
    return '<a class="part-pointer" href="'+href+'">'+esc(label)+'</a>';
  }
  window.renderE02RelationshipLedger = function(container, throughPart){
    if(!container) return;
    throughPart = Number(throughPart)||1;
    const names = Object.keys(e1);
    container.innerHTML = names.map(name => {
      const links = [];
      (e1[name]||[]).forEach(p => links.push(pointer('Episode 1 · Part '+p, e1Base+'part'+p+'.html#Relationship%20Progression')));
      (e2[name]||[]).filter(p=>p<=throughPart).forEach(p => links.push(pointer('Episode 2 · Part '+p, 'part'+p+'.html#Relationship%20Progression')));
      const chain = links.length ? links.join('<div class="part-pointer-arrow" aria-hidden="true">↓</div>') : '<div class="ledger-note">Established relationship retained · no qualifying pointer added in this view.</div>';
      return '<div class="card relationship-history"><h3>'+esc(name)+'</h3><div class="part-pointer-chain">'+chain+'</div></div>';
    }).join('');
  };
})();