emailjs.init("7mn4fzN7hjmzs5knD"); // Substitua pela sua chave pública

document.getElementById('orcamento-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const descricao = document.getElementById('descricao').value;

    emailjs.send("service_odoytvp", "template_fg9ijtm", {
        from_name: nome,
        from_email: email,
        service: servico,
        description: descricao
    })
    .then(function(response) {
        alert('Orçamento enviado com sucesso!');
    }, function(error) {
        console.error('Erro ao enviar o orçamento:', error);
        alert('Ocorreu um erro ao enviar o orçamento.');
    });
});
