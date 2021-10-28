<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 El producto

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .bloque-texto-a.color-primario.p-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema2/img01.svg')(data-aos="fade-right")
            .col-lg-8
              .bloque-texto-a__texto.p-5(data-aos="fade-left")
                p No solo incluye los objetos que se pueden adquirir o comprar, como carros, computadores, teléfonos celulares, entre otros; pues esta definición incluye aquello que no es tangible pero que lo disfrutamos, como eventos, ingreso a lugares, ideas o una mezcla de todo esto. El concepto “producto” se aborda en el sentido más amplio que incluye todo lo anterior; así un carro Toyota, una moto Pulsar y un café de Juan Valdez son productos, también lo son un viaje a Santa Marta, una asesoría o una capacitación en línea.
      .col-lg-10.mb-4
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p La #[i American Marketing Asociation] (A.M.A.) define producto (en inglés: #[i product]) y menciona lo siguiente: "Conjunto de atributos (características, funciones, beneficios y usos) que le dan la capacidad para ser intercambiado o usado. Usualmente, es una combinación de aspectos tangibles e intangibles. Así, un producto puede ser una idea, una entidad física (un bien), un servicio o cualquier combinación de los tres. El producto existe para propósitos de intercambio y para la satisfacción de objetivos individuales y organizacionales".
      .col-lg-10.mb-4
        p En el mundo de la mercadotecnia, también encontramos otras definiciones de productos:
      .col-lg-5.mb-4(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-4 Un producto es un bien, servicio o idea consistente en un conjunto de atributos, tangibles e intangibles, que satisfacen al consumidor y reciben a cambio de dinero o alguna otra unidad de valor 
            p (Mullins, 2007).
            i.fas.fa-quote-right
      .col-lg-5.mb-4(data-aos="fade-left")
        p Para Kotler (2007), en su libro Marketing; 
        .bloque-texto-b.color-primario.p-2
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-4 un producto se define como “todo aquello que se puede ofrecer en el mercado para su atención, adquisición, consumo, que satisface un deseo o una necesidad”.
            i.fas.fa-quote-right
      .col-lg-6.mb-4
        p.mb-4 Desde la perspectiva de los clientes, se adquieren los productos como un medio para satisfacer sus necesidades, porque con ellos se compran los beneficios que trae consigo cada uno de ellos, es un “satisfactor de su necesidad”. Desde el punto de vista del vendedor, el producto es una herramienta que permite atraer clientes, por eso debe conocer muy bien los atributos del producto para que pueda divulgarlos y darlos a conocer de manera correcta. Desde el mercadeo, es producto es un elemento importante para toda la estrategia que se vaya a diseñar; es decir, el #[i marketing mix], centra su planificación desde los beneficios del producto para obtener una mayor rentabilidad.
        p.mb-0 El producto es un conjunto de elementos tangibles e intangibles que son percibidos por el cliente como los satisfactores de sus necesidades. El consumidor está en un constante aprendizaje, porque “compran algo más que un producto”, lo que compran es un conjunto de deseos, expectativas, ideales, entre otras cosas que se hacen tangibles con su adquisición.
      .col-lg-5.mb-4
        img(src='@/assets/curso/tema2/img02.png')(data-aos="fade-left")

    Separador
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h3 2.1 Atributos del producto
    
    figure.mb-4
      img(src='@/assets/curso/tema2/img03.png')(data-aos="flip-up")
    
    p.mb-4 Los atributos, también pueden definirse como “funciones del producto”, las funciones son los atributos tangibles e intangibles del producto, que por su diseño, soluciones a los problemas y soluciones a las necesidades del cliente le generan satisfacciones.
    p.mb-4 La mayoría de los clientes, busca más los beneficios que el producto mismo, por tanto, la empresa puede ofrecer un conjunto de atributos intangibles que acompañan el producto. Así mismo, la empresa puede concentrar sus esfuerzos en ofrecer productos intangibles (servicios) lo que hoy se denominan “experiencias” que se convierten en objetos de valor para el cliente. Hoy día, las experiencias se han convertido en un factor diferenciador entre la empresa y sus competencias.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="fade-right")
          p.mb-4 Los atributos de un producto pueden ser tangibles e intangibles y juntos, representan lo que puede denominarse “personalidad del producto”. Aunque se presentan unos atributos que pueden ser comunes, estos pueden cambiar o valorarse de forma diferente, dependiendo del tipo de producto.
          p Basado en lo anterior, los principales atributos son:
    
    .row.mb-4
      .col-lg-3.col-6
        img(src='@/assets/curso/tema2/img04.svg')(data-aos="fade-right") 
      
    .row.justify-content-center.mb-4
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img05.svg')
          .tarjeta.color-yellow-light.p-3(x="13%" y="19%")
            p Son aquellos que por su material o técnica lo hacen apto para determinadas funciones y usos.
          .tarjeta.color-yellow-light.p-3(x="71%" y="52%")
            p Este atributo toma una gran importancia al momento de tomar la decisión de adquirir el producto.
          .tarjeta.color-yellow-light.p-3(x="57%" y="39%")
            p Es el elemento que protege al producto y que junto al diseño, adquiere un gran valor promocional y de imagen.
          .tarjeta.color-yellow-light.p-3(x="79%" y="73%")
            p Permiten, en mayor o menor grado, la identificación del producto o la empresa.
          .tarjeta.color-yellow-light.p-3(x="33%" y="78%")
            p Facilita la identificación del producto y que asociado a otro atributo, permite su recuerdo.
          .tarjeta.color-yellow-light.p-3(x="74%" y="15%")
            p Conjunto de valores agregados a la compra del producto
    
    p.mb-4 El departamento de #[i marketing] debe prestar especial atención a estos atributos, enfocando sus esfuerzos en aquellos que sean más importantes para el público objetivo de su producto: el empaque, las garantías, los servicios, así como la marca coadyuvan a impactar el mercado meta.
    p.mb-4 Los consumidores se basan en diversas características o diferenciadores para adquirir el producto. A continuación, se enlistan algunos atributos en los que se basan los consumidores para evaluar los productos o servicios, de acuerdo a Mullins (2007):
    
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Figura 1
      span #[i Atributos del producto ]
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema2/img06.svg')
  
    p.mb-4 Existen otros atributos que, sin ser tangibles, juegan un papel importante en la toma de decisiones para la adquisición de un producto, estos son:

    .row.justify-content-center.mb-4
      .col-lg-10
        LineaTiempoD.color-primario.mb-4
          .row.justify-content-center.tarjeta.color-blue-light.p-4(numero="1" titulo="Imagen del producto")
            p.mb-4 Percepción del producto que se crea en la mente del consumidor según la información recibida del producto.
            .col-md-4.mb-0
              img(src='@/assets/curso/tema2/img07.svg')
          .row.justify-content-center.tarjeta.color-blue-light.p-4(numero="2" titulo="Imagen de la empresa")
            p.mb-4 Es una opinión generada en la memoria del mercado que interviene positiva o negativamente en los criterios y actitudes del consumidor hacia los productos. En muchos casos, compramos un producto porque la empresa que lo produce tiene una buena imagen o posicionamiento.
            .col-md-6.mb-0
              img(src='@/assets/curso/tema2/img08.svg')
          .row.justify-content-center.tarjeta.color-blue-light.p-4(numero="3" titulo="Calidad")
            p.mb-4 Es la valoración de los elementos que componen el producto, en relación de unos estándares que miden las cualidades y lo comparan con la competencia.
            .col-md-4.mb-0
              img(src='@/assets/curso/tema2/img09.svg')

        p.mb-4 Por su parte, en el ciclo de vida del producto, una de las fases se denomina “desarrollo del producto”, aquí es importante que se definan los beneficios que se ofrecerán por parte de la empresa que estén asociados al producto, algunos de ellos son el diseño, composición, estilo, calidad, marca, etc.

    .row.justify-content-center.mb-4
      .col-lg-7.mb-4
        .bloque-texto-c.color-primario.p-4.mb-4(data-aos="fade-right")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-4 La atención a las necesidades del cliente puede orientar a la empresa sobre aquellas características adicionales del producto; desde una descripción mercadológica de calidad, es la capacidad del producto para desarrollar funciones que incluye su duración general, su fiabilidad, su precisión, la facilidad de utilización y reputación del mismo, entre otros atributos de gran importancia 
            p (Kotler, 2007).
            i.fas.fa-quote-right
        p.mb-4 Los atributos del producto son puntos clave de diferenciación con los productos de la competencia e inciden directamente en la decisión de compra. Atributos como el diseño y el estilo, podrían ser los más importantes al momento de decidir la compra, pero, realmente, son todos los atributos que, en conjunto, motivan al consumidor. 
        p.mb-4 De otro lado, la empresa concentra su decisión en atributos como la calidad, las características, el diseño, la marca, entre otros, para diseñar diferentes acciones de #[i marketing] que ayuden en la difusión de su estrategia de #[i marketing] en el público meta. Para la empresa, el seleccionar un nombre atractivo, el diseño del envase, diseño de la etiqueta y un conjunto de servicios que acompañen representan factores importantes para diferenciarse de la competencia y diseñar una adecuada estrategia de #[i marketing].
      .col-lg-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img10.svg')
    
    Separador
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h3 2.2 Niveles de productos
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 “Un producto es más que una cosa”, es una afirmación dada por el economista Philip Kotler, experto reconocido en el campo del #[i marketing]. El producto debe satisfacer las diferentes necesidades del consumidor y agregar valor (beneficios percibidos) de acuerdo con esto, el autor afirma que existen cinco niveles de productos de acuerdo con el grado de percepción de sus beneficios, indicando así, el valor que el consumidor le asigna al producto. Un consumidor sólo estará satisfecho cuando el valor asignado sea igual o superior al valor esperado. 
        p A continuación, se muestran los niveles del producto:

    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema2/img12.png')

    Separador
    #t_2_3.titulo-segundo(data-aos="fade-right")
      .h3 2.3 Clasificación de productos
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 Los productos se clasifican en dos grandes grupos: los productos de consumo y los productos industriales. Los productos de consumo son aquellos que se orientan al consumidor final para su uso personal o familiar; de otro lado, los productos industriales se adquieren para un procesamiento posterior o realizar un negocio, hacen mención a los insumos para hacer otros productos.
        p De acuerdo con la clasificación, de productos de consumo e industriales, podemos identificar diferentes tipos de productos, así:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Figura 2
      span #[i Productos de consumo]
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema2/img13.svg')

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Figura 3
      span #[i Productos industriales]
    .row.justify-content-center.mb-4
      .col-lg-10 
        figure.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/tema2/img14.svg')
        p Al conocer el tipo de producto es posible definir cuál es el precio con el que puede lanzarse al mercado, identificar los canales de distribución en los que se puede comercializar, qué tipo de promoción, entre otros factores importantes, que ayudarán a la construcción del plan de #[i marketing].

    Separador
    #t_2_4.titulo-segundo(data-aos="fade-right")
      .h3 2.4 Características del producto

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 Las características generan un cambio en el producto, no lo suficiente para indicar que es un producto diferente, pero sí, que sea susceptible de comercialización. Las características de un producto se dividen en generales y técnicas, como se muestra en la siguiente figura:
    
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema2/img15.png')

    .row.justify-content-center.mb-4
      .col-lg-10
        p En las principales características del producto, tenemos aquellas que pueden clasificarse en orden general y aquellas que son técnicas. Encontrando:
    
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img16.png')
      .tarjeta.color-yellow-light.p-3(x="23%" y="43%")
        h4 Tangibles:
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle
            | Precio: el precio es el monto o valor económico (en moneda) que se asigna a un producto con el fin que pueda ser adquirido por el cliente o consumidor.
          li 
            i.fas.fa-check-circle
            | Diseño: el diseño en un producto se refiere a la combinación de la tipografía, color, forma, tamaño, material, entre otros, que constituyen el aspecto visual del producto.
          li 
            i.fas.fa-check-circle
            | Envase: es el contenedor que mantiene o contiene el producto y lo protege de agentes externos.
          li 
            i.fas.fa-check-circle
            | Etiquetado: es la pieza que completa el empaque de todo tipo de producto, presenta la información de ingredientes, composición, material, instrucciones, entre otras para manipular correctamente el producto.
      .tarjeta.color-yellow-light.p-3(x="77%" y="43%")
        h4 Intangibles
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle
            | Calidad: es la percepción que el cliente tiene del producto en su totalidad, no solo por sus atributos tangibles, sino también por sus beneficios, valores agregados, etc.
          li 
            i.fas.fa-check-circle
            | Marcas o símbolos: es la imagen que permite que los consumidores identifiquen el producto.
          li 
            i.fas.fa-check-circle
            | Imagen corporativa: es la identidad visual de la empresa que representa al producto y lo posiciona.
          li 
            i.fas.fa-check-circle
            | Servicios: los servicios asociados al producto, hacen parte del acompañamiento o garantías que la empresa pone al servicio del cliente.
      .tarjeta.color-red-light.p-3(x="13%" y="79%")
        p #[strong Peso]: se refiere a las unidades como miligramos, gramo, kilogramo, etc contenido en el envase. 
      .tarjeta.color-red-light.p-3(x="37%" y="79%")
        p #[strong Densidad]: la densidad en un producto es la relación entre el peso, las dimensiones, el tamaño y el espacio que ocupa un producto en la estantería. En ocasiones, un cliente no compra un producto, porque ocupa demasiado espacio, pese a que el producto es liviano.
      .tarjeta.color-red-light.p-3(x="60%" y="79%")
        p #[strong Material]: en caso de los productos tangibles, se refiere a la composición del producto.
      .tarjeta.color-red-light.p-3(x="85%" y="79%")
        p #[strong Volumen]: en el caso de los líquidos, se refiere al espacio que ocupa el producto en relación con el peso.

    Separador
    #t_2_5.titulo-segundo(data-aos="fade-right")
      .h3 2.5 Empaque
    
    .row.justify-content-center.mb-4
      .col-lg-6.mb-4
        p.mb-4 El empaque puede convertirse en el elemento más importante en el proceso de comunicación y venta de un producto. Su diseño, forma y presentación, hacen que el producto sea visible en una estantería o vitrina y logre persuadir al consumidor para tomar una decisión de compra. Así mismo, el empaque de un producto permite transportarlo de un lugar a otro, para que este no sufra daños y lo mantenga limpio y fresco, en caso de que sea un alimento.
        p.mb-4 Algunos aspectos importantes del empaque son:
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle
            | El empaque y la presentación del producto comenzaron a influir en la decisión de compra.
          li 
            i.fas.fa-check-circle
            |	El empaque es la cara visible de la marca.
          li 
            i.fas.fa-check-circle
            |	El empaque constituye la envoltura o protección que acompaña al producto y al mismo tiempo, forma parte de sus atributos.
      .col-lg-5.mb-0
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Figura 4
          span #[i Empaques en estantería como factor de comercialización y venta del producto]
        img(src='@/assets/curso/tema2/img17.png')(data-aos="fade-left")
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 El empaque fortalece las estrategias de #[i marketing], aunque su objetivo es proteger el producto que lleva dentro, la función principal es promover la venta. 
        p.mb-0 El empaque representa la protección del producto contra factores que puedan afectar sus características físicas de frescura, sabor, color y textura, la comodidad que puede brindar el empaque para el almacenamiento y distribución, facilita el control de inventarios, manipulación y transporte. Así mismo, el empaque presenta información necesaria acerca del uso, los ingredientes y la composición del producto. 

    Separador
    #t_2_6.titulo-segundo(data-aos="fade-right")
      .h3 2.6 Etiqueta

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Figura 5
      span #[i Etiqueta]
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema2/img18.svg')     

    Separador
    #t_2_7.titulo-segundo(data-aos="fade-right")
      .h3 2.7 Envase
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p Es el contenedor que está en contacto directo con el producto, permite su protección y evita su esparcimiento. Algunos ejemplos de envases son las bolsas de #[i snacks], botellas de agua, la caja de un computador, entre otras. Al igual que el empaque, el envase también cumple la función de ofrecer una presentación adecuada del producto que facilite la venta, la manipulación, el almacenamiento y la distribución.
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Figura 6
          span #[i El envase contiene el producto y lo protege de los agentes externos]
      .col-lg-4.mb-0
        img(src='@/assets/curso/tema2/img19.png')(data-aos="fade-right")
      .col-lg-4.mb-4
        img(src='@/assets/curso/tema2/img20.png')(data-aos="fade-left")
      .col-lg-10.mb-0
        p En algunos casos, el empaque y el envase son lo mismo; por ejemplo, en el caso de los medicamentos como jarabes o pastillas, el envase contiene el medicamento y el empaque es la caja que los protege.

    Separador
    #t_2_8.titulo-segundo(data-aos="fade-right")
      .h3 2.8 Embalaje
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p.mb-4 El embalaje es una forma de empaque que, principalmente, cumple la función de transportar el producto de un lugar a otro, como parte de un proceso logístico. El embalaje no necesariamente es en cajas, también puede ser un envoltorio plástico que se pone alrededor de uno o varios productos envasados o empaquetados.
        p Los embalajes pueden clasificarse en 3 niveles:

    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img21.png')
      .tarjeta.color-blue-light.p-3(x="53%" y="20%")
        h4 Empaque primario
        p Está en contacto directo con el producto
      .tarjeta.color-blue-light.p-3(x="80%" y="40%")
        h4 Empaque secundario
        p Protege el embalaje primario y se puede desechar al momento de que el producto es usado.
      .tarjeta.color-blue-light.p-3(x="37%" y="74%")
        h4 Empaque terciario o de transporte
        p Protege al producto al momento de transportarlo, especialmente en exportación o distribución.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p.mb-4 El embalaje provee mecanismos de protección del producto:
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle
            p 
              strong Contra maltrato
              | : al momento de algún desplazamiento o transporte, el producto podría golpearse o sufrir algún daño
          li 
            i.fas.fa-check-circle
            | #[strong Humedad]: el embalaje evita que el producto esté en contacto con agentes externos como el agua o la humedad.
          li 
            i.fas.fa-check-circle
            | #[strong Temperatura]: el embalaje protege el producto de los cambios de temperatura o agentes climáticos.
          li 
            i.fas.fa-check-circle
            | #[strong Radiación]: la radiación puede afectar el producto, aún si no se tiene un contacto directo.
          li 
            i.fas.fa-check-circle
            | #[strong Luminosidad]: existen productos que no pueden recibir demasiada luz, tales como medicamentos u otros líquidos. En este caso, el embalaje protege al producto de los cambios de luz.
        p El auge del comercio electrónico le ha dado mucha importancia al embalaje, pues garantiza que el producto llegue de forma segura al consumidor. Alimentos, kits de herramientas, ropa, medicamentos, entre otros, ya están llegando a las puertas de los clientes, por tanto, la empresa debe asegurar que el producto llegue intacto.
    Separador
    #t_2_9.titulo-segundo(data-aos="fade-right")
      .h3 2.9 Portafolio de productos

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .bloque-texto-g.color-primario.p-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img22.png')})`}"
          )
          .bloque-texto-g__texto.p-5(data-aos="fade-left")
            p Un portafolio de productos, también denominado mezcla de productos, consta de todas las líneas de productos que un vendedor específico ofrece a un cliente o un conjunto de clientes. Un Portafolio de productos bien estructurado, le ayuda a la empresa a trazar su estrategia comercial.    

    separador  
    #t_2_10.titulo-segundo(data-aos="fade-right")
      .h3 2.10 Ciclo de vida
    
    p.mb-4 La propuesta de ciclo de vida del producto, se le atribuye a Theodore Levitt, publicado en la #[i Harvard Bussines Review]. De acuerdo con la teoría de Levitt los productos tienen un ciclo de vida en relación con su permanencia en el mercado, por tanto, podemos hablar de cinco etapas como: desarrollo de producto, introducción, Crecimiento, Madurez y Declive o decadencia. 
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p En el siguiente recurso se muestra gráficamente el ciclo de vida de un producto:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA
        .row.justify-content-center.p-4
          .col-md-10.mb-4.mb-md-0.color-white.p-4
            h4 Ciclo de vida del producto.
            p.mb-4 La etapa de desarrollo del producto, es una etapa previa a la introducción, incluye las fases como la investigación de mercados, el diseño de producto, prototipado, test de usuario, entre otras actividades que identifican la viabilidad del producto. En esta etapa no se generan ingresos o utilidades.
            .row.justify-content-center
              .col-md-8.mb-0 
                img(src='@/assets/curso/tema2/img23.png') 
        .row.justify-content-center.p-4
          .col-md-10.mb-4.mb-md-0.color-white.p-4
            h4 Ciclo de vida del producto.
            p.mb-4 #[i Aspectos clave en la etapa de introducción]
            p.mb-4 Algunos comportamientos importantes en cada etapa subsiguiente, son:
            .row.justify-content-center
              .col-md-8.mb-0
                img(src='@/assets/curso/tema2/img24.png')
        .row.justify-content-center.p-4
          .col-md-10.mb-4.mb-md-0.color-white.p-4
            h4 Ciclo de vida del producto.
            p.mb-4 #[i Aspectos clave en la etapa de crecimiento.] 
            .row.justify-content-center
              .col-md-8.mb-0
                img(src='@/assets/curso/tema2/img25.png')
        .row.justify-content-center.p-4
          .col-md-10.mb-4.mb-md-0.color-white.p-4
            h4 Ciclo de vida del producto.
            p.mb-4 #[i Aspectos clave en la etapa de madurez.]
            .row.justify-content-center
              .col-md-8.mb-0
                img(src='@/assets/curso/tema2/img26.png')
        .row.justify-content-center.p-4
          .col-md-10.mb-4.mb-md-0.color-white.p-4
            h4 Ciclo de vida del producto.
            p.mb-4 #[i Aspectos clave en la etapa de declive o decadencia.]
            .row.justify-content-center
              .col-md-8.mb-0
                img(src='@/assets/curso/tema2/img27.png')
    separador
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass" scoped></style>
