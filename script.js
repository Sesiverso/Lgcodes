document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_odoytvp', 'template_fg9ijtm', this)
        .then(function() {
            alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
        }, function(error) {
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        });
});
