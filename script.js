document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_odoytvp', 'template_fg9ijtm', this)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            alert('Ocorreu um erro ao enviar sua mensagem, tente novamente.');
        });
});
