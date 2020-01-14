$(document).ready(function(){
  //codigo para que solo cargue en el index
  if(window.location.href.indexOf('index')>-1){
    //crear el slider
    $('.bxslider').bxSlider({
      auto:true,
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive:true,
      speed:500,
      infiniteLoop:true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: false           
    });
  }
    
//codigo para que solo cargue en el index
if(window.location.href.indexOf('index')>-1){
      //crear los post de mi web con array de json
      var posts= [
          {
              title:'Html5',
              date: 'Publicado el día '+ moment().format("DD")+' de '+ moment().format("MMMM")+' del '+ moment().format("YYYY"),
              content: 'HTML5 es un lenguaje markup (de hecho, las siglas de HTML significan Hyper Text Markup Language) usado para estructurar y presentar el contenido para la web. Es uno de los aspectos fundamentales para el funcionamiento de los sitios, pero no es el primero. Es de hecho la quinta revisión del estándar que fue creado en 1990. A fines del año pasado, la W3C la recomendó para transformarse en el estándar a ser usado en el desarrollo de proyectos venideros. Por así decirlo, qué es HTML5 está relacionado también con la entrada en decadencia del viejo estándar HTML 4, que se combinaba con otros lenguajes para producir los sitios que podemos ver hoy en día. Con HTML5, tenemos otras posibilidades para explotar usando menos recursos. Con HTML5, también entra en desuso el formato XHTML, dado que ya no sería necesaria su implementación.'
          },

          {
            title:'CSS3',
            date: 'Publicado el día '+ moment().format("DD")+' de '+ moment().format("MMMM")+' del '+ moment().format("YYYY"),
            content: 'Las siglas CSS (Cascading Style Sheets) significan «Hojas de estilo en cascada» y parten de un concepto simple pero muy potente: aplicar estilos (colores, formas, márgenes, etc...) a uno o varios documentos (generalmente documentos HTML, páginas webs) de forma masiva.Se le denomina estilos en cascada porque se aplican de arriba a abajo (siguiendo un patrón denominado herencia que trataremos más adelante) y en el caso de existir ambigüedad, se siguen una serie de normas para resolverla.'
        },

        {
            title:'Jquery',
            date: 'Publicado el día '+ moment().format("DD")+' de '+ moment().format("MMMM")+' del '+ moment().format("YYYY"),
            content: 'query es una librería de JavaScript cuyo objetivo es facilitar la programación scripting al ofrecer una serie de funciones y métodos con los cuales los usuarios pueden producir páginas web o sitios web más rápido y fácil.El JavaScript es uno de los tres lenguajes que usan los desarrolladores para programar el comportamiento de las páginas web, y Jquery es la biblioteca más empleada de JavaScript. Jquery fue creado por John Resig y lanzado oficialmente en el año 2006.'
        },

        {
            title:'JavaScript',
            date: 'Publicado el día '+ moment().format("DD")+' de '+ moment().format("MMMM")+' del '+ moment().format("YYYY"),
            content: 'Javascript es un lenguaje con muchas posibilidades, utilizado para crear pequeños programas que luego son insertados en una página web y en programas más grandes, orientados a objetos mucho más complejos. Con Javascript podemos crear diferentes efectos e interactuar con nuestros usuarios.Este lenguaje posee varias características, entre ellas podemos mencionar que es un lenguaje basado en acciones que posee menos restricciones. Además, es un lenguaje que utiliza Windows y sistemas X-Windows, gran parte de la programación en este lenguaje está centrada en describir objetos, escribir funciones que respondan a movimientos del mouse, aperturas, utilización de teclas, cargas de páginas entre otros.'
        }
      ];
      
      //SE HACE UN FOREACH PARA RECORRER EL ARRAY DE JSON Y SE GENERA UN PLANTILLA DEL ARTICULO HTML
      posts.forEach((item,index)=>{
          var post=`<article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
          ${item.content}
          <a href="#" class="button">Leer más</a>
          </p>
         </article>`
         //se agrega la variable post al div con el id=posts del html
         $("#posts").append(post);
      });
   }
      //selectores de temas
      var tema = $("#theme");
      var src1 = 'img/astronauta.jpg';
      var src2 = 'img/deer.jpg';
      var src3 = 'img/oso.png';
      $("#to-morado").click(function(){
        tema.attr("href","css/morado.css"); 
        $("#cambio").attr("src",src1);                      
      });
      $("#to-azul").click(function(){
        tema.attr("href","css/azul.css");
        $("#cambio").attr("src",src2);  
     });
     $("#to-gris").click(function(){
        tema.attr("href","css/gris.css");
        $("#cambio").attr("src",src3);  
    });

    //scroll para subir arriba en la web
    $('.subir').click(function(e){
        e.preventDefault();
       $('html, body').animate({
         scrollTop: 0
       },500);
       return false;
    });

    //login falso
    $("#login form").submit(function(){
        //capturamos el valor del input
        var nombre = $("#nombre").val();
        //lo asignamos al localstorage
        localStorage.setItem("nombre",nombre);
    });
    //recuperamos el dato del localstorage y guardamos en una variable
    var nombre_dato = localStorage.getItem("nombre");
    
    /*si el nombre es diferente de nulo o indefinido muestrame el dato, es para que en pantalla no se muestre null
    y ademas ocultar el div del fromulario*/
    if(nombre_dato!=null && nombre_dato!="undefined"){
      //creamos una variable donde guardaremos el selector donde se mostraran los datos para reutilizarlo
      var identificate_parrafo = $("#identificate p");
      //añadimos el dato en el html para que se muestre en pantalla
      identificate_parrafo.html("<br><h1>¡Bienvenido!</h1><br>"+nombre_dato);
      //creamos un link para cerrar sesion
      identificate_parrafo.append("<hr><br><a href='#' id='logout'>Cerrar Sesión</a>");
      $("#login").hide();

      //funcion para cerrar sesion(limpiar el localstorage)
      $("#logout").click(function(){
          localStorage.clear();
          location.reload();
      });
    }    

    /*codigo para que solo se utilice en la pagina about*/ 
    if(window.location.href.indexOf('about')>-1){     
      var info = [
            {
              title:'Nuestros Servicios',
              dato:'Brindamos soluciones tecnológicas para negocios y hogares, Soporte Técnico, Mantenimiento de pc´s, Instalación de Camaras, Diseño Web , Redes Sociales, Diseño Gráfico'
            },
            {
              title:'Nuestros Clientes',
              dato:'Negocios, Pequeñas y Medianas Empresas, Emprendedores, Hogares, Oficinas'
            },
      ]; 

      //SE HACE UN FOREACH PARA RECORRER EL ARRAY DE JSON Y SE GENERA UN PLANTILLA DEL ARTICULO HTML
        info.forEach((item,index)=>{
          var informacion=`
          <h3>${item.title}</h3>         
          <p>
          ${item.dato}        
          </p>`
         //se agrega la variable post al div con el id=posts del html        
         $("#acordeon").append(informacion);
      });
        $("#acordeon").accordion(); 
    }

    /*codigo para el reloj */
    if(window.location.href.indexOf('reloj')>-1){
       //generar un bucle para ir contando los segundos con setinterval
       setInterval(function(){
          //dar formato a la hora
          var reloj = moment().format("hh:mm:ss");
          //poner la hora en pantalla
          $("#reloj").html(reloj);
       });     
    }
  
    /*codigo de validacion*/
    if(window.location.href.indexOf('contacto')>-1){   
      $("form input[name='fecha']").datepicker({
        dateFormat: 'dd/mm/yy'           
      });   
      
      $.validate({
           lang:'es',
           validateOnBlur : false, // disable validation when input looses focus
           errorMessagePosition : 'top', // Instead of 'inline' which is default
           scrollToTopOnError : false // Set this property to true on longer forms
      });
    }
});