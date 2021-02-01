<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

    $nome = addcslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['message']);

    $to = "miguelneto0019@gmail.com";
    $subject = "Sugestoes - Patronos";
    $body = "Nome: ".$nome."\r\nEmail: ".$email."\r\nMensagem: ".$mensagem;
    $header = "From:cilenesaturnino@gmail.com"."\r\n"."Reply to:".$email."\r\n"."X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){ // mail() retorna true ou false, se foi ou nao enviada com sucesso
        echo("Mensagem enviado com sucesso !");
    }else{
        echo("Sua mensagem não foi enviada ! Revise os dados preenchidos.");
    }
}

?>