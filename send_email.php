<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $servico = $_POST['servico'];
    $descricao = $_POST['descricao'];
    $orcamento = $_POST['orcamento'];

    $to = "luizguilhermevalentinereis@gmail.com";
    $subject = "Novo Orçamento Recebido - LGCodes";
    $message = "
    Nome: $nome\n
    Email: $email\n
    Telefone: $telefone\n
    Serviço Desejado: $servico\n
    Descrição do Projeto: $descricao\n
    Orçamento Estimado: R$$orcamento\n
    ";
    $headers = "From: $email";

    // Função para enviar o email
    if (mail($to, $subject, $message, $headers)) {
        echo "<h2>Orçamento enviado com sucesso!</h2>";
    } else {
        echo "<h2>Erro ao enviar o orçamento. Tente novamente mais tarde.</h2>";
    }
}
?>
