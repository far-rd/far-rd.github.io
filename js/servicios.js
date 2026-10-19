(function () {
  const WA = '18096937289';
  const wa = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  const $ = id => document.getElementById(id);
  const num = i => String(i + 1).padStart(2, '0');

  const CATS = {
    web: 'Web',
    sistemas: 'Sistemas',
    apps: 'Apps',
    automatizacion: 'Automatización',
    diseno: 'Diseño',
    soporte: 'Soporte'
  };

  /* ---------- Ejemplos visuales (CSS). Para usar una imagen real, agrega img:'img/tu-foto.jpg' al servicio ---------- */
  const win = inner => `<div class="sv-win"><div class="sv-dots"><i></i><i></i><i></i></div><div class="sv-body">${inner}</div></div>`;

  const M = {
    web: win(`<div class="sv-ln dk" style="width:62%"></div><div class="sv-ln" style="width:88%"></div><div class="sv-ln" style="width:70%"></div><div class="sv-btn"></div><div class="sv-bx"><i></i><i></i><i></i></div>`),

    sistemas: `
      <div class="tr head"><span>Pedido</span><span>Estado</span></div>
      <div class="tr"><span>#1042 · Camisetas x24</span><em>En producción</em></div>
      <div class="tr"><span>#1041 · Tazas x12</span><em class="low">Listo</em></div>
      <div class="tr"><span>#1040 · Gorras x6</span><em>Entregado</em></div>`,

    reportes: `
      <div class="kpis">
        <div><small>Ventas</small><strong>RD$ 48k</strong></div>
        <div><small>Pedidos</small><strong>124</strong></div>
        <div><small>Por cobrar</small><strong>12</strong></div>
      </div>
      <div class="sv-bars">
        <span style="--h:40%"></span><span style="--h:58%"></span><span style="--h:46%"></span><span style="--h:72%"></span><span class="on" style="--h:95%"></span><span style="--h:64%"></span><span style="--h:80%"></span>
      </div>`,

    apps: `
      <div class="sv-ph">
        <div class="sv-ln dk" style="width:55%"></div>
        <div class="sv-tile"></div>
        <div class="sv-tile on"></div>
        <div class="sv-tile"></div>
      </div>`,

    whatsapp: `
      <div class="wa">
        <div class="wa-h"><span class="wa-dot"></span>Tu negocio</div>
        <p class="wa-m">Recibimos tu pedido <b>#1042</b>.<small>9:02 am</small></p>
        <p class="wa-m">Ya está en producción.<small>11:40 am</small></p>
        <p class="wa-m">¡Listo! Ya puedes retirarlo.<small>3:15 pm</small></p>
      </div>`,

    integraciones: `
      <div class="sv-flow"><span class="dk">Tu sistema</span><i></i><span>WhatsApp</span></div>
      <div class="sv-flow"><span class="dk">Tu sistema</span><i></i><span>Excel</span></div>
      <div class="sv-flow"><span class="dk">Tu sistema</span><i></i><span>Correo</span></div>`,

    diseno: win(`<div class="sv-bx"><i></i><i></i><i></i></div><div class="sv-ln" style="width:55%"></div><div class="sv-ln" style="width:80%"></div>`) +
      `<div class="sv-sw"><i></i><i></i><i></i><i></i></div>`,

    soporte: `
      <div class="tr head"><span>Solicitud</span><span>Estado</span></div>
      <div class="tr"><span>Ajuste en factura</span><em class="low">Resuelto</em></div>
      <div class="tr"><span>Nuevo reporte mensual</span><em>En proceso</em></div>
      <div class="tr"><span>Cambio de logo</span><em class="low">Resuelto</em></div>`
  };

  /* ---------- Servicios ---------- */
  const SV = [
    { id:'web', cat:'web', tab:'Web', name:'Desarrollo web',
      intro:'Una página que presenta tu negocio con claridad, para que tus clientes te encuentren, entiendan qué haces y te contacten sin complicarse.',
      incluye:['Diseño pensado para tu marca','Se adapta a celular, tablet y computadora','Botón directo a tu WhatsApp','Textos y secciones claras, fáciles de leer'],
      ideal:['Negocios nuevos','Servicios profesionales','Marcas personales'], mock:M.web },

    { id:'sistemas', cat:'sistemas', tab:'Sistemas', name:'Sistemas a la medida',
      intro:'Un sistema construido según cómo trabaja tu negocio, no al revés. Todo lo que hoy llevas en cuadernos, Excel o mensajes, ordenado en un solo lugar.',
      incluye:['Control de pedidos y de inventario','Clientes, cobros y facturación','Usuarios con distintos permisos','Acceso desde computadora o celular'],
      ideal:['Talleres y producción','Tiendas y distribuidores','Negocios con varios empleados'], mock:M.sistemas },

    { id:'reportes', cat:'sistemas', tab:'Reportes', name:'Paneles y reportes',
      intro:'Convertimos tus datos en un panel fácil de leer: ventas, pedidos, cobros y lo que necesites ver de un vistazo, sin armar tablas a mano.',
      incluye:['Resumen del día, la semana y el mes','Gráficas simples y fáciles de entender','Reportes que puedes descargar','Datos conectados con tu sistema actual'],
      ideal:['Dueños que quieren decidir con datos','Administración y contabilidad','Negocios con varios puntos de venta'], mock:M.reportes },

    { id:'apps', cat:'apps', tab:'Apps', name:'Aplicaciones móviles',
      intro:'Una app pensada para una tarea concreta: que tu cliente pida o consulte algo, o que tu equipo trabaje desde la calle.',
      incluye:['Pantallas claras y rápidas','Cuentas de usuario y notificaciones','Conexión con tu sistema o tus datos','Orientación para publicarla en las tiendas de apps'],
      ideal:['Equipos que trabajan en campo','Servicios con clientes frecuentes','Negocios con pedidos o citas'], mock:M.apps },

    { id:'whatsapp', cat:'automatizacion', tab:'WhatsApp', name:'Automatización por WhatsApp',
      intro:'Tus clientes se enteran del estado de su pedido sin que tengas que escribirles uno por uno. Los mensajes salen solos cuando algo cambia.',
      incluye:['Aviso cuando el pedido cambia de estado','Respuestas automáticas a preguntas frecuentes','Recordatorios de cita o de pago','Conexión con tu sistema de pedidos'],
      ideal:['Negocios con pedidos','Servicios con citas','Quien responde lo mismo cada día'], mock:M.whatsapp },

    { id:'integraciones', cat:'automatizacion', tab:'Integraciones', name:'Integraciones y APIs',
      intro:'Si ya usas varias herramientas y pasas la información de una a otra a mano, las conectamos para que lo hagan solas.',
      incluye:['Conexión entre tus sistemas y servicios','Datos que se envían solos, sin copiar y pegar','Importar y exportar desde Excel','Revisión previa de qué se puede conectar'],
      ideal:['Negocios con varias herramientas','Equipos que copian datos a mano','Quien quiere automatizar sin cambiar todo'], mock:M.integraciones },

    { id:'diseno', cat:'diseno', tab:'Diseño', name:'Diseño UI/UX',
      intro:'Antes de programar te mostramos cómo se va a ver y cómo se va a usar, para que ajustes lo que quieras sin perder tiempo.',
      incluye:['Boceto de las pantallas antes de construir','Diseño limpio acorde a tu marca','Pensado para que cualquiera lo use sin explicación','Ajustes contigo antes de programar'],
      ideal:['Ideas que aún no están claras','Rediseño de algo que ya existe','Quien quiere ver antes de decidir'], mock:M.diseno },

    { id:'soporte', cat:'soporte', tab:'Soporte', name:'Soporte y mantenimiento',
      intro:'Tu proyecto no se queda solo cuando termina. Seguimos disponibles para resolver dudas, corregir cosas y agregar lo nuevo que vayas necesitando.',
      incluye:['Respuesta a dudas y problemas','Ajustes y mejoras sobre lo ya hecho','Nuevas funciones cuando tu negocio crezca','Revisión de que todo siga funcionando'],
      ideal:['Clientes de FAR','Sistemas que ya tienes funcionando','Sitios que necesitan actualización'], mock:M.soporte }
  ];

  const visual = s => s.img ? `<img class="sv-img" src="${s.img}" alt="${s.name}" loading="lazy">` : s.mock;

  /* ---------- Render ---------- */
  $('svList').innerHTML = SV.map((s, i) =>
    `<a class="sv-li" href="#${s.id}"><b>${num(i)}</b><span>${s.name}</span><i>→</i></a>`).join('');

  $('svChips').innerHTML = SV.map(s =>
    `<a class="sv-chip" href="#${s.id}" data-id="${s.id}">${s.tab}</a>`).join('');

  $('svRows').innerHTML = SV.map((s, i) => `
    <section class="sv-row${i % 2 ? ' soft' : ''}" id="${s.id}">
      <div class="wrap">
        <div class="sv-in${i % 2 ? ' rev' : ''}">
          <div class="sv-tx">
            <span class="eyebrow rv">${num(i)} · ${CATS[s.cat]}</span>
            <h2 class="rv">${s.name}</h2>
            <p class="lead rv">${s.intro}</p>
            <ul class="sv-ul rv">${s.incluye.map(t => `<li>${t}</li>`).join('')}</ul>
            <div class="sv-tags rv">${s.ideal.map(t => `<span>${t}</span>`).join('')}</div>
            <div class="actions rv">
              <a class="btn" target="_blank" rel="noopener" href="${wa(`Hola, me gustaría información sobre el servicio de "${s.name}".`)}">Pedir este servicio</a>
            </div>
          </div>
          <div class="sv-vis rs"><div class="mk">${visual(s)}</div></div>
        </div>
      </div>
    </section>`).join('');

  $('navServicios').innerHTML =
    SV.map(s => `<a href="#${s.id}">${s.name}</a>`).join('') + `<a href="#catalogo">Ver todos</a>`;

  /* ---------- Menús (igual que el index) ---------- */
  const hdr = $('hdr');
  $('menuBtn').addEventListener('click', () => hdr.classList.toggle('open'));
  document.querySelectorAll('.dd').forEach(d => d.addEventListener('mouseleave', () => d.classList.remove('shut')));
  document.addEventListener('click', e => {
    const dd = e.target.closest('.dd');
    document.querySelectorAll('.dd.open').forEach(x => { if (x !== dd) x.classList.remove('open'); });
    if (e.target.closest('.dd > button')) { dd.classList.toggle('open'); return; }
    if (e.target.closest('.panel a')) { dd.classList.remove('open'); dd.classList.add('shut'); hdr.classList.remove('open'); }
    else if (e.target.closest('#menu a')) hdr.classList.remove('open');
  });

  /* ---------- Barra de servicios: se fija al bajar y marca dónde vas ---------- */
  const nav = $('catalogo'), navIn = $('svNavIn'), chips = $('svChips');
  const rows = [...document.querySelectorAll('.sv-row')];
  const chipEls = [...chips.querySelectorAll('.sv-chip')];
  let current = null, ticking = false;

  function update() {
    ticking = false;
    const hh = hdr.offsetHeight;
    hdr.classList.toggle('scrolled', scrollY > 8);
    navIn.style.setProperty('--hh', hh + 'px');

    const stuck = nav.getBoundingClientRect().top <= hh;
    const past = rows[rows.length - 1].getBoundingClientRect().bottom < hh + navIn.offsetHeight;
    navIn.classList.toggle('stuck', stuck);
    navIn.classList.toggle('gone', stuck && past);

    const line = hh + navIn.offsetHeight + 60;
    let active = null;
    rows.forEach(r => { if (r.getBoundingClientRect().top <= line) active = r.id; });
    if (past) active = null;

    if (active !== current) {
      current = active;
      chipEls.forEach(c => c.classList.toggle('on', c.dataset.id === active));
      const on = chips.querySelector('.sv-chip.on');
      if (on) chips.scrollTo({ left: on.offsetLeft - (chips.clientWidth - on.offsetWidth) / 2, behavior: 'smooth' });
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);
  update();

  /* ---------- "No veo lo que busco" ---------- */
  const ta = $('svIdea'), hint = $('svHint');
  const hintDefault = hint.textContent;

  document.querySelectorAll('[data-idea]').forEach(b => b.addEventListener('click', () => {
    const t = b.dataset.idea;
    ta.value = ta.value.trim() ? ta.value.trim() + ' ' + t : t;
    hint.textContent = hintDefault;
    ta.focus();
  }));

  $('svSend').addEventListener('click', () => {
    const v = ta.value.trim();
    if (!v) {
      hint.textContent = 'Escribe tu idea primero, aunque sea en una línea.';
      ta.focus();
      return;
    }
    hint.textContent = hintDefault;
    window.open(wa(`Hola, tengo una idea que no vi en su lista de servicios:\n\n${v}\n\n¿Se podría hacer?`), '_blank', 'noopener');
  });

  /* ---------- Cuadrícula del hero que sigue al cursor ---------- */
  const hero = $('inicio'), gb = $('gridbg');
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    gb.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    gb.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  /* ---------- Aparición al hacer scroll ---------- */
  document.querySelectorAll('.sv-tx').forEach(t =>
    [...t.children].forEach((c, i) => c.style.setProperty('--d', (i * 70) + 'ms')));
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('.rv,.rl,.rr,.rs').forEach(el => io.observe(el));
})();