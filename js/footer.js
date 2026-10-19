/* footer.js — footer único para todas las páginas de FAR */
(function () {
  var pagina = location.pathname.split("/").pop() || "index.html";

  // index.html vive en la raíz y las demás páginas en /html/.
  // H = prefijo para llegar a las páginas de html/ · R = prefijo para llegar al index
  var enHtml = /\/html\/[^\/]*$/.test(location.pathname);
  var H = enHtml ? "" : "html/";
  var R = enHtml ? "../" : "";

  var servicios = [
    ["Desarrollo web", "web"],
    ["Sistemas a la medida", "sistemas"],
    ["Paneles y reportes", "reportes"],
    ["Aplicaciones móviles", "apps"],
    ["Automatización por WhatsApp", "whatsapp"],
    ["Integraciones y APIs", "integraciones"],
    ["Diseño UI/UX", "diseno"],
    ["Soporte y mantenimiento", "soporte"]
  ];

  var listaServicios = servicios.map(function (s) {
    return '<li><a href="' + H + 'servicios.html#' + s[1] + '">' + s[0] + '</a></li>';
  }).join("");

  function legal(href, texto) {
    return pagina === href
      ? '<li><b>' + texto + '</b></li>'
      : '<li><a href="' + H + href + '">' + texto + '</a></li>';
  }

  var linkCookies = pagina === "cookies.html"
    ? '<a href="#preferencias">Preferencias de cookies</a>'
    : '<a href="' + H + 'cookies.html">Gestionar cookies</a>';

  var html = `
<footer>
  <div class="wrap">
    <div class="fgrid">
      <div class="fbrand"><a href="${R}index.html" class="logo">FAR</a></div>
      <div>
        <h4>Servicios</h4>
        <ul id="footServicios">${listaServicios}</ul>
      </div>
      <div>
        <h4>Empresa</h4>
        <ul>
          <li><a href="${R}index.html#empresa">Quiénes somos</a></li>
          <li><a href="${R}index.html#proceso">Cómo trabajamos</a></li>
          <li><a href="${R}index.html#ejemplos">Ejemplos</a></li>
          <li><a href="${R}index.html#preguntas">Preguntas frecuentes</a></li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul>
          <li><a href="https://wa.me/18096937289?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="https://instagram.com/far_rep.dom" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="${H}servicios.html#pedir">Pedir una propuesta</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          ${legal("privacidad.html", "Política de privacidad")}
          ${legal("terminos.html", "Términos y condiciones")}
          ${legal("cookies.html", "Política de cookies")}
        </ul>
      </div>
    </div>

    <div class="fbottom">
      <div class="social">
        <a href="https://wa.me/18096937289" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg class="ico fill" viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"/></svg>
        </a>
        <a href="https://instagram.com/far_rep.dom" target="_blank" rel="noopener" aria-label="Instagram">
          <svg class="ico" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>
        </a>
      </div>
      <div class="copy">
        <b>FAR © 2024-2026</b>
        ${linkCookies}
      </div>
    </div>
  </div>
</footer>`;

  var destino = document.getElementById("footer") || document.querySelector("footer");
  if (destino) destino.outerHTML = html;
})();