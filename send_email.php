<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];
    $servico = $_POST['servico'];

    $to = "luizguilhermevalentinereis@gmail.com";
    $subject = "Novo Orçamento Recebido - $servico";
    $body = "
        Nome: $nome\n
        E-mail: $email\n
        Telefone: $telefone\n
        Serviço Escolhido: $servico\n
        Mensagem:\n$mensagem
    ";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Orçamento enviado com sucesso!";
    } else {
        echo "Erro ao enviar orçamento. Tente novamente mais tarde.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
