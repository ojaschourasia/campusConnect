const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let started=false;
/* ---------- intro: cursors build the site, spin, reveal ---------- */
(()=>{const c=$('#ic'),x=c.getContext('2d');let W,H,N=28,t0=performance.now(),fin=false;
const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight;T=W<600?7:3};let T;rs();addEventListener('resize',rs);
const col=['#6366F1','#10B981','#a5b4fc'],qs=['Ship it like it’s day one.','Great campuses are built by curious people.','Design is how it works.'];
const ez=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const IQ=['What if campus could think?','One app, every club','Ship it today','Zero missed events','Live data, no rumours','Design is how it works','Build for students','Make it feel alive','Think. Build. Win.'];
function tag(px,py,txt,cc){x.save();x.font='600 12px Space Grotesk,sans-serif';const w=x.measureText(txt).width+18;x.fillStyle=cc;x.beginPath();(x.roundRect||x.rect).call(x,px+14,py+22,w,22,11);x.fill();x.fillStyle='#fff';x.fillText(txt,px+23,py+37);x.restore()}
function ar(px,py,a,cc,s){x.save();x.translate(px,py);x.rotate(a);x.scale(s,s);x.fillStyle=cc;x.shadowColor=cc;x.shadowBlur=12;x.beginPath();x.moveTo(0,0);x.lineTo(0,18);x.lineTo(5,14);x.lineTo(9,22);x.lineTo(12,20);x.lineTo(8,13);x.lineTo(14,13);x.closePath();x.fill();x.restore()}
function wire(py){x.save();x.beginPath();x.rect(0,0,W,py);x.clip();x.strokeStyle='rgba(99,102,241,.7)';x.fillStyle='rgba(99,102,241,.07)';x.lineWidth=1.5;
const R=(a,b,w,h)=>{x.fillRect(a,b,w,h);x.strokeRect(a,b,w,h)};R(W*.04,20,W*.92,46);R(W*.08,H*.2,W*.45,28);R(W*.08,H*.2+44,W*.3,28);R(W*.08,H*.2+100,150,44);R(W*.58,H*.15,W*.34,H*.34);
for(let i=0;i<3;i++)R(W*.08+i*W*.3,H*.62,W*.26,H*.2);R(W*.04,H-50,W*.92,30);x.restore()}
const cu=$('#cu'),ip=$('#ip'),ib=$('#ib');let st=0;const BL=['Wiring up the clubs','Laying out the dashboard','Training the AI engine','Polishing every pixel','Deploying to the hills'],ipb=$('#ipb'),il=$('#il');let sp=0,lt=t0,lq=-1;window.playIntro=()=>{const I=$('#intro');I.classList.remove('x');I.style.display='';$('#ib').style.opacity=0;$('#iq').style.opacity=0;t0=performance.now();lt=t0;sp=0;lq=-1;fin=false;st=0;cu.style.clipPath='';ip.style.opacity=1;ib.style.transition='';requestAnimationFrame(fr)};
function fr(n){if(fin)return;const t=(n-t0)/1000,dt=(n-lt)/1000;lt=n;const pc=Math.min(100,t/6*100);ipb.style.width=pc+"%";il.textContent=BL[Math.min(4,(pc/20)|0)]+" · "+(pc|0)+"%";
if(t<2.9){x.clearRect(0,0,W,H);const py=ez(t/2.9)*(H+60);wire(py);
for(let i=0;i<N;i++){const k=Math.abs(i-N/2)*7,y=py-k-(i%4)*14,px=(i+.5)/N*W+Math.sin(py/45+i)*18;if(y>-20)ar(px,y,Math.sin(i)*.2,col[i%3],1)}}
else if(t<5.9){const u=t-2.9;x.fillStyle='rgba(11,15,25,.22)';x.fillRect(0,0,W,H);sp+=dt*(3+ez(u/3)*26);
const q=Math.min(2,Math.floor(u/1)),e=ez(cl(u/.8));if(q!=lq){lq=q;const el=$('#iq');el.style.opacity=0;setTimeout(()=>{el.textContent=qs[q];el.style.opacity=1},150)}
const R=Math.min(W,H)*.3,cx=W/2+Math.sin(u*3)*30,cy=H/2+Math.cos(u*2.3)*25;
for(let i=0;i<N;i++){const a=i/N*6.283+sp,r=R*(.55+.45*Math.sin(a*3+u*6))*(1+Math.sin(u*4+i)*.15),
sx=cx+Math.cos(a)*r*1.25,sy=cy+Math.sin(a)*r*.85,fx=(i+.5)/N*W,px=fx+(sx-fx)*e,py=H+(sy-H)*e;ar(px,py,a+1.57,col[i%3],1+Math.sin(a*2)*.3)}}
else if(t<7.3){const u=cl((t-5.9)/1.1);x.fillStyle='rgba(11,15,25,.3)';x.fillRect(0,0,W,H);$('#iq').style.opacity=0;$('#ib').style.opacity=1;$('#ib').firstChild.style.transform='scale('+(.6+ez(u)*.5)+')';
sp+=dt*30;for(let i=0;i<N;i++){const a=i/N*6.283+sp,r=Math.min(W,H)*.3+ez(u)*Math.max(W,H);ar(W/2+Math.cos(a)*r,H/2+Math.sin(a)*r,a+1.57,col[i%3],1.3)}
}else{const u=cl((t-7.3)/2.4),py=ez(u)*(H+80);if(!st){st=1;ib.style.transition='opacity .4s';ib.style.opacity=0;ip.style.opacity=0;const h=$('#top');h.classList.remove('in');start();void h.offsetWidth;h.classList.add('in')}
cu.style.clipPath='inset('+py+'px 0 0 0)';x.clearRect(0,0,W,H);const g=x.createLinearGradient(0,0,W,0);g.addColorStop(0,'rgba(99,102,241,0)');g.addColorStop(.5,'#818cf8');g.addColorStop(1,'rgba(16,185,129,0)');x.fillStyle=g;x.fillRect(0,py-1,W,3);
for(let i=0;i<N;i++){const k=Math.abs(i-N/2)*7,y=py-k-(i%4)*14,px=(i+.5)/N*W+Math.sin(py/45+i)*18;if(y>-20){ar(px,y,Math.sin(i)*.2,col[i%3],1);if(i%T==1&&y>0)tag(px,y,IQ[((i/T)|0)%IQ.length],col[i%3])}}if(u>=1)return end()}
requestAnimationFrame(fr)}
function end(){if(fin)return;fin=true;$('#intro').classList.add('x');setTimeout(()=>{$('#intro').style.display='none';start()},700)}
$('#sk').onclick=end;
if(matchMedia('(prefers-reduced-motion:reduce)').matches)end();else requestAnimationFrame(fr)})();

/* ---------- reveal, nav, effects ---------- */
function start(){if(started)return;started=true;
$$('[data-s]').forEach(s=>s.querySelectorAll('.r').forEach((e,i)=>e.style.transitionDelay=i*90+'ms'));
const io=new IntersectionObserver(es=>es.forEach(e=>{e.target.classList.toggle('in',e.isIntersecting);if(e.isIntersecting)e.target.querySelectorAll('[data-n]').forEach(cnt)}),{threshold:.12});
$$('[data-s]').forEach(s=>io.observe(s))}
function cnt(e){const to=+e.dataset.n,t0=performance.now();(function f(n){const p=Math.min(1,(n-t0)/1400);e.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}
const dr=$('#drawer'),dbk=$('#dbk'),od=()=>{dr.classList.add('o');dbk.classList.add('o')},cd=()=>{dr.classList.remove('o');dbk.classList.remove('o')};$('#hb').onclick=od;$('#dx').onclick=cd;dbk.onclick=cd;addEventListener('keydown',e=>{if(e.key=='Escape')cd()});
$$('[data-go]').forEach(a=>a.onclick=()=>{cd();const s=document.getElementById(a.dataset.go);s.scrollIntoView({behavior:'smooth'});s.classList.remove('in');setTimeout(()=>{void s.offsetWidth;s.classList.add('in');s.querySelectorAll('[data-n]').forEach(cnt)},600)});
addEventListener('scroll',()=>$('#pg').style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%');
addEventListener('pointermove',e=>{const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
document.addEventListener('pointermove',e=>{$$('.tilt').forEach(t=>{const b=t.getBoundingClientRect();if(e.clientX<b.left-30||e.clientX>b.right+30||e.clientY<b.top-30||e.clientY>b.bottom+30){t.style.transform='';return}const px=(e.clientX-b.left)/b.width-.5,py=(e.clientY-b.top)/b.height-.5;t.style.transform=`perspective(900px) rotateX(${-py*14}deg) rotateY(${px*18}deg) translateZ(10px) scale(1.03)`})});

/* ---------- 3D campus ---------- */
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,clp=(v,a,b)=>Math.min(b,Math.max(a,v));
const BD=[[40,40,80,80,90,'#6366F1'],[160,40,60,80,60,'#10B981'],[260,50,80,60,120,'#8b5cf6'],[50,170,60,60,70,'#f59e0b'],[150,160,100,60,50,'#22d3ee'],[290,160,60,100,95,'#6366F1'],[60,280,100,60,65,'#10B981'],[200,280,60,60,110,'#f59e0b'],[290,300,60,50,55,'#8b5cf6']];
const F=$('#isoF'),iso=$('#iso');let rz=35,rx=58,drag=0,lx=0,ly=0;
F.innerHTML=BD.map(b=>`<div class="b" style="left:${b[0]}px;top:${b[1]}px;width:${b[2]}px;height:${b[3]}px;--h:${b[4]};--d:${b[3]};--c:${b[5]}">${['t','n','s','e','w'].map(c=>`<i class="${c}"></i>`).join('')}</div>`).join('');
iso.addEventListener('pointerdown',e=>{drag=1;lx=e.clientX;ly=e.clientY;iso.style.cursor='grabbing'});
addEventListener('pointermove',e=>{if(!drag)return;rz+=(e.clientX-lx)*.5;if(e.pointerType=='mouse')rx=clp(rx-(e.clientY-ly)*.3,35,75);lx=e.clientX;ly=e.clientY});
['pointerup','pointercancel'].forEach(n=>addEventListener(n,()=>{drag=0;iso.style.cursor=''}));
(function l(){if(!drag&&!RM)rz+=.18;F.style.transform=`scale(${Math.min(1,iso.clientWidth/540)}) rotateX(${rx}deg) rotateZ(${rz}deg)`;requestAnimationFrame(l)})();
setInterval(()=>$$('#isoF .b').forEach((el,i)=>el.style.setProperty('--h',(BD[i][4]*(.6+.8*Z[i%8].v/100)).toFixed(0))),1200);
/* ---------- 3D gallery ---------- */
const GN=['Academic Block','Computer Centre','Sports Ground','Library','Hostels','Auditorium','Canteen'],GH=[250,270,160,220,200,290,30];
const hs=n=>{const v=Math.sin(n*127.1)*43758.5;return v-Math.floor(v)};
const bl=(x,w,h,c,sd)=>{let o=`<rect x="${x}" y="${190-h}" width="${w}" height="${h}" fill="${c}"/>`;for(let i=0;i<w/10-1;i++)for(let j=0;j<h/14-1;j++)o+=`<rect x="${x+6+i*10}" y="${190-h+8+j*14}" width="5" height="7" fill="${hs(sd+i*7+j*3)>.45?'#fde68a':'#1e293b'}" opacity=".9"/>`;return o};
const SC=[()=>bl(30,70,100,'#1e1b4b',1)+bl(110,90,130,'#312e81',2)+bl(210,60,80,'#1e1b4b',3),
()=>'<rect x="70" y="40" width="160" height="100" rx="8" fill="#0f172a" stroke="#6366F1" stroke-width="3"/><path d="M85 120L120 90L150 105L180 65L215 80" fill="none" stroke="#10B981" stroke-width="3"/><rect x="130" y="140" width="40" height="12" fill="#334155"/><rect x="240" y="110" width="30" height="30" rx="4" fill="#4338ca"/>',
()=>'<ellipse cx="150" cy="165" rx="130" ry="30" fill="#065f46" stroke="#fff" stroke-opacity=".5"/><path d="M150 135v60" stroke="#fff" opacity=".4"/><circle cx="150" cy="165" r="12" fill="none" stroke="#fff" opacity=".5"/><path d="M40 70L15 165H75zM260 70L235 165H295z" fill="#fde68a" opacity=".14"/><path d="M40 70v95M260 70v95" stroke="#94a3b8" stroke-width="4"/><rect x="28" y="62" width="24" height="8" fill="#fde68a"/><rect x="248" y="62" width="24" height="8" fill="#fde68a"/>',
()=>'<path d="M50 100L150 60L250 100Z" fill="#334155"/>'+bl(60,180,90,'#1e293b',4)+[0,1,2,3,4].map(i=>`<path d="M${77+i*34} 190v-26a8 8 0 0116 0v26" fill="#fde68a"/>`).join(''),
()=>bl(25,45,140,'#172554',5)+bl(85,45,110,'#1e3a8a',6)+bl(145,45,150,'#172554',7)+bl(205,45,120,'#1e3a8a',8),
()=>'<path d="M40 190V120Q150 40 260 120V190Z" fill="#3b0764"/><path d="M70 190V130Q150 70 230 130V190" fill="none" stroke="#a855f7" stroke-width="2"/><rect x="130" y="140" width="40" height="50" rx="4" fill="#fde68a"/>',
()=>bl(70,160,60,'#431407',9)+'<path d="M20 60Q150 105 280 60" fill="none" stroke="#fbbf24"/>'+[0,1,2,3,4,5,6].map(i=>`<circle cx="${20+i*43}" cy="${60+Math.sin(i/6*3.14)*34}" r="4" fill="#fbbf24"/>`).join('')];
function scene(i,p){const h=GH[i];let st='';for(let k=0;k<14;k++)st+=`<circle cx="${(hs(k+i)*300)|0}" cy="${(hs(k*3+i)*90)|0}" r="${(.6+hs(k)).toFixed(1)}" fill="#fff" opacity=".7"/>`;
return `<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="${p}${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${h},60%,11%)"/><stop offset="1" stop-color="hsl(${h},50%,27%)"/></linearGradient></defs><rect width="300" height="200" fill="url(#${p}${i})"/>${st}<circle cx="245" cy="42" r="16" fill="hsl(${h},85%,72%)" opacity=".9"/><path d="M0 165Q80 135 150 160T300 148V200H0Z" fill="hsl(${h},40%,14%)"/>${SC[i]()}</svg>`}
let gi=3,gx=null,gm=0;const G=$('#gal');
G.innerHTML=GN.map((n,i)=>`<div class="sc" data-g="${i}">${scene(i,'g')}<div class="absolute inset-x-0 bottom-0 h-16" style="background:linear-gradient(transparent,rgba(0,0,0,.78))"></div><b>${n}</b><small>Illustrated scene</small></div>`).join('');
$('#gd').innerHTML=GN.map((_,i)=>`<button class="dot" data-g="${i}" aria-label="Scene ${i+1}"></button>`).join('');
function gl(){const w=innerWidth>700?200:118;$$('#gal .sc').forEach((c,i)=>{const o=i-gi,a=Math.abs(o);c.style.transform=`translateX(calc(-50% + ${o*w}px)) translateZ(${-a*120}px) rotateY(${clp(-o*38,-52,52)}deg)`;c.style.opacity=a>3?0:1-a*.2;c.style.zIndex=9-a;c.style.pointerEvents=a>3?'none':'auto'});$$('#gd .dot').forEach((d,i)=>d.classList.toggle('on',i==gi));$('#gn').textContent=GN[gi]}
const gs=n=>{gi=clp(gi+n,0,6);gl()};gl();addEventListener('resize',gl);
G.addEventListener('pointerdown',e=>{gx=e.clientX;gm=0});
addEventListener('pointerup',e=>{if(gx==null)return;const d=e.clientX-gx;gx=null;if(Math.abs(d)>40){gm=1;gs(d<0?1:-1)}});
/* ---------- campuses ---------- */
const CP=[{tag:'Operational now',h:'Main Campus',d:'The working home of the institute: academic building, ECE labs, computer centre, library and study room, admin building, auditorium, faculty quarters, guest house, and hostels for boys and girls.',l:'Mantripukhri, Imphal',s:'13 acres',b:['Football field, volleyball court, open gym','Six boys’ hostels and one girls’ hostel','Speech recording room and research labs'],sc:[0,1,2]},
{tag:'Beside the IT cluster',h:'City Campus',d:'Mantripukhri sits next to the IT SEZ and the Software Technology Park, about 12 km from Imphal Airport. Students learn beside the region’s growing tech scene.',l:'Imphal 795002',s:'12 km from the airport',b:['B.Tech in CSE and ECE, with VLSI and Embedded Systems','PhD programmes in CSE, ECE and Humanities and Basic Sciences','Home to Codiq, Vidyut, Synapse, Web Technology and Cybersecurity clubs'],sc:[3,5,6]},
{tag:'Under development',h:'Senapati Campus',d:'The permanent campus is coming up on a scenic hill slope at Mayangkhang, off NH-2, and will be the long-term home of the institute.',l:'Mayangkhang, Senapati',s:'150 acres',b:['About 50 km from Imphal Airport','Planned eco-friendly buildings and high-speed internet','Designed to host the full range of academic programmes'],sc:[4,0,5]}];
let cp=0;
function cr(){const c=CP[cp];$$('#cpt .chip').forEach((b,i)=>b.classList.toggle('on',i==cp));
$('#cpp').innerHTML=`<div class="card p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center pop text-left"><div><span class="st s-Open">${c.tag}</span><h3 class="dsp text-2xl font-bold mt-3">${c.h}</h3><p class="text-slate-400 text-sm mt-3">${c.d}</p><div class="grid grid-cols-2 gap-3 mt-4 text-sm"><div class="bg-white/5 rounded-xl p-3"><small class="text-slate-400 block">Location</small>${c.l}</div><div class="bg-white/5 rounded-xl p-3"><small class="text-slate-400 block">Size</small>${c.s}</div></div><ul class="mt-4 space-y-1.5 text-sm text-slate-300">${c.b.map(x=>`<li class="flex gap-2"><i class="text-indigo-400 not-italic">◆</i>${x}</li>`).join('')}</ul></div><div class="relative h-64 md:h-72">${c.sc.map((n,k)=>`<div class="sc fy" style="width:62%;left:${[0,36,18][k]}%;top:${[30,0,92][k]}px;transform:none;animation-delay:${-k*1.5}s;z-index:${k};box-shadow:0 20px 50px -15px #000;cursor:default">${scene(n,'c'+k)}<b>${GN[n]}</b></div>`).join('')}</div></div>`}
cr();
document.addEventListener('click',e=>{if(gm){gm=0;return}let k;
if(k=e.target.closest('[data-gs]'))gs(+k.dataset.gs);
else if(k=e.target.closest('[data-g]')){gi=+k.dataset.g;gl()}
else if(k=e.target.closest('[data-cp]')){cp=+k.dataset.cp;cr()}});
/* ---------- live pulse (smooth) ---------- */
function cl(v,a,b){return Math.min(b,Math.max(a,v))}
const Z=['Academic block','Labs','Library','Hostels','Playground','Auditorium','Canteen','Admin'].map(n=>({n,v:40,t:40+Math.random()*40})),RG=[['Wi-Fi load',30,'#6366F1'],['Power draw',40,'#f59e0b'],['Lab usage',50,'#10B981']].map(r=>({n:r[0],v:r[1],t:r[1],c:r[2]}));
const wv=(i,t,k)=>50+(14*Math.sin(i*.16+t*.7+k)+7*Math.sin(i*.37-t*1.1+k*2)+4*Math.sin(i*.8+t*1.9))*(1+.18*Math.sin(t*.5));
const sp=p=>{let d='M'+p[0][0]+' '+p[0][1];for(let i=0;i<p.length-1;i++){const a=p[i-1]||p[i],b=p[i],c=p[i+1],e=p[i+2]||c;d+=`C${(b[0]+(c[0]-a[0])/6).toFixed(1)} ${(b[1]+(c[1]-a[1])/6).toFixed(1)} ${(c[0]-(e[0]-b[0])/6).toFixed(1)} ${(c[1]-(e[1]-b[1])/6).toFixed(1)} ${c[0].toFixed(1)} ${c[1].toFixed(1)}`}return d};
const line=(t,k,m)=>sp([...Array(31)].map((_,i)=>[i*20,160-cl(wv(i,t,k),8,96)/100*144*m]));
$('#rings').innerHTML=RG.map(r=>`<div><svg viewBox="0 0 64 64" class="w-16 mx-auto -rotate-90"><circle cx="32" cy="32" r="26" fill="none" stroke="#1e2540" stroke-width="6"/><circle class="rc" cx="32" cy="32" r="26" fill="none" stroke="${r.c}" stroke-width="6" stroke-linecap="round"/></svg>${r.n} <b class="rn text-white"></b></div>`).join('');
$('#zones').innerHTML=Z.map(z=>`<div class="card p-4"><p class="text-xs text-slate-400">${z.n}</p><b class="dsp text-xl zn"></b><div class="bar mt-2"><i class="zb" style="transition:none"></i></div></div>`).join('');
$('#rb').innerHTML=[['Labs',2],['Wi-Fi',0],['Power',1]].map(r=>`<div class="mb-4 text-xs text-slate-400">${r[0]}<div class="bar mt-1"><i class="rbb" style="transition:none;background:${RG[r[1]].c}"></i></div></div>`).join('');
const E=id=>document.getElementById(id),pl=E('pl'),pa=E('pa'),da=E('da'),d1=E('d1'),d2=E('d2'),dS=E('dS'),rc=$$('.rc'),rn=$$('.rn'),zn=$$('.zn'),zb=$$('.zb'),rbb=$$('.rbb');
let tt=0,last=performance.now(),nx=0;
(function f(n){const dt=Math.min(.05,(n-last)/1000);last=n;tt+=dt;
if(n>nx){nx=n+1800;Z.forEach(z=>z.t=cl(z.t+(Math.random()-.5)*50,8,95));RG.forEach(r=>r.t=cl(r.t+(Math.random()-.5)*30,10,92))}
const k=1-Math.pow(.05,dt);Z.forEach(z=>z.v+=(z.t-z.v)*k);RG.forEach(r=>r.v+=(r.t-r.v)*k);
const a=line(tt,0,1);pl.setAttribute('d',a);pa.setAttribute('d',a+'L600 160L0 160Z');d1.setAttribute('d',a);da.setAttribute('d',a+'L600 160L0 160Z');d2.setAttribute('d',line(tt+2,1.7,.8));
RG.forEach((r,i)=>{rc[i].setAttribute('stroke-dasharray',(r.v*1.634).toFixed(1)+' 163.4');rn[i].textContent=Math.round(r.v)+'%'});
Z.forEach((z,i)=>{zn[i].textContent=Math.round(z.v)+'%';zb[i].style.width=z.v+'%';zb[i].style.background=z.v>75?'#f59e0b':'#10B981'});
[2,0,1].forEach((j,i)=>rbb[i].style.width=RG[j].v+'%');dS.textContent=Math.round(1862+Math.sin(tt*.9)*24).toLocaleString('en-IN');
requestAnimationFrame(f)})(performance.now());
$('#tl').innerHTML=[['2016 · The beginning','IIIT Senapati, Manipur is founded','Classes start with B.Tech in CSE and ECE from a temporary campus at Mantripukhri, Imphal.'],['Today · City campus','13 acres, labs, hostels and clubs','B.Tech in CSE and ECE with VLSI and Embedded Systems, plus PhD programmes.'],['Growing · Student life','Five clubs, one showdown','Cybersecurity, Codiq, Web Technology, Synapse and Vidyut compete on one day.'],['Next · Senapati','A 150-acre permanent campus','Being developed at Mayangkhang in Senapati district, the long-term home of the institute.']].map(t=>`<div class="r card p-5 ml-6 relative"><i class="absolute -left-[33px] top-6 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_14px_#10B981]"></i><p class="text-xs text-emerald-400">${t[0]}</p><h3 class="font-bold mt-1">${t[1]}</h3><p class="text-sm text-slate-400 mt-1">${t[2]}</p></div>`).join('');
$('#clubs').innerHTML=[['Cybersecurity Club','Capture the Flag','#22d3ee'],['Codiq Club','Competitive Programming','#34d399'],['Web Technology Club','UI Design','#a78bfa'],['Synapse Club','AI Quest','#f472b6'],['Vidyut Club','Competitive Electronics','#fbbf24']].map((c,i)=>`<div class="fy" style="animation-delay:${-i*1.1}s;animation-duration:${4+i*.6}s"><div class="tilt card p-5"><b style="color:${c[2]}">${c[0]}</b><p class="text-sm text-slate-300 mt-1">${c[1]}</p></div></div>`).join('');

/* ---------- CampusConnect prototype ---------- */
const NOW=new Date('2026-11-08T08:30'),CATS=['Technical','Cultural','Workshop','Competition','Seminar'],CLUBS=['Cybersecurity Club','Codiq Club','Web Technology Club','Synapse Club','Vidyut Club','Cultural Committee'];
const seed=[
[1,'Capture the Flag','Cybersecurity Club','Competition','2026-11-08T09:30','CSE Lab 2','2026-11-08T09:15',60,41,'Solve puzzles in cryptography, web and forensics. Teams of 1–2 race the clock for the whole registration pool.'],
[2,'Competitive Programming','Codiq Club','Competition','2026-11-08T09:30','Computer Lab 1','2026-11-08T09:15',80,56,'Algorithmic rounds from warm-up to hard. Fastest correct solutions win.'],
[3,'UI Design Sprint','Web Technology Club','Competition','2026-11-08T09:30','Design Studio','2026-11-08T09:15',50,38,'Design a polished, usable interface from a surprise brief.'],
[4,'AI Quest','Synapse Club','Technical','2026-11-08T09:30','Seminar Hall','2026-11-08T09:15',70,44,'Machine-learning puzzles and a model-building challenge.'],
[5,'Competitive Electronics','Vidyut Club','Competition','2026-11-08T09:30','Electronics Lab','2026-11-08T09:15',40,40,'Circuit debugging, design and a timed build.'],
[6,'Prompt Engineering Workshop','Synapse Club','Workshop','2026-11-14T14:00','Auditorium','2026-11-13T18:00',100,63,'Hands-on session on getting reliable results from language models.'],
[7,'Hill Night','Cultural Committee','Cultural','2026-11-21T18:30','Open Stage','2026-11-20T18:00',300,112,'Music, dance and food under the stars.'],
[8,'Careers in VLSI','Vidyut Club','Seminar','2026-11-27T11:00','Seminar Hall','2026-11-26T18:00',120,35,'Alumni and engineers on breaking into chip design.']].map(a=>({id:a[0],name:a[1],club:a[2],cat:a[3],date:a[4],venue:a[5],dl:a[6],cap:a[7],n:a[8],d:a[9]}));
let S;try{S=JSON.parse(localStorage.getItem('cc26'))}catch(e){}
S=S||{ev:seed,reg:[],role:'student',club:'Codiq Club'};let q='',cat='All';
const save=()=>{try{localStorage.setItem('cc26',JSON.stringify(S))}catch(e){}},fd=d=>new Date(d).toLocaleString('en-IN',{day:'2-digit',month:'short',year:'numeric',hour:'numeric',minute:'2-digit'});
const stat=e=>S.reg.includes(e.id)?'Registered':new Date(e.dl)<NOW?'Closed':e.n>=e.cap?'Full':'Open';
function toast(m){const t=$('#ts');t.textContent=m;t.classList.remove('opacity-0','translate-y-6');clearTimeout(t.h);t.h=setTimeout(()=>t.classList.add('opacity-0','translate-y-6'),2600)}
const cardH=e=>{const s=stat(e);return `<div class="r"><div class="tilt card p-5 cursor-pointer h-full" data-open="${e.id}"><div class="flex justify-between items-start gap-2"><span class="text-xs text-indigo-300">${e.cat}</span><span class="st s-${s}">${s}</span></div><h3 class="font-bold text-lg mt-2">${esc(e.name)}</h3><p class="text-sm text-slate-400">${esc(e.club)}</p><p class="text-sm mt-3">${fd(e.date)}</p><p class="text-sm text-slate-400">${esc(e.venue)}</p><div class="bar mt-4"><i style="width:${e.n/e.cap*100}%;background:${e.n>=e.cap?'#f59e0b':'#6366F1'}"></i></div><p class="text-xs text-slate-400 mt-1">${e.n}/${e.cap} registered</p></div></div>`};
function lists(){const m=S.ev.filter(e=>(cat=='All'||e.cat==cat)&&e.name.toLowerCase().includes(q.toLowerCase())),my=S.ev.filter(e=>S.reg.includes(e.id));
$('#grid').innerHTML=m.length?m.map(cardH).join(''):`<div class="card p-10 text-center text-slate-400 col-span-full">No events match “${esc(q)}”. Try another name or pick All.</div>`;
$('#mine').innerHTML=my.length?my.map(e=>`<div class="card p-4 flex justify-between items-center gap-3"><div><b>${esc(e.name)}</b><p class="text-xs text-slate-400">${esc(e.club)} · ${fd(e.date)}</p></div><button class="ghost text-sm" data-cancel="${e.id}">Cancel</button></div>`).join(''):`<div class="card p-8 text-center text-slate-400">You haven’t registered for anything yet. Open an event and press Register.</div>`;
$$('#grid .r').forEach((e,i)=>{e.style.transitionDelay=i*60+'ms';e.style.opacity=1;e.style.transform='none';e.style.filter='none'})}
function render(){$$('[data-role]').forEach(b=>b.classList.toggle('on',b.dataset.role==S.role));
if(S.role=='student'){$('#app').innerHTML=`<div class="flex flex-col md:flex-row gap-3 mb-4"><input id="q" placeholder="Search events by name" value="${esc(q)}" class="md:max-w-xs"><div class="flex gap-2 overflow-x-auto pb-1">${['All',...CATS].map(c=>`<button class="chip ${c==cat?'on':''}" data-cat="${c}">${c}</button>`).join('')}</div></div><div id="grid" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"></div><h3 class="dsp text-xl mt-10 mb-3">My registrations</h3><div id="mine" class="grid md:grid-cols-2 gap-3"></div>`;lists()}
else{const ev=S.ev.filter(e=>e.club==S.club);$('#app').innerHTML=`<div class="flex flex-col sm:flex-row gap-3 justify-between mb-4"><select id="oc" class="sm:max-w-xs">${CLUBS.map(c=>`<option ${c==S.club?'selected':''}>${c}</option>`).join('')}</select><button class="btn" data-new>Create event</button></div><div class="grid md:grid-cols-2 gap-4">${ev.length?ev.map(e=>{const s=new Date(e.dl)<NOW?'Closed':e.n>=e.cap?'Full':'Open';return `<div class="card p-5"><div class="flex justify-between"><h3 class="font-bold text-lg">${esc(e.name)}</h3><span class="st s-${s}">${s}</span></div><p class="text-sm text-slate-400">${fd(e.date)} · ${esc(e.venue)}</p><div class="flex items-end justify-between mt-4"><div><b class="dsp text-3xl text-emerald-400">${e.n}</b><span class="text-slate-400 text-sm"> / ${e.cap} registered</span></div><button class="ghost text-sm" data-edit="${e.id}">Edit</button></div><div class="bar mt-3"><i style="width:${e.n/e.cap*100}%;background:#10B981"></i></div></div>`}).join(''):`<div class="card p-10 text-center text-slate-400 md:col-span-2">${esc(S.club)} has no events yet. Press Create event to publish the first one.</div>`}</div>`}}
function modal(h){$('#mb').innerHTML=h;$('#md').classList.remove('hidden');$('#md').classList.add('flex')}
function closeM(){$('#md').classList.add('hidden');$('#md').classList.remove('flex')}
function detail(id){const e=S.ev.find(v=>v.id==id),s=stat(e);modal(`<div class="flex justify-between"><span class="st s-${s}">${s}</span><button data-x>✕</button></div><h3 class="dsp text-2xl font-bold mt-3">${esc(e.name)}</h3><p class="text-indigo-300 text-sm">${esc(e.club)} · ${e.cat}</p><p class="text-slate-300 mt-3 text-sm">${esc(e.d)}</p><dl class="grid grid-cols-2 gap-3 mt-5 text-sm"><div><dt class="text-slate-400">Date and time</dt><dd>${fd(e.date)}</dd></div><div><dt class="text-slate-400">Venue</dt><dd>${esc(e.venue)}</dd></div><div><dt class="text-slate-400">Register by</dt><dd>${fd(e.dl)}</dd></div><div><dt class="text-slate-400">Capacity</dt><dd>${e.cap} seats, ${e.cap-e.n} left</dd></div></dl><div class="bar mt-4"><i style="width:${e.n/e.cap*100}%;background:#6366F1"></i></div><p class="text-xs text-slate-400 mt-1">${e.n} registered</p><div class="mt-6">${s=='Registered'?`<button class="ghost w-full" data-cancel="${e.id}">Cancel registration</button>`:s=='Open'?`<button class="btn w-full" data-reg="${e.id}">Register</button>`:`<button class="ghost w-full opacity-60" disabled>Registration ${s.toLowerCase()}</button>`}</div>`)}
function form(id){const e=S.ev.find(v=>v.id==id)||{name:'',d:'',club:S.club,cat:'Technical',date:'',venue:'',dl:'',cap:50,n:0},f=(l,n,t,v)=>`<label class="text-sm text-slate-400 block">${l}<input name="${n}" type="${t}" value="${esc(v)}" required class="mt-1 text-white"></label>`;
modal(`<div class="flex justify-between"><h3 class="dsp text-xl font-bold">${id?'Edit event':'Create event'}</h3><button data-x>✕</button></div><form id="fm" data-id="${id||''}" class="grid gap-3 mt-4">${f('Event name','name','text',e.name)}<label class="text-sm text-slate-400 block">Description<textarea name="d" rows="3" required class="mt-1">${esc(e.d)}</textarea></label><label class="text-sm text-slate-400 block">Organising club<select name="club" class="mt-1 text-white">${CLUBS.map(c=>`<option ${c==e.club?'selected':''}>${c}</option>`).join('')}</select></label><label class="text-sm text-slate-400 block">Category<select name="cat" class="mt-1 text-white">${CATS.map(c=>`<option ${c==e.cat?'selected':''}>${c}</option>`).join('')}</select></label>${f('Date and time','date','datetime-local',e.date)}${f('Venue','venue','text',e.venue)}${f('Registration deadline','dl','datetime-local',e.dl)}${f('Maximum participants','cap','number',e.cap)}<button class="btn">${id?'Save changes':'Publish event'}</button></form>`)}
document.addEventListener('click',ev=>{const t=ev.target,g=a=>t.closest('['+a+']');let k;
if(k=g('data-role')){S.role=k.dataset.role;save();render()}
else if(k=g('data-cat')){cat=k.dataset.cat;render()}
else if(k=g('data-open'))detail(k.dataset.open)
else if(k=g('data-reg')){const e=S.ev.find(v=>v.id==k.dataset.reg);if(stat(e)=='Open'){S.reg.push(e.id);e.n++;save();toast('Registered for '+e.name+'. See you there!');detail(e.id);render()}}
else if(k=g('data-cancel')){const e=S.ev.find(v=>v.id==k.dataset.cancel);if(S.reg.includes(e.id)){S.reg=S.reg.filter(i=>i!=e.id);e.n--;save();toast('Registration cancelled for '+e.name);if(!$('#md').classList.contains('hidden'))detail(e.id);render()}}
else if(g('data-new'))form()
else if(k=g('data-edit'))form(k.dataset.edit)
else if(g('data-x')||t.id=='md')closeM()});
document.addEventListener('input',ev=>{if(ev.target.id=='q'){q=ev.target.value;lists()}});
document.addEventListener('change',ev=>{if(ev.target.id=='oc'){S.club=ev.target.value;save();render()}});
document.addEventListener('submit',ev=>{if(ev.target.id!='fm')return;ev.preventDefault();const f=Object.fromEntries(new FormData(ev.target)),id=ev.target.dataset.id;f.cap=Math.max(1,+f.cap);
if(new Date(f.dl)>new Date(f.date)){toast('Deadline must be before the event starts');return}
if(id){const e=S.ev.find(v=>v.id==id);if(f.cap<e.n){toast('Capacity can’t be lower than the '+e.n+' already registered');return}Object.assign(e,f);toast('Event updated: '+e.name)}
else{S.ev.push({...f,id:Date.now(),n:0});toast('Event created: '+f.name)}
S.club=f.club;save();closeM();render()});
render();
document.addEventListener('click',e=>{const k=e.target.closest('[data-cpgo]');
if(k){cd();cp=+k.dataset.cpgo;cr();const c=$('#campuses');c.scrollIntoView({behavior:'smooth'});c.classList.remove('in');setTimeout(()=>{void c.offsetWidth;c.classList.add('in')},600)}
else if(e.target.closest('[data-replay]')){cd();setTimeout(()=>{scrollTo({top:0,behavior:'instant'});window.playIntro()},350)}});
