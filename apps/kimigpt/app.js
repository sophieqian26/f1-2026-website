(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const storageKey = 'kimigpt-chats-v1';
  let chats = [], activeId = null, level = 'superfan', pending = false;
  try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) chats = saved.filter(c => c && typeof c.id === 'string' && typeof c.title === 'string' && Array.isArray(c.messages)).map(c => ({...c, messages:c.messages.filter(m => m && ['user','assistant'].includes(m.role) && typeof m.text === 'string')})).slice(0,30); } catch {}
  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify(chats)); } catch {} };
  function icon() { const box = document.createElement('span'); box.className = 'brand-icon'; box.innerHTML = '<svg><use href="#spark"/></svg>'; return box; }
  function renderHistory() {
    const nav = $('#history'); nav.replaceChildren(); $('#chat-count').textContent = chats.length.toString().padStart(2,'0');
    if (!chats.length) { const p = document.createElement('p'); p.className = 'empty-history'; p.textContent = 'Your next great conversation starts with Kimi.'; nav.append(p); }
    chats.forEach(chat => { const button = document.createElement('button'); button.className = 'history-item' + (chat.id === activeId ? ' active' : ''); button.innerHTML = '<svg><use href="#chat"/></svg>'; const label = document.createElement('span'); label.textContent = chat.title; button.append(label); button.title = chat.title; button.onclick = () => { if (pending) return; activeId = chat.id; render(); closeMenu(); }; nav.append(button); });
  }
  async function copyText(text, button) { try { await navigator.clipboard.writeText(text); button.textContent = 'Copied ✓'; setTimeout(() => button.textContent = 'Copy reply', 1800); } catch { button.textContent = 'Copy unavailable'; } }
  function messageElement(message, index) {
    const el = document.createElement('div'); el.className = 'message ' + message.role;
    if (message.role === 'assistant') { const heading = document.createElement('div'); heading.className = 'assistant-heading'; heading.append(icon(), document.createTextNode('KimiGPT')); const tag = document.createElement('span'); tag.textContent = 'VERY MUCH A FAN'; heading.append(tag); el.append(heading); }
    const content = document.createElement('div'); content.className = 'message-content'; content.textContent = message.text; el.append(content);
    if (message.role === 'assistant') { const actions = document.createElement('div'); actions.className = 'message-actions'; const copy = document.createElement('button'); copy.textContent = 'Copy reply'; copy.onclick = () => copyText(message.text,copy); actions.append(copy); const current = chats.find(c => c.id === activeId); if (current && index === current.messages.length - 1) { const again = document.createElement('button'); again.textContent = 'More Kimi ↻'; again.onclick = () => { const question = [...current.messages].reverse().find(m => m.role === 'user'); if (question && !pending) submit(question.text); }; actions.append(again); } el.append(actions); }
    return el;
  }
  function render() { const chat = chats.find(c => c.id === activeId); $('.chat-column').classList.toggle('in-chat', !!chat); const log = $('#messages'); log.replaceChildren(); if (chat) chat.messages.forEach((m,i) => log.append(messageElement(m,i))); renderHistory(); }
  function reply(question) {
    const current=chats.find(c=>c.id===activeId);
    return KimiGPTReplies.reply(question,current?.messages || [],level);
  }
  async function submit(text) { text=text.trim().slice(0,2000); if(!text || pending) return; pending=true; $('#send-button').disabled=true; $('#question').value=''; $('#question').style.height='auto'; let chat=chats.find(c=>c.id===activeId); if(!chat){chat={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),title:text.slice(0,55),messages:[]}; chats.unshift(chat); chats=chats.slice(0,30); activeId=chat.id;} chat.messages.push({role:'user',text}); save(); render(); const typing=document.createElement('div'); typing.className='typing'; typing.textContent='cooking up some kimi glaze…'; $('#messages').append(typing); typing.scrollIntoView({behavior:'smooth',block:'nearest'}); await new Promise(r=>setTimeout(r,650)); chat.messages.push({role:'assistant',text:reply(text)}); save(); pending=false; $('#send-button').disabled=false; render(); const latest=$('#messages').lastElementChild; latest?.scrollIntoView({behavior:'smooth',block:'nearest'}); $('#question').focus({preventScroll:true}); }
  $('#chat-form').addEventListener('submit',e=>{e.preventDefault();submit($('#question').value);});
  $('#question').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();submit(e.target.value);}});
  $('#question').addEventListener('input',e=>{e.target.style.height='auto';e.target.style.height=Math.min(e.target.scrollHeight,120)+'px';});
  document.querySelectorAll('[data-prompt]').forEach(b=>b.onclick=()=>submit(b.dataset.prompt));
  document.querySelectorAll('[data-level]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.level===level)); b.onclick=()=>{level=b.dataset.level; document.querySelectorAll('[data-level]').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',String(x===b));});$('#hype-note').textContent={fan:'A tasteful amount of Kimi appreciation.',superfan:'A healthy, completely unreasonable amount.',unhinged:'The pit wall has officially lost control.'}[level];};});
  $('#new-chat').onclick=()=>{if(pending)return;activeId=null;render();$('#question').value='';closeMenu();$('#question').focus();window.scrollTo({top:0,behavior:'smooth'});};
  const dialog=$('#about-dialog'); $('#about-button').onclick=()=>dialog.showModal();$('#close-about').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  $('#clear-chats').onclick=()=>{if(pending){$('#clear-status').textContent='Please wait for the reply.';return;}chats=[];activeId=null;save();render();$('#clear-status').textContent='Chats cleared.';};
  function closeMenu(){$('#sidebar').classList.remove('open');$('#mobile-menu').setAttribute('aria-expanded','false');}
  $('#mobile-menu').onclick=()=>{const open=$('#sidebar').classList.toggle('open');$('#mobile-menu').setAttribute('aria-expanded',String(open));};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  render();
})();
