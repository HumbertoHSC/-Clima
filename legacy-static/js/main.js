(function () {
  var WHATSAPP_NUMBER = '5581999999999'; // TODO: substituir pelo número real (com DDI+DDD)

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var body = document.body;
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Preenche automaticamente todos os links wa.me com o número configurado
  document.querySelectorAll('a[data-wa]').forEach(function (a) {
    var msg = a.getAttribute('data-wa-msg') || 'Olá! Vim pelo site e gostaria de solicitar um orçamento.';
    a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  });

  // Formulário de contato -> envia como mensagem estruturada via WhatsApp
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#f-name').value.trim();
      var phone = form.querySelector('#f-phone').value.trim();
      var service = form.querySelector('#f-service').value;
      var message = form.querySelector('#f-message').value.trim();
      var feedback = document.getElementById('form-feedback');

      if (!name || !phone) {
        feedback.textContent = 'Preencha nome e telefone para continuar.';
        feedback.classList.remove('ok');
        feedback.classList.add('show');
        return;
      }

      var text = 'Olá! Meu nome é ' + name +
        '.\nTelefone: ' + phone +
        '\nServiço de interesse: ' + service +
        (message ? '\nMensagem: ' + message : '');

      feedback.textContent = 'Obrigado! Vamos abrir o WhatsApp para concluir seu pedido de orçamento.';
      feedback.classList.add('ok', 'show');

      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text), '_blank');
      form.reset();
    });
  }

  // Ano dinâmico no rodapé
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
