/**
 * Created by Antonio on 13/03/15.
 */

/************************************************/
/*          Elementos de la cabecera            */
/************************************************/

/* ====================== */
//      Datos del usuario
/* ====================== */
/* Descripcion: Carga el nombre del usuario en la cabecera desde variables de sesion */
function load_Usuario(sessvars) {

    var user = sessvars.username;
    $('#user').html(user);
    $('#userInicio').html(user);
    //comprobarNotificacionNueva();
}

/* ====================== */
//      LogOut
/* ====================== */
/* Descripcion: Deslogueo del usuario*/
function logOut() {
    var user = sessvars.iduser;
    /*
    $.ajax({
        url: './php/cliente.php',
        type: 'POST',
        data: {funcion: '2', value: user},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {

                sessvars.$.clearMem();
                location.href = './index.html';


            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqHXR, status, error) {
            console.log(status + ' ' + error);
        }
    });*/
    sessvars.$.clearMem();
    location.href = './index.html';
}


/* ====================== */
//      Conexión
/* ====================== */
/* @Descripción:  Este método es llamado a intervalos de forma automática mientras un usuario este conectado.
 El objetivo es que el servidor sepa que el usuario sigue conectado.
 */
/*function ping() {
    setInterval(hacerPing(), 3000);
}*/

/*function hacerPing() {

    comprobarNotificacionNueva();
    comprobarServiciosSolicitados();

    var user = sessvars.iduser;
    $.ajax({
        url: './php/cliente.php',
        type: 'POST',
        data: {funcion: '3', value: user},
        dataType: 'json',
        success: function (json) {
            var estado = json.status;
            if (estado == 'OK') {
                //alert( 'ok' ) ;

            } else {
                logOut();
                location.href = 'expired.html';
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error);
        }
    });
}*/

/*function actualizarAccionActivo() {

    comprobarNotificacionNueva();
    comprobarServiciosSolicitados();

    var user = sessvars.iduser;
    $.ajax({
        url: './php/cliente.php',
        type: 'POST',
        data: {funcion: '6', value: user},
        dataType: 'json',
        success: function (json) {

        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error);
        }
    });
}*/


/************************************************/
/*          Elementos menu navegación           */
/************************************************/
/* Descripcion: Carga los datos de contenidos según url ejecutada */
/* Se ejecuta desde function LoadAjaxContent(url), en devoops.js*/
function cargaDatos(url, origen, id) {
    //alert(url);
    switch (url) {

        case 'html/inicio.html':
            contenidoCargado();
            break;

        case 'html/misdatos.html':
            contenidoCargado();
            menu_DatosClientes(sessvars);
            //actualizarAccionActivo();
            break;

        case 'html/caricaturas.html':
            contenidoCargado();
            menu_Caricaturas();
            //actualizarAccionActivo();
            break;

        case 'html/nueva_caricatura.html':
            //actualizarAccionActivo();
            contenidoCargado();
            break;


        /*
        case 'html/entrada.html':
            menu_comuncicadosEntrada();
            actualizarAccionActivo();
            break;

        case 'html/comunicacion_nueva.html':
            nuevaComunicacion(1, origen);
            //menu_comuncicadosEntrada();
            contenidoCargado();
            actualizarAccionActivo();
            break;

        case 'html/comunicacion.html':

            switch (origen) {
                case 'entrada':
                    load_Recibida(id, origen);
                    break;
                case 'enviados':
                    load_Enviado(id, origen);
                    break;
                case 'borrador':
                    load_Borrador(id, origen);
                    break;
                case 'papelera':
                    load_Papelera(id, origen);
                    break;
            }

            actualizarAccionActivo();
            break;

        case 'html/comunicacion_borrador.html':
            load_Borrador(id, origen);
            actualizarAccionActivo();
            break;


        case 'html/enviados.html':
            menu_comuncicadosEnviados();
            actualizarAccionActivo();
            break;

        case 'html/borradores.html':
            menu_comuncicBorradores();
            actualizarAccionActivo();
            break;

        case 'html/papelera.html':
            menu_comuncicadosPapelera();
            actualizarAccionActivo();
            break;
        */

        default:
        //alert(url);
    }


}
/*
 /* ====================== */
//      Datos Cliente
/* ====================== */
/* Descripcion: Datos del formulario de Datos de Cliente */
function menu_DatosClientes(sessvars) {
    pintarDatosCliente(sessvars);
    contenidoCargado();
    /*$.ajax({
        url: './php/cliente_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '2'},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {
                pintarDatosCliente(content);

                contenidoCargado();

            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });*/

}

/* Tabla de Clientes */
function pintarDatosCliente(data) {
    //actualizarAccionActivo();

    $('#usuario').val(data.username);
    $('#nombre').val(data.nombre);
    $('#apellidos').val(data.apellidos);
    //$('#empresa').val(data[0].empresa);
    $('#correoe').val(data.correoe);
    $('#direccion').val(data.direccion);
    $('#ciudad').val(data.ciudad);
    $('#codigopostal').val(data.codigopostal);
    $('#pais').val(data.pais);
    $('#telefono').val(data.telefono);

    //$('#fcreacion').val(data[0].fechaCreacion);
    //$('#factivacion').val(data[0].fechaActivacion);
    $('#codartista').val(data.codartista);
    $('#estadosuscripcion').val(data.estadosuscripcion);
    $('#ultimoacceso').val(data.ultimoaccesofecha);

}


function editar_datosCliente() {
    //actualizarAccionActivo();

    $('#nombre').attr('disabled', false);
    $('#apellidos').attr('disabled', false);
    $('#empresa').attr('disabled', false);
    $('#correoe').attr('disabled', false);
    $('#direccion').attr('disabled', false);
    $('#ciudad').attr('disabled', false);
    $('#codigopostal').attr('disabled', false);
    $('#pais').attr('disabled', false);
    $('#telefono').attr('disabled', false);

    $('#editar').css('display', 'none');
    $('#guardar').css('display', 'block');
    $('#cancelar').css('display', 'block');
    $('#changepass').css('display', 'block');

}

function cancelar_datosCliente() {
    //actualizarAccionActivo();

    new PNotify({
        title: 'Cancelar',
        text: '¿Está seguro de que desea cancelar la edición?',
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

            location.reload();
        });
}

function guardar_datosCliente() {
    actualizarAccionActivo();

    nombre = $('#nombre').val();
    apellidos = $('#apellidos').val();
    correoe = $('#correoe').val();
    pais = $('#pais').val();
    codigopostal = $('#codigopostal').val();
    empresa = $('#empresa').val();
    telefono = $('#telefono').val();
    direccion = $('#direccion').val();
    ciudad = $('#ciudad').val();

    $.ajax({
        url: './php/cliente_getJson.php',
        type: 'POST',
        data: {
            user: sessvars.iduser,
            funcion: '3',
            opcion: '1',
            nombre: nombre,
            apellidos: apellidos,
            correoe: correoe,
            pais: pais,
            codigopostal: codigopostal,
            empresa: empresa,
            telefono: telefono,
            direccion: direccion,
            ciudad: ciudad
        },
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {
                location.reload();
            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
}


/************************************************/
/*         Modificar Pass                           */
/************************************************/
function CambiaPass() {
    actualizarAccionActivo();

    var pass = $('#passactual').val();
    var nuevapass = $('#passnueva').val();
    var nuevapass1 = $('#passnueva1').val();

    if (!validarVacio(pass)) {
        new PNotify({
            title: 'Error',
            text: 'Escriba la contraseña actual.',
            type: 'error'
        });

        $('#passactual').val('');
        $('#passnueva').val('');
        $('#passnueva1').val('');

    } else if (!validarPass(nuevapass, nuevapass1)) {
        new PNotify({
            title: 'Error',
            text: '<b>Contraseña</b> debe contener entre 6 y 30 caracteres, y coincidir los dos valores.',
            type: 'error'
        });

        $('#passactual').val('');
        $('#passnueva').val('');
        $('#passnueva1').val('');

    } else {

        $.ajax({
            url: './php/cliente_getJson.php',
            type: 'POST',
            data: {
                user: sessvars.iduser,
                funcion: '3',
                opcion: '2',
                value1: pass,
                value2: nuevapass,
                value3: nuevapass1
            },
            dataType: 'json',
            success: function (json) {
                var content = json.content;
                if (json.status == 'OK') {
                    new PNotify({
                        title: 'Cambiar contraseña ',
                        text: 'Contraseña actualizada.',
                        type: 'success'
                    });

                    $('#passactual').val('');
                    $('#passnueva').val('');
                    $('#passnueva1').val('');

                } else {
                    new PNotify({
                        title: content.title,
                        text: content.text,
                        type: content.type
                    });

                    $('#passactual').val('');
                    $('#passnueva').val('');
                    $('#passnueva1').val('');
                }
            },
            error: function (jqXHR, status, error) {
                console.log(status + ' ' + error)
            }
        });
    }
}


/************************************************/
/*        CARICATURAS -  Servicios                           */
/************************************************/

function nueva_Caricatura() {
    //actualizarAccionActivo();

    location.hash = 'html/nueva_caricatura.html';
    LoadAjaxContent('html/nueva_caricatura.html');
}


function menu_Caricaturas() {

    //lit-woodland-9635.herokuapp.com/caricaturas_artista/(idartista)
    $.ajax({
        url: 'http://lit-woodland-9635.herokuapp.com/caricaturas_artista/' + sessvars.iduser  ,
        type: 'GET',
        callback: 'None',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (json) {
            var contenido = json.mensaje;
            if (json.content == 'OK') {
                pintarTablaCaricaturas(contenido);
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
    /*
    $.ajax({
        url: './php/servicio_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '3'},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {
                $('#tablaServicios').html(pintarTablaServicios(content));

                contenidoCargado();

                LoadDataTablesScripts(AllTables);
            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
    */
}

/* Tabla de Servicios */
function pintarTablaCaricaturas(data) {
    var sizeY = data.length;
    var table = '';
    for (var i = 0; i < sizeY; i++) {

        /*if (data[i].vistocliente !== 't') {
            table += '<tr class="fila filanoleida" onclick="load_Servicio(\'' + data[i].idservicio + '\')">';
        } else {
            table += '<tr class="fila" onclick="load_Servicio(\'' + data[i].idservicio + '\')">';
        }*/

        /*
         [{"fechasubida": "2015-06-20T23:25:23+00:00", "tag": "c", "visualizaciones": 0, "facebook": 0, "imgAlta": "d", "googleplus": 0, "twitter": 0, "imgMiniatura": "e", "titulo": "b", "idartista": "3"}
         */

        table += '<tr>';
        //table += '<tr class="fila" onclick="load_Servicio(\'' + data[i].idservicio + '\')">';
        table += '<td data-toggle="modal" href="#gruposmodal" >' + data[i].titulo + '</a></td>';
        table += '<td data-toggle="modal" href="#gruposmodal" >' + data[i].fechasubida + '</td>';
        //table += '<td data-toggle="modal" href="#gruposmodal" >' + estadoInstanciaTexto(data[i].estadoinstancia) + '</td>';

        table += '</tr>';
    }

    $('#tablaCaricaturas').html(table);

    //return table;
}


/* Ventana de Datos de un Servicio */
function load_Servicio(servicio) {
    actualizarAccionActivo();

    location.hash = 'html/datos_servicio.html';
    LoadAjaxContent('./html/datos_servicio.html');
    load_DatosServicio(servicio);
}


/* Insertar datos de un Servicio */
function load_DatosServicio(servicio) {
    actualizarAccionActivo();

    $.ajax({
        url: './php/servicio_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '2', value: servicio},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {

                contenidoCargado();

                pintarDatosServicio(content);
            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
}


/* Tabla de Servicios */
function pintarDatosServicio(data) {

    //actualizarAccionActivo();

    marcaLeidoServicio(data[0].idservicio);

    $('#idservicio').val(data[0].idservicio);
    $('#nombre').val(data[0].nombre);
    $('#codigoservicio').val(data[0].codigoservicio);
    $('#nameadmin').val(data[0].nameadmin);
    $('#passadmin').val(data[0].passadmin);
    $('#passadmin2').val(data[0].passadmin);
    $('#latitud').val(data[0].latitud);
    $('#longitud').val(data[0].longitud);
    $('#zonahoraria').val(data[0].zonahoraria);
    $('#formatofecha').val(data[0].formatofecha);

    //$('#estadoinstancia').val(data[0].estadoinstancia);
    $('#estadoinstancia').val(estadoInstanciaTexto(data[0].estadoinstancia));
    $('#estadoservicio').val(data[0].estadoinstancia);

    if (data[0].estadoinstancia === '0') {
        $('#solicitar').css('display', 'block');
        $('#eliminar').css('display', 'block');
    }

    if (data[0].estadoinstancia === '10') {
        $('#activar').css('display', 'block');
    }

    if (data[0].estadoinstancia === '20') {
        $("#urlacceso").replaceWith('<span id="urlacceso"><a href="' + data[0].urlacceso + '" target="_new">' + data[0].urlacceso + '</span>');
        $('#urlaccesocapa').css('display', 'block');

    }

    $('#claveactivacion').val(data[0].claveactivacion);
    $('#fsolicitud').val(data[0].fsolicitud);
    $('#factivacion').val(data[0].factivacion);
    $('#entidadbancaria').val(data[0].entidadbancaria);
    $('#numcuenta').val(data[0].numcuenta);

}


function editar_datosServicio() {
    //actualizarAccionActivo();


    $('#nameadmin').attr('disabled', false);
    $('#passadmin').attr('disabled', false);
    $('#passadmin2').attr('disabled', false);
    $('#latitud').attr('disabled', false);
    $('#longitud').attr('disabled', false);
    $('#zonahoraria').attr('disabled', false);
    $('#formatofecha').attr('disabled', false);

    $('#entidadbancaria').attr('disabled', false);
    $('#numcuenta').attr('disabled', false);


    if ($('#estadoservicio').val() == '0' || $('#estadoservicio').val() == '1' || $('#estadoservicio').val() == '10') {
        $('#nombre').attr('disabled', false);
        $('#claveactivacion').attr('disabled', false);
    }


    $('#editar').css('display', 'none');
    $('#guardar').css('display', 'block');
    $('#cancelar').css('display', 'block');
    $('#volver').css('display', 'none');

    $('#changepass').css('display', 'block');
}

function cancelar_datosCaricatura() {
    //actualizarAccionActivo();

    new PNotify({
        title: 'Cancelar',
        text: '¿Está seguro de que desea cancelar la edición?',
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
            LoadAjaxContent('html/caricaturas.html');
        });
}

function guardar_datosCaricatura() {
    //actualizarAccionActivo();

    idusuario = sessvars.iduser;
    titulo = $('#titulo').val();
    tags = $('#tags').val();
    img_alta = 'imgalta';
    img_baja = 'imgbaja';


    //Validar datos
    if (!validarVacio(titulo)) {
        new PNotify({
            title: 'Error',
            text: '<b>Título</b> es obligatorio.',
            type: 'error'
        });
        $('#titulo').css(
            {'border-color': 'red'}
        );
        $('#titulo').focus();
        return false;
    }

    if (!validarVacio(tags)) {
        new PNotify({
            title: 'Error',
            text: '<b>Tags</b> es obligatorio.',
            type: 'error'
        });
        $('#tags').css(
            {'border-color': 'red'}
        );
        $('#tags').focus();
        return false;
    }

    //Validar si existe el título

    new PNotify({
        title: 'Guardar',
        text: '¿Está seguro de que desea guardar los datos?',
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

                url: 'http://lit-woodland-9635.herokuapp.com/alta_caricatura/' + idusuario + '/' + titulo + '/' + tags + '/' + img_alta + '/' + img_baja ,
                type: 'GET',
                callback: 'None',
                contentType: "application/json",
                dataType: 'jsonp',
                success: function (json) {
                    var contenido = json.mensaje;
                    if (json.content == 'OK') {
                        new PNotify({
                            title: 'Guardar ',
                            text: 'Caricatura creada.',
                            type: 'success'
                        });
                        LoadAjaxContent('html/caricaturas.html');
                    } else {
                        new PNotify({
                            title: 'Error',
                            text: contenido.error,
                            type: 'error'
                        });
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log(status + ' ' + error)
                }
            });
        });
}


function CambiaPassInstancia() {
    actualizarAccionActivo();

    var passusuario = $('#passusuario').val();
    var nuevapass = $('#passnueva').val();
    var nuevapass1 = $('#passnueva1').val();
    var idservicio = $('#idservicio').val();

    if (!validarVacio(passusuario)) {
        new PNotify({
            title: 'Error',
            text: 'Escriba la contraseña actual del usuario.',
            type: 'error'
        });

        $('#passusuario').val('');
        $('#passnueva').val('');
        $('#passnueva1').val('');

    } else if (!validarPass(nuevapass, nuevapass1)) {
        new PNotify({
            title: 'Error',
            text: '<b>Contraseña</b> debe contener entre 6 y 30 caracteres, y coincidir los dos valores.',
            type: 'error'
        });

        $('#passusuario').val('');
        $('#passnueva').val('');
        $('#passnueva1').val('');

    } else {

        $.ajax({
            url: './php/servicio_getJson.php',
            type: 'POST',
            data: {
                user: sessvars.iduser,
                funcion: '3',
                opcion: '2',
                value1: passusuario,
                value2: nuevapass,
                value3: idservicio
            },
            dataType: 'json',
            success: function (json) {
                var content = json.content;
                if (json.status == 'OK') {
                    new PNotify({
                        title: 'Cambiar contraseña ',
                        text: 'Contraseña actualizada.',
                        type: 'success'
                    });

                    $('#passusuario').val('');
                    $('#passnueva').val('');
                    $('#passnueva1').val('');

                } else {
                    new PNotify({
                        title: content.title,
                        text: content.text,
                        type: content.type
                    });

                    $('#passusuario').val('');
                    $('#passnueva').val('');
                    $('#passnueva1').val('');
                }
            },
            error: function (jqXHR, status, error) {
                console.log(status + ' ' + error);
                $('#passusuario').val('');
                $('#passnueva').val('');
                $('#passnueva1').val('');
            }
        });
    }
}


function solicitar_datosServicio() {
    actualizarAccionActivo();
    var idservicio = $('#idservicio').val();


    new PNotify({
        title: 'Cancelar',
        text: '¿Está seguro de que desea solicitar el servicio?',
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
                url: './php/servicio_getJson.php',
                type: 'POST',
                data: {user: sessvars.iduser, funcion: '3', opcion: '6', value: idservicio, value1: '1'},
                dataType: 'json',
                success: function (json) {
                    var content = json.content;
                    if (json.status == 'OK') {
                        new PNotify({
                            title: 'Servicios ',
                            text: 'Servicio solicitado.',
                            type: 'success'
                        });
                        LoadAjaxContent('html/servicios.html');

                    } else {
                        new PNotify({
                            title: content.title,
                            text: content.text,
                            type: content.type
                        });
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log(status + ' ' + error);
                }
            });


        })

}


function activar_datosServicio() {
    actualizarAccionActivo();
    var idservicio = $('#idservicio').val();
    var claveactivacion = $('#claveactivacion').val();

    nombre = $('#nombre').val();
    codigoservicio = $('#codigoservicio').val();
    nameadmin = $('#nameadmin').val();
    latitud = $('#latitud').val();
    longitud = $('#longitud').val();
    zonahoraria = $('#zonahoraria').val();
    formatofecha = $('#formatofecha').val();
    estadoservicio = $('#estadoservicio').val();
    fsolicitud = $('#fsolicitud').val();
    factivacion = $('#factivacion').val();
    entidadbancaria = $('#entidadbancaria').val();
    numcuenta = $('#numcuenta').val();


    //Validar datos
    if (!validarVacio(nombre)) {
        new PNotify({
            title: 'Error',
            text: '<b>Nombre</b> es obligatorio.',
            type: 'error'
        });
        $('#nombre').css(
            {'border-color': 'red'}
        );
        $('#nombre').focus();
        return false;
    }

    if (!validarServicio(nombre)) {
        new PNotify({
            title: 'Error',
            text: '<b>Nombre</b> puede contener sólo números y/o letras, sin caracteres especiales.',
            type: 'error'
        });
        $('#nombre').css(
            {'border-color': 'red'}
        );
        $('#nombre').focus();
        return false;
    }

    if (!validarServicioExiste(nombre,idservicio)) {
        new PNotify({
            title: 'Error',
            text: 'El nombre de servicio ya existe y debe cambiarlo.',
            type: 'error'
        });
        $('#nombre').css(
            {'border-color': 'red'}
        );
        $('#nombre').focus();
        return false;
    }


    if (!validarVacio(codigoservicio)) {
        new PNotify({
            title: 'Error',
            text: '<b>Código del servicio</b> es obligatorio.',
            type: 'error'
        });
        $('#codigoservicio').css(
            {'border-color': 'red'}
        );
        $('#codigoservicio').focus();
        return false;
    }

    if (!validarVacio(nameadmin) || !validarUsuario(nameadmin)) {
        new PNotify({
            title: 'Error',
            text: '<b>Usuario</b> es obligatorio y debe contener entre 6 y 12 caracteres. Se admiten letras, números y puede haber un espacio en medio.',
            type: 'error'
        });
        $('#nameadmin').css(
            {'border-color': 'red'}
        );
        $('#nameadmin').focus();
        return false;
    }

    if (!validarVacio(numcuenta)) {
        new PNotify({
            title: 'Error',
            text: 'La <b>Número de cuenta (IBAN)</b> es obligatorio.',
            type: 'error'
        });
        $('#numcuenta').css(
            {'border-color': 'red'}
        );
        $('#numcuenta').focus();
        return false;
    }
    if (validaIBAN(numcuenta) === false) {
        new PNotify({
            title: 'Error',
            text: 'La <b>Número de cuenta (IBAN)</b> es obligatorio y debe ser correcto.',
            type: 'error'
        });
        $('#numcuenta').css(
            {'border-color': 'red'}
        );
        $('#numcuenta').focus();
        return false;
    }


    new PNotify({
        title: 'Cancelar',
        text: '¿Está seguro de que desea activar el servicio?',
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
                url: './php/servicio_getJson.php',
                type: 'POST',
                data: {
                    user: sessvars.iduser,
                    funcion: '3',
                    opcion: '7',
                    value: idservicio,
                    value1: claveactivacion,
                    nombre: nombre,
                    nameadmin: nameadmin,
                    latitud: latitud,
                    longitud: longitud,
                    zonahoraria: zonahoraria,
                    formatofecha: formatofecha,
                    entidadbancaria: entidadbancaria,
                    numcuenta: numcuenta
                },
                dataType: 'json',
                success: function (json) {
                    var content = json.content;
                    if (json.status == 'OK') {
                        new PNotify({
                            title: 'Servicios ',
                            text: 'Preparando activación del servicio.',
                            type: 'success'
                        });
                        //LoadAjaxContent('html/servicios.html');
                        //Activamos la instancia automaticamente
                        activarInstancia( idservicio);

                    } else if (json.status == 'BAD') {
                        new PNotify({
                            title: 'Servicios ',
                            text: 'Error en la activación del servicio. No es correcta la clave de validación.',
                            type: 'error'
                        });
                    } else {
                        new PNotify({
                            title: 'Servicios ',
                            text: 'Error en la activación del servicio.',
                            type: 'success'
                        });
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log(status + ' ' + error);
                }
            });


        })

}

/**** **********  ****/

/*** Activar instancia **/
function activarInstancia( instancia) {

    actualizarAccionActivo();
            $('#infoCargando').modal('show');

            //Ejecutamos el php de replica
            $.ajax({
                url: './php/replicaservicio.php',
                type: 'POST',
                data: {value: instancia},
                //async: false,
                dataType: 'json',
                success: function (json) {
                    var content = json.content;
                    if (json.status == 'OK') {
                        $( "#textoInformacion" ).replaceWith( '<h6 id="textoInformacion">Configurando servicio activado. </h6>');

                        $.ajax({
                            url: './php/servicio_getJson.php',
                            type: 'POST',
                            data: {user: sessvars.iduser, funcion: '3', opcion: '8', value: instancia},
                            dataType: 'json',
                            async: false, // La petición es síncrona
                            cache: false,
                            success: function (json) {
                                var content = json.content;
                                if (json.status == 'OK') {

                                    $('#infoCargando').modal('hide');

                                    $('#infoCargando').on('hidden.bs.modal', function () {
                                        LoadAjaxContent('html/servicios.html');
                                    });

                                } else {
                                    new PNotify({
                                        title: content.title,
                                        text: content.text,
                                        type: content.type
                                    });
                                }
                            },
                            error: function (jqXHR, status, error) {
                                console.log(status + ' ' + error);
                                $( "#textoInformacion" ).replaceWith( '<h6 id="textoInformacion">Ha ocurrido un error en la activación. </h6>');
                                $('#spincargando').css('display', 'none');
                                $('#footerCargando').css('display', 'block');
                                $('#cerrarCargandoError').css('display', 'block');
                            }
                        });


                    } else {
                        new PNotify({
                            title: content.title,
                            text: content.text,
                            type: content.type
                        });
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log(status + ' ' + error);

                    $( "#textoInformacion" ).replaceWith( '<h6 id="textoInformacion">Ha ocurrido un error en la activación. </h6>');
                    $('#spincargando').css('display', 'none');
                    $('#footerCargando').css('display', 'block');
                    $('#cerrarCargandoError').css('display', 'block');
                }
            });



}



/**Eliminar servicio */
function eliminar_datosServicio() {
    actualizarAccionActivo();
    var idservicio = $('#idservicio').val();

    new PNotify({
        title: 'Eliminar',
        text: '¿Está seguro de que desea eliminar el servicio?',
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
                url: './php/servicio_getJson.php',
                type: 'POST',
                data: {user: sessvars.iduser, funcion: '4', opcion: '1', value: idservicio},
                dataType: 'json',
                success: function (json) {
                    var content = json.content;
                    if (json.status == 'OK') {
                        new PNotify({
                            title: 'Servicios ',
                            text: 'Servicio eliminado.',
                            type: 'success'
                        });
                        LoadAjaxContent('html/servicios.html');

                    } else {
                        new PNotify({
                            title: content.title,
                            text: content.text,
                            type: content.type
                        });
                    }
                },
                error: function (jqXHR, status, error) {
                    console.log(status + ' ' + error);
                }
            });


        })

}


/************************************************/
/*         Generales                           */
/************************************************/


function estadoInstanciaTexto(val) {
    switch (val) {
        case '0':
            return 'Pdte. de solicitar';
            break;
        case '1':
            return 'Solicitado';
            break;
        case '10':
            return 'Pdte. de activación';
            break;
        case '15':
            return 'En espera de activación';
            break;
        case '20':
            return 'Activado';
            break;
        case '30':
            return 'Caducado';
            break;
        case '40':
            return 'Desactivado';
            break;
        default:
            return 'Desconocido';
    }
}


/* ******************************** */
/*          Comunicados             */
/* ******************************** */
// BORRADORES
function menu_comuncicBorradores() {
    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '3'},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {
                $('#tablaBorradores').html(pintarTablaComunicadosBorrador(content));

                contenidoCargado();

                LoadDataTablesScripts(AllTables);
            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });

}

/* Tabla de Comunicados Borrador*/
function pintarTablaComunicadosBorrador(data) {
    actualizarAccionActivo();
    var sizeY = data.length;
    var table = '';
    for (var i = 0; i < sizeY; i++) {
        table += '<tr class="fila" >';
        table += '<td><input type="checkbox" value="' + data[i].idcomunicacion + '"></td>';
        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion_borrador.html&#39;,&#39;borrador&#39;,' + data[i].idcomunicacion + ')">' + data[i].asunto + '</a></td>';

        destinatarios = replaceAll(data[i].destinatario, '#@#', ', ');
        destinatarios = destinatarios.replace(", ", "");

        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion_borrador.html&#39;,&#39;borrador&#39;,' + data[i].idcomunicacion + ')">' + destinatarios + '</td>';
        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion_borrador.html&#39;,&#39;borrador&#39;,' + data[i].idcomunicacion + ')">' + data[i].fechaedicion + '</td>';
        table += '</tr>';
    }
    return table;
}


function load_Borrador(borrador, origen) {
    actualizarAccionActivo();
    var menuRetorno;
    var etiquetaDestinatario;
    var buttonEnviarComunicado;
    var buttonGuardarBorradorComunicado;
    var buttonlimpiarComunicado;


    //Calcular origen para volver a su  menu
    switch (origen) {
        case 'entrada':
            menuRetorno = '<li><a class="ajax-link" href="#html/entrada.html" onclick="LoadAjaxContent(&#39;html/entrada.html&#39;)">Entrada</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Remitente</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;entrada&#39;);">Cerrar</button>';
            break;
        case 'enviados':
            menuRetorno = '<li><a class="ajax-link" href="#html/enviados.html" onclick="LoadAjaxContent(&#39;html/enviados.html&#39;)">Enviados</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Destinatario</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;enviados&#39;);">Cerrar</button>';
            break;
        case 'borrador':
            menuRetorno = '<li><a class="ajax-link" href="#html/borradores.html" onclick="LoadAjaxContent(&#39;html/borradores.html&#39;)">Borradores</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Destinatario</label>';
            buttonEnviarComunicado = '<button type="button" id="buttonEnviarComunicado" class="btn btn-success" onclick="enviarComunicado(1, &#39;borrador&#39;);">Enviar</button>';
            buttonGuardarBorradorComunicado = '<button type="button" id="buttonGuardarBorradorComunicado" class="btn btn-default" onclick="guardarComunicado(1, &#39;borrador&#39;);">Guardar borrador</button>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;borrador&#39;);">Cerrar</button>';
            break;
        case 'papelera':
            menuRetorno = '<li><a class="ajax-link" href="#html/papelera.html" onclick="LoadAjaxContent(&#39;html/papelera.html&#39;)">Papelera</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Remitente / Destinatario</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;papelera&#39;);">Cerrar</button>';
            break;
    }
    $("#menuretorno").replaceWith(menuRetorno);
    $("#buttonEnviarComunicado").replaceWith(buttonEnviarComunicado);
    $("#buttonGuardarBorradorComunicado").replaceWith(buttonGuardarBorradorComunicado);
    $("#buttonlimpiarComunicado").replaceWith(buttonlimpiarComunicado);

    $("#etiquetaRemitente").replaceWith(etiquetaDestinatario);


    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '4', value: borrador},
        dataType: 'json',
        success: function (json) {
            var contentBorradores = json.content;
            if (json.status == 'OK') {

                contenidoCargado();

                var select = $('#destinatario');
                if (select.prop) {
                    var options = select.prop('options');
                }
                else {
                    var options = select.attr('options');
                }
                $('option', select).remove();

                               ////Nuevo para cliente
                var username = 'Administración';
                var idcliente = '1';

                var newOptions = new Array(username); //Administracion - 1
                var arrayIds = new Array('1');

                $.each(newOptions, function (val, text) {
                    options[options.length] = new Option(username, idcliente);
                });

                var valorid = contentBorradores[0].destinatarioid.split("#@#");
                valorid = $.grep(valorid, function (n) {
                    return (n);
                });

                for (x = 0; x < valorid.length; x++) {
                    if (arrayIds.indexOf(valorid[x]) != -1) {
                        $('#destinatario option[value="' + valorid[x] + '"]').attr('selected', 'selected');
                    }
                }

                $("#destinatario").pqSelect({
                    multiplePlaceholder: 'Seleccione destinarios',
                    deselect: true,
                    selectallText: '',
                    checkbox: true,
                    search: false,
                    width: '100%'
                });


                $('#idcomunicado').val(borrador);
                $('#asunto').val(contentBorradores[0].asunto);

                $('.Editor-editor').html(contentBorradores[0].descripcion);

                $('#rutarepository').val(contentBorradores[0].urlarchivos);
                mostrarArchivos();


            } else {
                new PNotify({
                    title: contentBorradores.title,
                    text: contentBorradores.text,
                    type: contentBorradores.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
}


//  ENVIADOS
function menu_comuncicadosEnviados() {
    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '5'},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {
                $('#tablaEnviados').html(pintarTablaComunicadosEnviados(content));

                contenidoCargado();

                LoadDataTablesScripts(AllTables);
            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });

}

/* Tabla de Comunicados Enviados*/
function pintarTablaComunicadosEnviados(data) {
    actualizarAccionActivo();
    var sizeY = data.length;
    var table = '';
    for (var i = 0; i < sizeY; i++) {
        table += '<tr class="fila">';
        table += '<td><input type="checkbox" value="' + data[i].idcomunicacion + '"></td>';

        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;enviados&#39;,' + data[i].idcomunicacion + ')">' + data[i].asunto + '</td>';

        destinatarios = replaceAll(data[i].destinatario, '#@#', ', ');
        destinatarios = destinatarios.replace(", ", "");

        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;enviados&#39;,' + data[i].idcomunicacion + ')">' + destinatarios + '</td>';
        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;enviados&#39;,' + data[i].idcomunicacion + ')">' + data[i].fechaenvio + '</td>';

        table += '</tr>';
    }
    return table;
}


function load_Enviado(comunicado, origen) {

    actualizarAccionActivo();
    var menuRetorno;
    var etiquetaDestinatario;
    var buttonEnviarComunicado;
    var buttonGuardarBorradorComunicado;
    var buttonlimpiarComunicado;


    //Calcular origen para volver a su  menu
    switch (origen) {
        case 'entrada':
            menuRetorno = '<li><a class="ajax-link" href="#html/entrada.html" onclick="LoadAjaxContent(&#39;html/entrada.html&#39;)">Entrada</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Remitente</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;entrada&#39;);">Cerrar</button>';
            break;
        case 'enviados':
            menuRetorno = '<li><a class="ajax-link" href="#html/enviados.html" onclick="LoadAjaxContent(&#39;html/enviados.html&#39;)">Enviados</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Destinatario</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;enviados&#39;);">Cerrar</button>';
            break;
        case 'borrador':
            menuRetorno = '<li><a class="ajax-link" href="#html/borradores.html" onclick="LoadAjaxContent(&#39;html/borradores.html&#39;)">Borradores</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Destinatario</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;borrador&#39;);">Cerrar</button>';
            break;
        case 'papelera':
            menuRetorno = '<li><a class="ajax-link" href="#html/papelera.html" onclick="LoadAjaxContent(&#39;html/papelera.html&#39;)">Papelera</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Remitente / Destinatario</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;papelera&#39;);">Cerrar</button>';
            break;
    }
    $("#menuretorno").replaceWith(menuRetorno);
    $("#buttonlimpiarComunicado").replaceWith(buttonlimpiarComunicado);

    $("#etiquetaRemitente").replaceWith(etiquetaDestinatario);


    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '7', value: comunicado},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {

                contenidoCargado();

                destinatarios = replaceAll(content[0].destinatario, '#@#', ', ');
                destinatarios = destinatarios.replace(", ", "");
                //$('#destinatarioEnviado').val(destinatarios);
                $('#remitente').val(destinatarios);

                $('#idcomunicado').val(comunicado);
                $('#asunto').val(content[0].asunto);

                $("#descripcion").replaceWith('<div class="divDescripcionComunicado">' + content[0].descripcion + '</div>');


                $('#fechaenvio').val(content[0].fechaenvio);
                  $('#rutarepositoryLectura').val(content[0].urlarchivos);
                mostrarArchivosLectura();


            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
}


//  RECIBIDOS
function menu_comuncicadosEntrada() {
    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '6'},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {
                $('#tablaEntrada').html(pintarTablaComunicadosEntrada(content));

                contenidoCargado();

                LoadDataTablesScripts(AllTables);
            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });

}

/* Tabla de Comunicados Recibidos - Entrada*/
function pintarTablaComunicadosEntrada(data) {
    actualizarAccionActivo();
    var sizeY = data.length;
    var table = '';
    for (var i = 0; i < sizeY; i++) {

        if (data[i].vistodestinatario !== 't') {
            table += '<tr class="fila filanoleida">';
        } else {
            table += '<tr class="fila">';
        }
        table += '<td><input type="checkbox" value="' + data[i].idcomunicacion + '"></td>';
        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;entrada&#39;,' + data[i].idcomunicacion + ')">' + data[i].asunto + '</a></td>';
        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;entrada&#39;,' + data[i].idcomunicacion + ')">' + data[i].autor + '</td>';
        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;entrada&#39;,' + data[i].idcomunicacion + ')">' + data[i].fechaenvio + '</td>';
        table += '</tr>';
    }
    return table;
}


function load_Recibida(comunicado, origen) {
    actualizarAccionActivo();
    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '8', value: comunicado},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {

                contenidoCargado();

                $('#idcomunicado').val(comunicado);
                $('#remitente').val(content[0].autor);
                $('#asunto').val(content[0].asunto);

                $("#descripcion").replaceWith('<div class="divDescripcionComunicado">' + content[0].descripcion + '</div>');


                $('#fechaenvio').val(content[0].fechaenvio);

                $('#rutarepositoryLectura').val(content[0].urlarchivos);
                mostrarArchivosLectura();
                marcaLeidoComunicado(comunicado);

            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
}


//  ELIMINADOS - PAPELERA
function menu_comuncicadosPapelera() {
    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '9'},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {
                $('#tablaPapelera').html(pintarTablaComunicadosPapelera(content));

                contenidoCargado();

                LoadDataTablesScripts(AllTables);
            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });

}

/* Tabla de Comunicados Papelera*/
function pintarTablaComunicadosPapelera(data) {
    actualizarAccionActivo();
    var sizeY = data.length;
    var table = '';
    for (var i = 0; i < sizeY; i++) {

        var tipo;
        var leido;
        switch (data[i].tipocomunicado) {
            case '1': //Entrada
                tipo = '<i class="fa fa-envelope-o"></i>';
                if (data[i].vistodestinatario !== 't') {
                    leido = 'filanoleida';
                } else {
                    leido = '';
                }
                break;

            case '2': //Enviado
                tipo = '<i class="fa fa-reply"></i>';
                break;

            case '3': //Borrador
                tipo = '<i class="fa fa-floppy-o"></i>';
                break;
        }

        table += '<tr class="fila ' + leido + '">';
        table += '<td><input type="checkbox" value="' + data[i].idcomunicacion + '">' + '' + '</td>';

        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;papelera&#39;,' + data[i].idcomunicacion + ')">' + tipo + ' ' + data[i].asunto + '</td>';


        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;papelera&#39;,' + data[i].idcomunicacion + ')">' + data[i].autor + '</td>';
        table += '<td onclick="LoadAjaxContent(&#39;html/comunicacion.html&#39;,&#39;papelera&#39;,' + data[i].idcomunicacion + ')">' + data[i].fechaenvio + '</td>';
        table += '</tr>';
    }
    return table;
}


function load_Papelera(comunicado, origen) {
    actualizarAccionActivo();
    var menuRetorno;
    var etiquetaDestinatario;
    var buttonEnviarComunicado;
    var buttonGuardarBorradorComunicado;
    var buttonlimpiarComunicado;


    //Calcular origen para volver a su  menu
    switch (origen) {
        case 'entrada':
            menuRetorno = '<li><a class="ajax-link" href="#html/entrada.html" onclick="LoadAjaxContent(&#39;html/entrada.html&#39;)">Entrada</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Remitente</label>';
           buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;entrada&#39;);">Cerrar</button>';
            break;
        case 'enviados':
            menuRetorno = '<li><a class="ajax-link" href="#html/enviados.html" onclick="LoadAjaxContent(&#39;html/enviados.html&#39;)">Enviados</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Destinatario</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;enviados&#39;);">Cerrar</button>';
            break;
        case 'borrador':
            menuRetorno = '<li><a class="ajax-link" href="#html/borradores.html" onclick="LoadAjaxContent(&#39;html/borradores.html&#39;)">Borradores</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Destinatario</label>';
            buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;borrador&#39;);">Cerrar</button>';
            break;
        case 'papelera':
            menuRetorno = '<li><a class="ajax-link" href="#html/papelera.html" onclick="LoadAjaxContent(&#39;html/papelera.html&#39;)">Papelera</a></li>';
            etiquetaDestinatario = '<label class="control-label" id="etiquetaRemitente">Remitente / Destinatario</label>';
           buttonlimpiarComunicado = '<button type="button" id="buttonlimpiarComunicado" class="btn btn-default" onclick="limpiarComunicadoLectura(&#39;papelera&#39;);">Cerrar</button>';
            $('#buttonRestaurarComunicado').css('display', 'block');
            break;
    }
    $("#menuretorno").replaceWith(menuRetorno);
    $("#buttonlimpiarComunicado").replaceWith(buttonlimpiarComunicado);

    $("#etiquetaRemitente").replaceWith(etiquetaDestinatario);


    $.ajax({
        url: './php/comunicados_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '10', value: comunicado},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {

                contenidoCargado();

                $('#idcomunicado').val(comunicado);
                switch (content[0].tipocomunicado) {
                    case '1': //Entrada
                        $('#remitente').val(content[0].autor);
                        $("#etiquetaRemitente").replaceWith('<label class="control-label" id="etiquetaRemitente">Remitente</label>');
                        break;

                    case '2': //Enviado
                        destinatarios = replaceAll(content[0].destinatario, '#@#', ', ');
                        destinatarios = destinatarios.replace(", ", "");
                        $('#remitente').val(destinatarios);
                        $("#etiquetaRemitente").replaceWith('<label class="control-label" id="etiquetaRemitente">Destinatario</label>');

                        //$('#labelremitente').html('Destinatario');
                        break;

                    case '3': //Borrador
                        $('#remitente').val(content[0].destinatario);
                        $("#etiquetaRemitente").replaceWith('<label class="control-label" id="etiquetaRemitente">Destinatario</label>');
                        break;
                }
                $('#asunto').val(content[0].asunto);

                $("#descripcion").replaceWith('<div class="divDescripcionComunicado">' + content[0].descripcion + '</div>');

                $('#fechaenvio').val(content[0].fechaenvio);
                $('#rutarepositoryLectura').val(content[0].urlarchivos);
                mostrarArchivosLectura();

            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
}


/* ***************** */
/*  REFRESCO DE MENU */
/* ***************** */
// 'entrada', 'borrador', 'enviados', 'papelera'
function refrescar_Tabla(entornoorigen) {
    switch (entornoorigen) {
        case 'entrada':
            menu_comuncicadosEntrada();
            break;

        case 'borrador':
            menu_comuncicBorradores();
            break;

        case 'enviados':
            menu_comuncicadosEnviados();
            break;

        case 'papelera':
            menu_comuncicadosPapelera();
            break;


    }
}


function calcularMenu(entornoorigen) {
    var menuRet;
    switch (entornoorigen) {
        case 'entrada':
            menuRet = 'html/entrada.html';
            break;

        case 'borrador':
            menuRet = 'html/borradores.html';
            break;

        case 'enviados':
            menuRet = 'html/enviados.html';
            break;

        case 'papelera':
            menuRet = 'html/papelera.html';
            break;
    }
    return menuRet;
}


/*** Comprobar servicios nuevos solictados **/
function comprobarServiciosSolicitados() {
    var user = sessvars.iduser;
    $.ajax({
        url: './php/servicio_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '7'},
        dataType: 'json',
        success: function (json) {
            var estado = json.status;
            if (estado == 'OK') {

                var datos = json.content;
                alertaServiciosNuevo(datos[0].servicios);

            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error);
        }
    });
}

function alertaServiciosNuevo(num) {
    if (num > 0) {
        $('#imagenservicios').css('display', 'block');
        $('#misservicios').html('Mis Servicios (' + num + ')');
        $('#cabeceraservicios').html(num);
    } else {
        $('#imagenservicios').css('display', 'none');
        $('#misservicios').html('Mis Servicios');
        $('#cabeceraservicios').html('');
    }
}


// MARCAR COMO LEIDO //
function marcaLeidoServicio(servicio) {
    $.ajax({
        url: './php/servicio_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '3', opcion: '5', value: servicio},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {

            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });
}




//Servicios activos de la página de inicio
function loadServiciosActivos(){

    var usuario = sessvars.iduser;

    $.ajax({
        url: './php/servicio_getJson.php',
        type: 'POST',
        data: {user: sessvars.iduser, funcion: '1', opcion: '12', value: usuario},
        dataType: 'json',
        success: function (json) {
            var content = json.content;
            if (json.status == 'OK') {

                if(content.length == 0 ){

                    $("#serviciosactivos").replaceWith('<div id="serviciosactivos">Actualmente no tiene ningún servicio activo.<br>Puede crearlo o activarlo desde el menú "Servicios".</div>');

                } else {
                    for (i = 0; i < content.length; i++) {
                        datosInstanciaInicio(content[i]);
                    }
                }

            } else {
                new PNotify({
                    title: content.title,
                    text: content.text,
                    type: content.type
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log(status + ' ' + error)
        }
    });

}

function datosInstanciaInicio(valores){

    var estadoConexion = '<span style="color:dimgrey">Sin información</span>';
    var iconoInstancia = '<i class="fa fa-cloud" style="color:dimgrey"></i>';
    switch (valores.estadoConexion){

        case 't':
            estadoConexion = '<span style="color:green">Activo</span>';
            var iconoInstancia = '<i class="fa fa-cloud" style="color:green"></i>';
            break;

        case 'f':
            estadoConexion = '<span style="color:red">Sin conexión</span>';
            var iconoInstancia = '<i class="fa fa-cloud" style="color:red"></i>';
            break;
    }


    var texto = '<div class="col-xs-12 col-sm-6 col-md-4 ow-server"><h4 class="page-header text-right">' +
    iconoInstancia + valores.nombre + '</h4>\
    <div class="ow-settings">\
    <a class="ajax-link" href="#html/datos_servicio.html" onclick="load_Servicio(\'' + valores.servicio + '\')"><i class="fa fa-gears"></i></a>\
    </div>\
    <div class="row ow-server-bottom">\
    <div class="col-sm-1">\
    </div>\
    <div class="col-sm-8">\
    <div class="row"><i class="fa fa-lightbulb-o"></i> Luminarias - ' + valores.nluminarias +  '</div>\
    <div class="row"><i class="fa fa-users"></i> Usuarios - ' + valores.nusuarios +  '</div>\
    <div class="row"><i class="fa fa-bolt"></i> Bridge - ' +  estadoConexion + '</div>\
    <div class="row"><i class="fa fa-laptop"></i> <a href="' + valores.urlacceso + '" target="_new">' + valores.urlacceso + '</a></div>\
    </div>\
    </div>\
    </div>';

    $("#serviciosactivos").append(texto);


}









// Subir archivos - upload
$("#boton_subir").on('click', function() {
    subirArchivos();
});

$("#archivos_subidos").on('click', '.eliminar_archivo', function() {
    var archivo = $(this).parents('.row').eq(0).find('span').text();
    archivo = $.trim(archivo);
    eliminarArchivos(archivo);
});

$("#archivos_subidos").on('click', '.ver_archivo', function() {
    var archivo = $(this).parents('.row').eq(0).find('span').text();
    archivo = $.trim(archivo);

    var ruta = $('#rutarepository').val();
    var rutaCompleta = './repository/' + ruta + '/' + archivo;
    window.open(rutaCompleta);
});

// Lectura
$("#archivos_subidosLectura").on('click', '.ver_archivo', function() {
    var archivo = $(this).parents('.row').eq(0).find('span').text();
    archivo = $.trim(archivo);

    var ruta = $('#rutarepositoryLectura').val();
    var rutaCompleta = './repository/' + ruta + '/' + archivo;
    window.open(rutaCompleta);
});




//=====
function subirS3(){

        var formData = new FormData($("#formulario")[0]);
        var ruta = "http://lit-woodland-9635.herokuapp.com/subir_s3/";

        $.ajax({
            url: ruta,
            type: "POST",
            crossDomain: true,
            data: formData,
            contentType: false,
            processData: false,
            callback: 'None',
            //contentType: "application/json",
            //dataType: 'jsonp',


            success: function(datos)
            {
                $("#respuesta").html(datos);
            }
        });
}