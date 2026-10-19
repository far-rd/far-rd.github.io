  const S = [
    { id:'web', name:'Desarrollo web', short:'Tu negocio en internet, con una página rápida que se ve bien en cualquier pantalla.',
      icon:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>' },
    { id:'sistemas', name:'Sistemas a la medida', short:'Deja los cuadernos y el Excel: inventario, facturación y pedidos en un solo lugar.',
      icon:'<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"/>' },
    { id:'apps', name:'Aplicaciones móviles', short:'Apps fáciles de usar, para tus clientes o para tu equipo.',
      icon:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>' },
    { id:'whatsapp', name:'Automatización por WhatsApp', short:'Avisos automáticos a tus clientes y tus herramientas conectadas, sin que tengas que escribir uno por uno.',
      icon:'<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>' },
    { id:'soporte', name:'Soporte y mantenimiento', short:'Ajustes, mejoras y ayuda cuando la necesites, incluso después de la entrega.',
      icon:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6z"/>' },
    { id:'diseno', name:'Diseño UI/UX', short:'Pantallas claras y bonitas, pensadas para que todo se entienda a la primera.',
      icon:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>' }
  ];

  // Página de servicios
  const SERVICES_URL = 'html/servicios.html';

  // Servicios: tarjetas, menú y footer (cada uno lleva a su sección en servicios.html)
  document.getElementById('cards').innerHTML = S.map(s =>
    `<div class="rv"><a class="card" href="${SERVICES_URL}#${s.id}">
      <svg class="ico" viewBox="0 0 24 24">${s.icon}</svg>
      <h3>${s.name}</h3><p>${s.short}</p><span class="more">Descúbrelo →</span></a></div>`).join('');
  const NAV = [
  ['web', 'Desarrollo web'],
  ['sistemas', 'Sistemas a la medida'],
  ['reportes', 'Paneles y reportes'],
  ['apps', 'Aplicaciones móviles'],
  ['whatsapp', 'Automatización por WhatsApp'],
  ['integraciones', 'Integraciones y APIs'],
  ['diseno', 'Diseño UI/UX'],
  ['soporte', 'Soporte y mantenimiento']
];
document.getElementById('navServicios').innerHTML = NAV.map(n => `<a href="${SERVICES_URL}#${n[0]}">${n[1]}</a>`).join('') + `<a href="${SERVICES_URL}">Ver todos</a>`;

  // Mientras no exista la web de servicios, las tarjetas no hacen nada
  if(!SERVICES_URL){
    document.getElementById('cards').addEventListener('click', e => { if(e.target.closest('.card')) e.preventDefault(); });
  }

  // Menús
  const hdr = document.getElementById('hdr');
  document.getElementById('menuBtn').addEventListener('click', () => hdr.classList.toggle('open'));
  document.querySelectorAll('.dd').forEach(d => d.addEventListener('mouseleave', () => d.classList.remove('shut')));
  document.addEventListener('click', e => {
    const dd = e.target.closest('.dd');
    document.querySelectorAll('.dd.open').forEach(x => { if(x !== dd) x.classList.remove('open'); });
    if(e.target.closest('.dd > button')) {
  if (dd.dataset.href && matchMedia('(hover: hover)').matches) { location.href = dd.dataset.href; return; }
  dd.classList.toggle('open'); return;
}
    if(e.target.closest('.panel a')){ dd.classList.remove('open'); dd.classList.add('shut'); hdr.classList.remove('open'); }
    else if(e.target.closest('#menu a')) hdr.classList.remove('open');
  });

  // Scroll: barra de progreso, borde del header y contenedor expansible (se abre y se cierra)
  const ex = document.querySelector('[data-expand]');
  const exTitle = ex.querySelector('h2');
  let isOpen = false;
  function onScroll(){
    const h = document.documentElement, vh = innerHeight;
    hdr.classList.toggle('scrolled', scrollY > 8);
    const top = exTitle.getBoundingClientRect().top;
    if(!isOpen && top < vh * .62){ isOpen = true; ex.classList.add('open'); }
    else if(isOpen && top > vh * .85){ isOpen = false; ex.classList.remove('open'); }
  }
  addEventListener('scroll', onScroll, {passive:true});
  addEventListener('resize', onScroll);
  onScroll();

  // Cuadrícula del hero que sigue al cursor
  const hero = document.getElementById('inicio'), gb = document.getElementById('gridbg');
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    gb.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    gb.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  // Aparición escalonada al hacer scroll
  document.querySelectorAll('[data-stagger]').forEach(g =>
    [...g.children].forEach((c, i) => c.style.setProperty('--d', (i * 90) + 'ms')));
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.rv,.rl,.rr,.rs').forEach(el => io.observe(el));