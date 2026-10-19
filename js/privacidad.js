(() => {
  const hdr    = document.getElementById('hdr');
  const layout = document.querySelector('.pv-layout');
  const aside  = document.getElementById('pvAside');
  const nav    = document.getElementById('pvNav');
  const index  = document.getElementById('pvIndex');
  const secs   = [...document.querySelectorAll('.pv-sec')];
  const movil  = matchMedia('(max-width:900px)');
  const TOP    = 96;   // distancia al borde superior (debajo del header)
  const GAP    = 24;   // aire mínimo antes del final del layout

  // Índice lateral generado desde los títulos de cada sección
  // (el bloque de contacto no es .pv-sec, por eso no aparece)
  secs.forEach(s => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = '#' + s.id;
    a.textContent = s.querySelector('h2').textContent;
    li.appendChild(a);
    index.appendChild(li);
  });
  const links = [...index.querySelectorAll('a')];

  function marcar(id){
    links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + id));
  }

  // Sidebar: arranca alineado con su columna, se fija en TOP al hacer scroll
  // y se detiene al final del layout para no tapar el footer
  function pvPlace(){
    if(movil.matches){
      nav.style.left = nav.style.width = nav.style.top = '';
      return;
    }
    const a = aside.getBoundingClientRect();
    const l = layout.getBoundingClientRect();
    let top = Math.max(TOP, a.top);
    const tope = l.bottom - nav.offsetHeight - GAP;
    if(top > tope) top = tope;
    nav.style.left  = a.left + 'px';
    nav.style.width = a.width + 'px';
    nav.style.top   = top + 'px';
  }

  function pvScroll(){
    hdr.classList.toggle('scrolled', scrollY > 8);
    pvPlace();
    // Al llegar al final de la página, activa la última sección
    if(innerHeight + scrollY >= document.documentElement.scrollHeight - 4){
      marcar(secs[secs.length - 1].id);
    }
  }
  addEventListener('scroll', pvScroll, {passive:true});
  addEventListener('resize', pvPlace);
  addEventListener('load', pvPlace);
  pvScroll();

  // Resalta en el índice la sección que se está leyendo
  const pvSpy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) marcar(e.target.id);
    });
  }, {rootMargin:'-20% 0px -70% 0px'});
  secs.forEach(s => pvSpy.observe(s));
})();