/* Override de funciones de devoops.js */

/*-------------------------------------------
 Validación Formulario de Registro
 ---------------------------------------------*/
function formRegistro(){
    $('#registro').bootstrapValidator({
        message: 'Éste valor no es válido',
        fields: {
            usuario: {
                message: 'El usuario no es válido',
                validators: {
                    notEmpty: {
                        message: 'El usuario no puede estar vacío'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'El usuario debe tener entre 6 y 30 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'El usuario sólo puede contener caracteres alfanuméricos, puntos y guiones bajos'
                    }
                }
            },
            condiciones: {
                validators: {
                    notEmpty: {
                        message: 'Debe aceptar las condiciones de uso'
                    }
                }
            },
            correoe: {
                validators: {
                    notEmpty: {
                        message: 'El correo-e no puede estar vacío'
                    },
                    emailAddress: {
                        message: 'El correo-e no tiene un formato válido'
                    }
                }
            },

            telefono:{
                validators: {
                    digits: {
                        message: 'El teléfono sólo puede contener dígitos'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña no puede estar vacía'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: 'La contraseña y su confirmación no coinciden'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'La confirmación de contraseña no puede estar vacía'
                    },
                    identical: {
                        field: 'password',
                        message: 'La contraseña y su confirmación no coinciden'
                    }
                }
            }
        }
    });
}


/*-------------------------------------------
 Registro de usuario
 ---------------------------------------------*/
function registro(){

    var usuario = $('#usuario').val();
    if (!validarUsuario(usuario)){
        new PNotify({
            title : 'Error',
            text : '<b>Usuario</b>. Debe contener entre 6 y 30 caracteres.',
            type : 'error' });
        return false;
    }


    var pass = $('#password').val();
    var pass2 = $('#confirmPassword').val();
    if(!validarPass(pass, pass2)){
        new PNotify({
            title : 'Error',
            text : '<b>Contraseña</b> debe contener entre 6 y 30 caracteres, y coincidir los dos valores campos.',
            type : 'error' });
        return false;
    }


    var nombre = $('#nombre').val();
    if (!validarVacio(nombre)){
        new PNotify({
            title : 'Error',
            text : '<b>Nombre</b> es obligatorio.',
            type : 'error' });
        return false;
    }


    var apellidos = $('#apellidos').val();
    if (!validarVacio(apellidos)){
        new PNotify({
            title : 'Error',
            text : '<b>Apellidos</b> es obligatorio.',
            type : 'error' });
        return false;
    }


    var correoe = $('#correoe').val();
    if (!validarEmail(correoe)){
        new PNotify({
            title : 'Error',
            text : '<b>Correo-e</b> no tiene un formato válido.',
            type : 'error' });
        return false;
    }


    var telefono = $('#telefono').val();
    if (!validarVacio(telefono)){
        new PNotify({
            title : 'Error',
            text : '<b>Teléfono</b> es obligatorio.',
            type : 'error' });
        return false;
    }


    var empresa = $('#empresa').val();
    if (!validarVacio(empresa)){
        new PNotify({
            title : 'Error',
            text : '<b>Empresa</b> es obligatorio.',
            type : 'error' });
        return false;
    }

    var condiciones;
    if( $('#condiciones').is(':checked') ){
        condiciones = 't';
    } else {
        condiciones = 'f';

        new PNotify({
            title : 'Error',
            text : 'Debe aceptar las condiciones de uso.',
            type : 'error' });
        return false;

    }

    $.ajax({
        //url : './php/reg_temp.php',
        url : './php/reg_temp.php',
        type : 'POST',
        data : { funcion:'2', opcion:'1', usuario:usuario, pass:pass, nombre:nombre, apellidos:apellidos, correoe:correoe, telefono:telefono, empresa:empresa },
        dataType : 'json',
        success : function( json ){
            var content = json.content;
            if( json.status == 'OK' ){

                new PNotify({
                    title: 'Registro de usuario ',
                    text: 'Se ha registrado satisfactoriamente en nuestra plataforma. Accesa a la dirección de correo utilzada para el registro para verificar el alta.',
                    type: 'success'
                });

                setInterval(function(){
                    location.href='index.html';
                } ,3000);

            } else {
                new PNotify({
                    title : content.title,
                    text : content.text,
                    type : content.type });
            }
        },
        error : function( jqXHR, status, error ){
            console.log( status + ' ' + error );
        }
    });


}


/*-------------------------------------------
 Validación variable de sesión de Registro
 ---------------------------------------------*/
function validaSes(sessvars) {
    if (typeof sessvars.sesion == 'undefined'){
        location.href='./index.html';
    } else {
        load_Usuario(sessvars);
        $(document).ready( function(){

            //sessvars.idIntervalo = setInterval( hacerPing , 10000 );
        });
    }
}

function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}


/*------------------------------------
 Validaciones
 ------------------------------------*/
function validarUsuario(cadena){
    if( cadena.match( /^[a-zA-Z0-9$@#%]+$/ ) && cadena.length >= 6 && cadena.length <= 12){
        return true;
    }
    return false;
}

function validarContrasena( cadena ){
    if( cadena.match( /^[a-zA-Z0-9$@#%]+$/ ) && cadena.length >= 6 && cadena.length <= 12){
        return true;
    }
    return false;
}

function validarPass( cadena1, cadena2 ){
    if( validarContrasena(cadena1) && validarContrasena(cadena2) && cadena1 === cadena2){
        return true;
    }
    return false;
}

function validarVacio(valor){
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ){
        return false;
    } else {
        return true;
    }
}


function validarServicio(valor){
    expr = /^([a-zA-Z0-9_\-])/;
    if ( !expr.test(valor) ){
        return false;
    } else {
        return true;
    }


}


function validarServicioExiste(valor, idservicio){
    var ret;

    $.ajax({
        url: './php/servicio_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '11', value: valor, value1: idservicio},
        dataType: 'json',
        async: false, // La petición es síncrona
        cache: false,
        success: function (json) {
            if (json.status == 'BAD') {
                ret =  false;
            } else {
                ret = true;
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error);
        }
    });
    return ret;
}



function validarAlfanumerico( cadena ){
    return cadena.match( /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ0-9]+$/ );
}

function validarTextoConEspacio( cadena ){
    return cadena.match( /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ0-9]+\s?[a-záéíóúüñA-ZÁÉÍÓÚÜÑ0-9]+$/ );
}

function validarDate( cadena ){
    return cadena.match( /^[0-9]{4}-{1}(0{1}[1-9]{1})|(1{1}[0-2]{1})-{1}(0{1}[1-9])|([12]{1}[0-9]{1})|(30)|(31)$/ );
}

function validarTime( cadena ){
    return cadena.match( /^([01]{1}[0-9]{1})|(2{1}[0-3]{1}):{1}[0-5]{1}[0-9]{1}:{1}[0-5]{1}[0-9]{1}$/ );
}

function validarNumeros( cadena ){
    return cadena.match( /^[0-9]+$/ );
}

function validarDouble( cadena ){
    return cadena.match( /^([0-9]+.?[0-9]+)|([0-9]+)$/ );
}

function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) ){
        return false
    } else {
        return true;
    }


}



function replaceAll( text, busca, reemplaza ){
    while (text.toString().indexOf(busca) != -1)
        text = text.toString().replace(busca,reemplaza);
    return text;
}



function seleccionadosTabla(nombreTabla){

    var valores = [];

    $(nombreTabla).find(':input').each(function() {
        var elemento = this;
        if (elemento.checked) {
            valores.push(elemento.value);
        }
    });
    return valores;


}


//// **************************************** //////
//// **********  CARGA DE ARCHIVOS ********   //////

function subirArchivos() {
    $("#archivo").upload('./php/subir_archivo.php',
        {
            nombre_archivo: $("#nombre_archivo").val(),
            user:sessvars.iduser,
            ruta: $("#rutarepository").val()
        },
        function(respuesta) {
            //Subida finalizada.
            $("#spin_cargando").show();

            if (respuesta.estado === 'OK') {
                $("#spin_cargando").hide(500);

                new PNotify({
                    title : 'Añadir archivo',
                    text : 'El archivo ' +  respuesta.name + ' se ha añadido.',
                    type : 'success'});

                $("#nombre_archivo, #archivo").val('');
            } else {
                $("#spin_cargando").hide(500);

                new PNotify({
                    title : 'Añadir archivo',
                    text : 'Error al añadir el archivo.',
                    type : 'error'});

            }
            mostrarArchivos();

        });
}
function eliminarArchivos(archivo) {

    var ruta = $('#rutarepository').val();

    new PNotify({
        title: 'Cancelar',
        text: '¿Está seguro de que desea eliminar el archivo?',
        icon: 'glyphicon glyphicon-question-sign',
        hide: false,
        confirm: {
            confirm: true
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    }).get().on('pnotify.confirm', function () {


            $.ajax({
                url: './php/eliminar_archivo.php',
                type: 'POST',
                timeout: 10000,
                data: {archivo: archivo, ruta: ruta},
                error: function () {
                    mostrarRespuesta('Error al intentar eliminar el archivo.', false);
                },
                success: function (respuesta) {
                    if (respuesta == 1) {
                        mostrarRespuesta('El archivo ha sido eliminado.', true);
                    } else {
                        mostrarRespuesta('Error al intentar eliminar el archivo.', false);
                    }
                    mostrarArchivos();
                }
            });
        });
}

function eliminarArchivosLimpiarComunicado(rutaCarpeta) {

    var ruta = rutaCarpeta; //$('#rutarepository').val();

    $.ajax({
        url: './php/eliminar_ruta.php',
        type: 'POST',
        timeout: 10000,
        data: {ruta: ruta},
        error: function() {

        },
        success: function(respuesta) {

        }
    });
}



function mostrarArchivos() {

    var ruta = $('#rutarepository').val();

    $.ajax({
        url: './php/mostrar_archivos.php',
        type: 'POST',
        data: {ruta: ruta},
        dataType: 'JSON',
        success: function(respuesta) {
            if (respuesta) {
                var html = '';
                for (var i = 0; i < respuesta.length; i++) {
                    if (respuesta[i] != undefined) {

                        html += '<div class="row"><span class="col-sm-12">' + respuesta[i] + '<a class="eliminar_archivo" href="javascript:void(0);"> <i class="fa fa-trash"></i></a> / <a class="ver_archivo" href="javascript:void(0);"><i class="fa fa-cloud-download"></i></a></span></div>';
                    }
                }
                $("#archivos_subidos").html(html);
            }
        }
    });
}
function mostrarArchivosLectura() {

    var ruta = $('#rutarepositoryLectura').val();

    $.ajax({
        url: './php/mostrar_archivos.php',
        type: 'POST',
        data: {ruta: ruta},
        dataType: 'JSON',
        success: function(respuesta) {
            if (respuesta) {
                var html = '';
                for (var i = 0; i < respuesta.length; i++) {
                    if (respuesta[i] != undefined) {
                        html += '<div class="row"> <span class="col-sm-12">' + respuesta[i] + '<a class="ver_archivo" href="javascript:void(0);"> <i class="fa fa-cloud-download"></i></a> </span></div>';
                    }
                }
                $("#archivos_subidosLectura").html(html);
            }
        }
    });
}



function mostrarRespuesta(mensaje, ok){
    $("#respuesta").removeClass('alert-success').removeClass('alert-danger').html(mensaje);
    if(ok){
        $("#respuesta").addClass('alert-success');
    }else{
        $("#respuesta").addClass('alert-danger');
    }
}



//// **************************************** //////
//// **********  CARGA DE ARCHIVOS PARA ADMINISTRADOR EN CLIENTE********   //////
function subirArchivosADMCliente() {
    $("#archivo").upload('./php/subir_archivo.php',
        {
            nombre_archivo: $("#nombre_archivo").val(),
            user:sessvars.iduser,
            ruta: 'cliente' + $("#idcliente").val()
        },
        function(respuesta) {
            $("#spin_cargando").show();

            if (respuesta.estado === 'OK') {
                $("#spin_cargando").hide(500);

                new PNotify({
                    title : 'Añadir archivo',
                    text : 'El archivo ' +  respuesta.name + ' se ha añadido.',
                    type : 'success'});

                $("#nombre_archivo, #archivo").val('');
            } else {
                $("#spin_cargando").hide(500);

                new PNotify({
                    title : 'Añadir archivo',
                    text : 'Error al añadir el archivo.',
                    type : 'error'});

            }
            mostrarArchivosADMCliente();

        });
}
function eliminarArchivosADMCliente(archivo) {

    var ruta = 'cliente' + $('#idcliente').val();


    new PNotify({
        title: 'Cancelar',
        text: '¿Está seguro de que desea eliminar el archivo?',
        icon: 'glyphicon glyphicon-question-sign',
        hide: false,
        confirm: {
            confirm: true
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    }).get().on('pnotify.confirm', function () {


            $.ajax({
                url: './php/eliminar_archivo.php',
                type: 'POST',
                timeout: 10000,
                data: {archivo: archivo, ruta: ruta},
                error: function () {
                    mostrarRespuesta('Error al intentar eliminar el archivo.', false);
                },
                success: function (respuesta) {
                    if (respuesta == 1) {
                        mostrarRespuesta('El archivo ha sido eliminado.', true);
                    } else {
                        mostrarRespuesta('Error al intentar eliminar el archivo.', false);
                    }
                    mostrarArchivosADMCliente();
                }
            });
        });
}

function eliminarArchivosLimpiarComunicadoADMCliente(rutaCarpeta) {

    var ruta = rutaCarpeta; //'cliente' + $('#idcliente').val();

    $.ajax({
        url: './php/eliminar_ruta.php',
        type: 'POST',
        timeout: 10000,
        data: {ruta: ruta},
        error: function() {

        },
        success: function(respuesta) {

        }
    });
}



function mostrarArchivosADMCliente() {

    var ruta = 'cliente' + $('#idcliente').val();

    $.ajax({
        url: './php/mostrar_archivos.php',
        type: 'POST',
        data: {ruta: ruta},
        dataType: 'JSON',
        success: function(respuesta) {
            if (respuesta) {
                var html = '';
                for (var i = 0; i < respuesta.length; i++) {
                    if (respuesta[i] != undefined) {
                        html += '<div class="row"><span class="col-sm-12">' + respuesta[i] + '<a class="eliminar_archivo" href="javascript:void(0);"> <i class="fa fa-trash"></i></a> / <a class="ver_archivo" href="javascript:void(0);"><i class="fa fa-cloud-download"></i></a></span></div>';
                    }
                }
                $("#archivos_subidos").html(html);
            }
        }
    });
}
function mostrarArchivosLecturaADMCliente() {

    var ruta = 'cliente' + $('#idcliente').val();

    $.ajax({
        url: './php/mostrar_archivos.php',
        type: 'POST',
        data: {ruta: ruta},
        dataType: 'JSON',
        success: function(respuesta) {
            if (respuesta) {
                var html = '';
                for (var i = 0; i < respuesta.length; i++) {
                    if (respuesta[i] != undefined) {
                        html += '<div class="row"> <span class="col-sm-12">' + respuesta[i] + '<a class="ver_archivo" href="javascript:void(0);"> <i class="fa fa-cloud-download"></i></a> </span></div>';
                    }
                }
                $("#archivos_subidosLectura").html(html);
            }
        }
    });
}


/**** VALIDAR IBAN ******/
// Función que devuelve los números correspondientes a cada letra
function getNumIBAN(letra){
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letras.search(letra) + 10;
}

// Función que calcula el módulo sin hacer ninguna división
function mod(dividendo, divisor){
    var cDividendo = '';
    var cResto = '';

    for (var i in dividendo){
        var cChar = dividendo[i];
        var cOperador = cResto + '' + cDividendo + '' + cChar;

        if (cOperador < parseInt(divisor)){
            cDividendo += '' + cChar;
        }else{
            cResto = cOperador % divisor;
            if (cResto == 0){
                cResto = '';
            }
            cDividendo = '';
        }
    }
    cResto += '' + cDividendo;
    if (cResto == ''){
        cResto = 0;
    }
    return cResto;
}

// El típico trim que inexplicamente JavaScript no trae implementado
function trim(texto){
    return texto.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

// Función que comprueba el IBAN
function validaIBAN(IBAN){
    IBAN = IBAN.toUpperCase();
    IBAN = trim(IBAN); // Quita espacios al principio y al final
    IBAN = IBAN.replace(/\s/g, ""); // Quita espacios del medio
    var num1,num2;
    var isbanaux;
    if (IBAN.length != 24){ // En España el IBAN son 24 caracteres
        return false;
    }else{
        num1 = getNumIBAN(IBAN.substring(0, 1));
        num2 = getNumIBAN(IBAN.substring(1, 2));
        isbanaux = IBAN.substr(4) + String(num1) + String(num2) + IBAN.substr(2,2);
        resto = mod(isbanaux,97);
        return (resto==1);
    }
}



