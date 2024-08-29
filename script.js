// Inicialize o EmailJS com sua chave pública
(function() {
    emailjs.init("7mn4fzN7hjmzs5knD");
})();

// Função para enviar o formulário usando EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_odoytvp';
    const templateID = 'template_fg9ijtm';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
        }, function(error) {
            console.log('Erro:', error);
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        });
});
