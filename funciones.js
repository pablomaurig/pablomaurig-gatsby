(function(){
    $(".boton_envio").click(function() {
 
        var nombre = $(".nombre").val();
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            telefono = $(".telefono").val();
            mensaje = $(".mensaje").val();
 
        if (nombre == "") {
            $(".nombre").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();    
            return false;
        }else if(telefono == ""){
            $(".telefono").focus();
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre='+ nombre + '&email=' + email + '&telefono=' + telefono + '&mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "proceso.php",
                data: datos,
                success: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('El mensaje ha sido enviado!').addClass('msg_ok').animate({ 'opacity' : '1' }, 300);  
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Hubo un error al enviar el mensaje').addClass('msg_error').animate({ 'opacity' : '1' }, 300);                 
                }
            });
            return false;
        }
 
    });
})();
