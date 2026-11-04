'use strict';
const KEY='uveg_reto2_tareas_v1';
const form=document.getElementById('taskForm');
const field=document.getElementById('task');
const list=document.getElementById('tasks');
const empty=document.getElementById('empty');
const count=document.getElementById('count');
let tasks=[];
try{const stored=JSON.parse(localStorage.getItem(KEY)||'[]');if(Array.isArray(stored))tasks=stored.filter(t=>t&&typeof t.text==='string'&&typeof t.done==='boolean').slice(0,200)}catch(e){tasks=[]}
function save(){try{localStorage.setItem(KEY,JSON.stringify(tasks))}catch(e){console.warn('No se pudo guardar localmente')}}
function render(){list.replaceChildren();tasks.forEach((task,i)=>{const li=document.createElement('li');if(task.done)li.className='done';const check=document.createElement('input');check.type='checkbox';check.checked=task.done;check.setAttribute('aria-label','Completar '+task.text);check.addEventListener('change',()=>{tasks[i].done=check.checked;save();render()});const span=document.createElement('span');span.textContent=task.text;const remove=document.createElement('button');remove.textContent='Eliminar';remove.setAttribute('aria-label','Eliminar '+task.text);remove.addEventListener('click',()=>{tasks.splice(i,1);save();render()});li.append(check,span,remove);list.append(li)});const n=tasks.filter(t=>!t.done).length;count.textContent=n+' '+(n===1?'pendiente':'pendientes');empty.hidden=tasks.length>0}
form.addEventListener('submit',e=>{e.preventDefault();const text=field.value.trim();if(!text)return;tasks.push({text:text.slice(0,100),done:false});field.value='';save();render();field.focus()});document.getElementById('clear').addEventListener('click',()=>{tasks=tasks.filter(t=>!t.done);save();render()});render();
