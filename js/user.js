/*-------------------------------------------
 @Nombre:    Login de acceso
 @Descripción: Ejecuta el logueo del usuario
 @Argumentos: Ninguno
 @Ret: Redirecciona hacia home
 ---------------------------------------------*/
function login() {
    var user = $('#username').val();
    var pass = $('#password').val();

    if (user == '' || pass == '') {
        new PNotify({
            title: 'Error en la conexi&oacute;n',
            text: 'Los campos usuario y contrase&ntilde;a no pueden estar vacios.',
            type: 'error'
        });
    }  else {
        $.ajax({
            url: 'http://lit-woodland-9635.herokuapp.com/login_artista/' + user + '/' + pass ,
            type: 'GET',
            callback: 'None',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (json) {
                var contenido = json.mensaje;
                if (json.content == 'OK') {

                    sessvars.sesion = contenido.sesion;
                    sessvars.username = contenido.username;
                    sessvars.iduser = contenido.id;
                    sessvars.codartista = contenido.codartista;
                    sessvars.correoe = contenido.correoe;
                    sessvars.activo = contenido.activo
                    sessvars.apellidos = contenido.apellidos
                    sessvars.ciudad = contenido.ciudad
                    sessvars.codigopostal = contenido.codigopostal
                    sessvars.connect = contenido.connect
                    sessvars.direccion = contenido.direccion
                    sessvars.estadosuscripcion = contenido.estadosuscripcion
                    sessvars.nombre = contenido.nombre
                    sessvars.pais = contenido.pais
                    sessvars.sesion = contenido.sesion
                    sessvars.sesionactiva = contenido.sesionactiva
                    sessvars.telefono = contenido.telefono
                    sessvars.ultimoaccesofecha = contenido.ultimoaccesofecha
                    sessvars.ultimoaccesoip = contenido.ultimoaccesoip

                    sessvars.tipouser = 'cliente';

                    location.href='home.html';

                } else {

                     new PNotify({
                        title: 'Error en la identificación',
                        text: 'Compruebe los valores de usuario y/o contraseña',
                        type: 'error'
                    });
                }
            },
            error: function (jqHXR, status, error) {
                console.log(status + ' ' + error);
            }
        });
    }
}
