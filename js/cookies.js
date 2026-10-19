(function(){
  const GA_ID = 'G-XXXXXXXXXX';   // <- pon aquí tu ID de Google Analytics
  const KEY = 'far_cookies';
  // index.html está en la raíz y cookies.html en /html/
  const P = /\/html\/[^\/]*$/.test(location.pathname) ? '' : 'html/';
  let loaded = false;

  function get(){ try{ return JSON.parse(localStorage.getItem(KEY)); }catch(e){ return null; } }

  function apply(p){
    if(p && p.analytics && !loaded && GA_ID.indexOf('XXXX') < 0){
      loaded = true;
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', GA_ID);
    }
  }

  function save(p){
    try{ localStorage.setItem(KEY, JSON.stringify(p)); }catch(e){}
    apply(p);
    const b = document.getElementById('cb');
    if(b) b.remove();
  }

  window.farCookies = { get, save };

  const saved = get();
  apply(saved);

  // Banner: solo si no ha elegido y no está en la página de cookies
  if(!saved && !document.getElementById('c-save')){
    document.addEventListener('DOMContentLoaded', function(){
      const b = document.createElement('div');
      b.className = 'cb';
      b.id = 'cb';
      b.innerHTML =
        '<p>Usamos cookies para que la página funcione y para contar cuántas personas nos visitan. Tú decides cuáles permitir. <a href="' + P + 'cookies.html#preferencias">Más info</a></p>' +
        '<div class="cb-a">' +
          '<button type="button" class="btn sm" id="cb-ok">Aceptar</button>' +
          '<button type="button" class="btn sm line" id="cb-no">Rechazar</button>' +
          '<a href="' + P + 'cookies.html#preferencias" class="btn sm line">Configurar</a>' +
        '</div>';
      document.body.appendChild(b);
      document.getElementById('cb-ok').onclick = () => save({analytics:true, marketing:true});
      document.getElementById('cb-no').onclick = () => save({analytics:false, marketing:false});
    });
  }
})();