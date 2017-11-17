var ib_how_to_data = function(){/*
<ib-div class="ib_modal_container">
  <ib-div class="ib_p">
    Si tu es one-man performer y todo que haces para tu negocio lo haces solo – bienvenido al club! Conoces bien el aburrimiento de escribir facturas. Word? Excel? Software de contabilidad complicado? Olvida todo y saluda a tu nueva alegría!
  </ib-div>

  <ib-div class="ib_h3">Que puedo hacer con esta plantilla?</ib-div>
  <ib-div class="ib_p">
    <ib-div class="ib_ul">
      <ib-div class="ib_li">
        &#9679; &nbsp; Escribe facturas profesionales en cuestión de segundos.
        <ib-div class="ib_ul">
          <ib-div class="ib_li">
            &#9675; &nbsp; Utilice cualquier idioma o moneda.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Añade tu logotipo con un simple arrastrar y soltar.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Añade, elimina y reordena fácilmente las líneas de las secciónes
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Añade impuestos y descuentos.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Configura la visibilidad de la sección de la columna.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Autocalcula subtotales, totales, impuestos y descuentos.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Guarda los datos de negocio por estándar para tu uso futuro.
          </ib-div>
        </ib-div>
      </ib-div>
      <ib-div class="ib_li">
        &#9679; &nbsp; Redisegnala con otro estilo, usando de técnicas de HTML y CSS simples.
      </ib-div>
      <ib-div class="ib_li">
        &#9679; &nbsp; Imprime directamente.
      </ib-div>
      <ib-div class="ib_li">
        &#9679; &nbsp; Guardala en formato PDF o guardala online.
      </ib-div>
    </ib-div>
  </ib-div>

  <ib-div class="ib_h3">¿Cómo puedo guardar mis datos de negocio predefinidos para uso futuro?</ib-div>
  <ib-div class="ib_p">
    Haz click <ib-span class="ib_b">&quot;Guardar Estado&quot;</ib-span> al botón y sigue las instrucciones de la pantalla.
  </ib-div>

  <ib-div class="ib_h3">Cómo guardar la factura?</ib-div>
  <ib-div class="ib_p">
    Hay dos maneras de guardar la factura:
    <ib-div class="ib_ul">
      <ib-div class="ib_li">
        - &nbsp; Guardar en PDF usando la impresora PDF.
      </ib-div>
      <ib-div class="ib_li">
        - &nbsp; Guardala online en nuestro sistema de facturación online Invoicebus
      </ib-div>
    </ib-div>
  </ib-div>

  <ib-div class="ib_p">
    Guardando la factura en PDF se puede hacer usando algo llamado PDF Print Driver. Esto también se conoce como impresión en PDF ya que el resultado del navegador se envía a un archivo en lugar de una impresora. Esta funcionalidad se crea en algunos navegadores (como Google Chrome) mientras en otros (como Firefox o Internet Explorer)es necesario instalar la impresora de PDF de forma manual. Una impresora de PDF buena y gratis es <ib-span class="ib_a" onclick="window.open('http://www.bullzip.com', '_blank')">Bullzip</ib-span>. Si ya has instalado una impresora PDF, <ib-span class="ib_b">click &quot;Impresión&quot;, establece el objetivo para la impresión &quot;Guarda en PDF&quot; y haz click guarda</ib-span>.
  </ib-div>

  <ib-div class="ib_p">
    Para guardar tu factura online, primero debes crear una cuenta Invoicebus. Esto se puede hacer con un simple clic &quot;Guardar Online&quot; botón. Después, serás llevado a una página segura donde puedes completar tu registro y guardar la factura. Por favor, tenga en cuenta que una factura online es mucho más potente que una factura en PDF estático. Por ejemplo, una factura online se puede cambiar on-the-fly, enviada por correo electrónico, rastreada y pagada directamente con Credit card, PayPal o Bitcoin. Aquí es <ib-span class="ib_a" onclick="window.open('https://invoicebus.com/demoinvoice/', '_blank')">example</ib-span>.
  </ib-div>

  <ib-div class="ib_h3">Cómo remodelar la plantilla?</ib-div>
  <ib-div class="ib_p">
    La plantilla está hecha con una simplicidad y se puede personalizar con tu logotipo y colores.Sin embargo, se necesita un conocimiento básico de HTML y CSS.
  </ib-div>

  <ib-div class="ib_p">
    Para cambios más pequeños (como el cambio de colores, la fuente o el tamaño de los elementos) sólo hay que modificar el archivo <ib-span class="ib_code">template.css</ib-span>. Si deseas hacer grandes cambios estructurales de layout  (eliminando o traferendo elementi), tendrás que modificar el archivo <ib-span class="ib_code">template.html</ib-span>. Hemos creado <ib-span class="ib_a" onclick="window.open('https://invoicebus.com/create-html-invoice-template/', '_blank')">guide</ib-span> con las mejores prácticas de cómo crear tu propia plantilla, así que no dude en utilizarla como un punto de referencia.
  </ib-div>

  <ib-div class="ib_p">
    <ib-span class="ib_b">Note:</ib-span> La plantilla es totalmente diferente de la lógica,  por eso no se debe mezclar con cualquier programa o código JavaScript.
  </ib-div>

  <ib-div class="ib_h3">Tengo que estar conectado a Internet para utilizarla?</ib-div>
  <ib-div class="ib_p">
    Sí, pero no es necesario. En el fondo la plantilla se conecta a un archivo JavaScript (<ib-span class="ib_code">generator.min.js</ib-span>) colocado en nuestro servidor que tira toda la lógica. Si por alguna razón no tienes conexión a Internet para su computadora, puedes <ib-span class="ib_a" onclick="window.open('http://cdn.invoicebus.com/generator/generator.zip', '_blank')">descargar</ib-span> el script localmente, y modificar <ib-span class="ib_code">template.html</ib-span> el archivo para apuntar a la versión local del script.
  </ib-div>

  <ib-div class="ib_p">
    Por lo general, te animamos a seguir utilizando el scrip viejo, ya que cualquier actualización si refleja inmediatamente.
  </ib-div>

  <ib-div class="ib_h3">Qué ocurre con los caracteres utilizados?</ib-div>
  <ib-div class="ib_p">
    La plantilla utiliza Fuentes de Google, ya que son gratuitas y abiertas a todos. Si quieres utilizar la plantilla offline (sin estar conectado a Internet) debes descargar y instalar las fuentes en tu ordenador (<ib-span class="ib_a" onclick="window.open('http://www.fonts.com/web-fonts/google', '_blank')">SkyFonts</ib-span> es una herramienta sencilla y te ayuda a hacer esto facilmente).
  </ib-div>

  <ib-div class="ib_h3">Puedo utilizar el código JavaScript?</ib-div>
  <ib-div class="ib_p">
    ¡Por supuesto! De hecho, vamos a estar orgullosos de ti por hacerlo (<ib-span class="ib_a" onclick="window.open('https://github.com/Invoicebus/html-invoice-generator', '_blank')">tenedor nos en GitHub</ib-span>). A pesar decides de utlizarlo en proyectos comerciales o no comerciales, no dudes en decirnos porque queremos saber todas las posibilidades como esta harramienta puede ser utilizada. A veces, te podemos ayudar ;)
  </ib-div>

  <ib-div class="ib_h3">Apoya el nuestro trabajo</ib-div>
  <ib-div class="ib_p">
    Mantener este script requiere mucho tiempo y esfuerzo para salvarlo libre y actualizado.Todo lo que buscamos es una pequeña ayuda – escribir las cláusulas en la parte baja de nuestro servicio de facturación al final del documento. Esto significará un mundo para nosotros si las dejas allí. Gracias!
  </ib-div>

  <ib-div class="ib_p">
    No hay problema si no quieres darnos crédito y por eso hemos hecho esto aún más fácil para ti. En el archivo <ib-span class="ib_code">data.txt</ib-span> hemos incluido propiedad llamada <ib-span class="ib_code">invoicebus_fineprint</ib-span> que se puede ajustar en <ib-span class="ib_code">true</ib-span> (para mostrar las clausulas) o <ib-span class="ib_code">false</ib-span> (para nasconder las clausulas).
  </ib-div>

  <ib-div class="ib_h3">Has encontrado un eror?</ib-div>
  <ib-div class="ib_p">
    Si te encuentras con algun problema o error, por favor denucialo a <ib-span class="ib_a" onclick="window.open('https://github.com/Invoicebus/html-invoice-generator/issues', '_blank')">GitHub repo</ib-span>. Por favor, no haces preguntas generales aquí, utiliza el nuestro foro de soporte (véase más abajo).
  </ib-div>

  <ib-div class="ib_h3">Sugerencias, preguntas, críticas?</ib-div>
  <ib-div class="ib_p">
    Hay algo para hacer esta plantilla más bella y mejor para ti? Cosas buenas / cosas malas? Siéntase libre para encontrar el título apropiado en el nuestro <ib-span class="ib_a" onclick="window.open('https://groups.google.com/d/forum/html-invoice-generator', '_blank')">foro de soporte</ib-span> y golpearnos – Leemos y respondemos a todos los envíos.
  </ib-div>
</ib-div>
*/}
