-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2023 a las 05:43:02
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tmt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `categoria_id` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`categoria_id`, `categoria`) VALUES
(1, 'Muebles'),
(2, 'Electrodomesticos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto_id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `precio` float NOT NULL,
  `descripcion` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `descuento` int(11) NOT NULL DEFAULT 0,
  `cuotas` int(11) NOT NULL DEFAULT 1,
  `subCategoria_id` int(11) NOT NULL,
  `sale` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_id`, `titulo`, `precio`, `descripcion`, `img`, `descuento`, `cuotas`, `subCategoria_id`, `sale`) VALUES
(3, 'Mesa Comedor Estilo Nordico', 15675, 'Mesa comedor 120 cm x 70 cm estilo nordico.', 'mesaG.jpg', 20, 3, 1, 'null'),
(4, 'Mesa De Luz Madrid 1', 9489, 'MESA DE LUZ MODERNA CON ESTANTE 1 CAJON DORMITORIO CENTRO ESTANT Lo primero que verás al abrir los ojos va a ser esta moderna y práctica mesa de luz que hará de tu dormitorio el lugar que siempre soñaste.Colores disponibles: Blanco, Wengue', 'mesaLuz.jpg', 10, 3, 1, 'OnSale'),
(5, 'Mesa Comedor Redonda', 18000, 'MESA COMEDOR VINTAGE LA MESA SE ENTREGA DESARMADA MEDIDAS:Diámetro de 110 Cm Altura de 80', 'mesaR.jpg', 10, 3, 1, 'null'),
(6, 'Cama 2 plazas', 55000, 'Cama de 150 cm de ancho por 190 o 200 cm de largo con tela antideslizante y una altura base de 20 cm', 'camaG.jpg', 20, 3, 2, 'null'),
(7, 'Cama De Una Plaza', 53000, 'Box Sommier / Cod T6440 — Envio SIN CARGO CAPITAL FEDERAL ! – (( Alrededores consulte! Bajos costos ... ))  °CARACTERISTICAS :: Espectacular Box Super Funcional 4 Cajones – – – LINEA PREMIUN – – –  *Medidas del BOX: Largo: 1,95 m - Ancho 0,92 m - Alto 0,33 m * * * NO INCLUYE EL RESPALDO * * * *Cantidad de Cajones:4 (interior totalmente revestido) *Correderas metálicas *Sistema Minifix * PARA Sommier de 80 A 90cm de ancho * Organizador de Calzado Botinero en el frente * Estructura super Resistenta + 5 soportes hasta el piso ----------------- *Medidas de Cajas: -Caja 1: 32 X 176 X 16 CM - Peso: 46 kg -Caja 2: 56 X 69 X 11 CM - Peso: 23 kg -Caja 3: 26 X 96 X 7 CM - Peso: 9 kg  PESO TOTAL 77 KG ------------------------------------------------------------------------------------------ Se provee UNICAMENTE en COLOR : *BLANCO EVEREST (EV) ---------------------------------------------------------------------------------------- # Productos en caja para armar - AMV recomienda siempre nuestro servicio de armado por Personal Capacitado de nuestra empresa, CONSULTE! bajos costos', 'camaMinimalista.jpg', 20, 3, 2, 'null'),
(8, 'Cama Baúl 2 Plazas', 131825, 'Sistema hidráulico de máxima calidad, preparado para levantar y cerrar la tapa sin ningún esfuerzo. El sistema de apertura europeo hace que la tapa se deslice hacia adelante sin necesidad de correr el colchón de la pared. Mecanismo fabricado con ángulos y planchuelas de acero, tuercas auto bloqueantes garantizando una alta durabilidad. Exclusivo sistema Feld-Stappled, preparado para las mayores exigencias de peso y movimiento, soportando hasta 300kg, la mas resistente del mercado. El tapizado en Chenille le otorga la terminación de calidad y mueble Premium. El espacio de guardado de 25cm permite acomodar valijas, sabanas, zapatos, ropa, etc.  .................................................................................................................. BEDDING COMPANY Por más de 30 años acompañando el descanso de los argentinos, con productos de calidad y respetando los estándares la máxima calidad que un descanso premium se merece.  ..................................................................................................................  GARANTIA: 1 AÑOS  ..................................................................................................................  FORMAS DE PAGO: Podes pagar a través de mercado pago con tarjeta de crédito al instante o en efectivo generando el cupón de pago para Rapipago o Pago Fácil según sea tu preferencia Realizamos Facturas Consumidor Final, A y B adaptándonos a cada necesidad.', 'camaBaul.jpg', 20, 3, 2, 'null'),
(9, 'Mesa De Escritorio', 17800, 'La solución para tu casa u oficina está en el escritorio Máximo 100, no ocupa mucho espacio y cabe perfecto tu pc o notebook. Es fácil de armar (incluye manual de instrucciones) y la calidad de los materiales es excelente. El espesor de las placas es de 15 mm. Posee correderas metálicas que permiten que el cajón se deslice correctamente sin interrupciones.  El producto se despacha en 1 caja:  Caja 1: 102 cm de Largo x 53 cm de Ancho x 8 cm de Alto, el peso es de 24,8 kg. El peso total del producto armado es de 24,7 kg.', 'escritorio.jpg', 20, 3, 3, 'null'),
(10, 'Escritorio Industrial 12', 20076, 'Escritorio Industrial C/ estantes laterales (2).', 'EscritorioEstructuraMetal.jpg', 20, 3, 3, 'null'),
(11, 'Set Mesa + Sillon Lounge 3 Piezas', 0, 'Set de Jardin de 3 Piezas. Incluye un sofa Lounge de 75x143x63cm, un sofa de dos cuerpos de 77x131x63cm y un taburete de 65x65x30cm. Incluyen almohadones', 'SillonConMesaSillon.jpg', 50, 6, 4, 'null'),
(12, 'Sofa Cama Isola II', 284960, 'Moderno, sobrio, se adapta a todos tus espacios. El sofá perfecto para los amantes del confort. Para relajarse de a 2 y distenderse. Fabricado con materiales nobles y de alta resistencia, permite un uso intensivo diario sin problemas. Este sofá cama cuenta con un resistente sistema de brazos móviles en su interior, los cuales facilitan la extensión del colchón hacia el exterior. Su cama desplegable es de 1.80 de largo x 1.30 mts de ancho, convirtiéndose en una cama de plaza y media.', 'SofaCamaIsola.jpg', 40, 6, 4, 'null'),
(13, 'Sillon de 3 cuerpos esquinero', 149990, 'CARACTERISTICAS GENERALES Material: Chenille Material, Patas: Metal, Tipo: Sillon 3 Cuerpos, Modelo: Esquinero. DIMENSIONES Alto: 76 Cm, Ancho: 185 Cm, Profundidad: 75 Cm.', 'SillonEsquinero3Cuerpos.jpg', 25, 6, 4, 'OnSale'),
(14, 'Microondas BGH', 49999, 'Microndas digital. Capacidad 20 L. Monofuncion digital. Eficiencia energetica B. Control digital. Display LED blanco. Modo ahorro de eneregia (Modo eco). Diametro del plato del vidiro 255 mm. Luz interior LED. Voltage 220V/50Hz. Consumo maximo (W) 1050. Tipo de ficha de 10A. Potencia de entrada de microondas 1050 W. Potencia de salida 700. Bloqueo para ninos.', 'MicroondasBGHGris.jpeg', 0, 3, 5, 'null'),
(15, 'Microondas Daewoo', 33999, 'La línea de microondas Daewoo llegó para facilitarte tus días. Aunque pueda parecer un electrodoméstico sencillo desde un primer momento, es una potente arma en la cocina que te puede ayudar a crear platos muy avanzados. Diseño innovador y accesorios La libertad es absoluta, ya que podrás llevarlo adonde desees cuando te mudes. Su display te permitirá ser más preciso al momento de seleccionar el tipo de comida, configurar el tiempo y la función para cocinar. Además, presenta un excelente sistema de seguridad con traba especial para las personas más pequeñas de la familia. Capacidad y eficiencia Con un volumen de 20 litros vas a poder disfrutar comidas para compartir con tus amistades y familiares. Ofrece una potencia máxima de 700 watts que se puede regular en diferentes niveles según el tipo de alimento, por ejemplo, para evitar que se resequen algunos platos más delicados como la pasta. Con su fácil uso, podrás seleccionar y programar de manera práctica. Lo hace todo por vos Solo debes colocar el peso de los alimentos y el microondas automáticamente programará el tiempo necesario para que el mismo se descongele.', 'MicroondasDaewooGrisYBlanco.jpg', 10, 6, 5, 'null'),
(16, 'Microondas Grill Atma', 43699, 'Variedad de funciones y programas Su función de grill permite dorar los alimentos para que queden crocantes, ideal para pizzas, empanadas y tartas.  Diseño innovador y accesorios La libertad es absoluta, ya que podrás llevarlo adonde desees cuando te mudes. Su display te permitirá ser más preciso al momento de seleccionar el tipo de comida, configurar el tiempo y la función para cocinar.  Además, presenta un excelente sistema de seguridad con traba especial para las personas más pequeñas de la familia.  Capacidad y eficiencia Con un volumen de 23 litros vas a poder disfrutar comidas para compartir con tus amistades y familiares. Ofrece una potencia máxima de 800 watts que se puede regular en diferentes niveles según el tipo de alimento, por ejemplo, para evitar que se resequen algunos platos más delicados como la pasta. Con su fácil uso, podrás seleccionar y programar de manera práctica.', 'MicroondasAtmaGrisYNegro.jpg', 38, 3, 5, 'null'),
(17, 'Smart Led TV Hyundai', 83996, 'Con el Smart TV 43 FHD vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podes navegar por Internet, interactuar en redes sociales y divertirte con videojuegos. Sumergite en la pantalla Su resolución Full HD muestra una clara evolución frente a su antecesora. Las imágenes que vas a ver van a tener una calidad superior con un alto nivel de detalle y colores mucho más llamativos.', 'TelevisorSmartHyundai43.jpg', 30, 6, 6, 'null'),
(18, 'Smart TV Samsung Series LED 4K 55\" 7', 159999, 'Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. Por eso, va a hacer que disfrutes de una experiencia visual incomparable.  Con el Smart TV UN55AU7000G vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.  Viví en 4K La cantidad de pixeles que ofrece es 4 veces mayor que la Full HD, ¿el resultado? Escenas mucho más realistas y con un nivel de detalle increíble. Ahora vas a conocer una aventura de inmersión que no va a dejar de sorprenderte.  Un sonido que te envuelve Vas a sentir que proviene desde todas las direcciones posibles, lo cual enriquece la percepción del mismo. Los diálogos de tus series de fin de semana o la música de tus cantantes preferidos van a cobrar otro significado.  Más allá de ver televisión Su función Screen Share permite duplicar la pantalla de tu smartphone, tablet o PC para que aparezca en la TV. De esta forma vas a poder visualizar todo tipo de contenido: material audiovisual, documentos de trabajo, correos electrónicos y más.  Conexión invisible Este modelo está pensado para que puedas despejar tu campo visual. El sector donde coloques el televisor se verá mucho más prolijo porque los cables estarán ocultos, ordenados y organizados, ¡vas a notar la diferencia!', 'tvsansug17.jpg', 10, 3, 6, 'null'),
(19, 'Smart Tv 43 Philips Full Hd Android', 74999, 'SMART TV MARCA: PHILIPS MODELO: 43PFD6917|77  Imagen | pantalla  Pantalla: TV LED HD Resolución de panel: 1920 x 1080p Relación de aspecto: 16:9 Optimización de la imagen HDR10 HLG (Hybrid Log Gamma) Pixel Plus alta definición Tamaño diagonal de pantalla (pulgadas): 43 pulgadas  Conectividad  Cantidad de conexiones HDMI: 3 Cantidad de puertos USB: 2 Otras conexiones: Salida de auriculares Antena IEC75 Conector de servicio Salida de audio digital (óptica) Ethernet-LAN RJ-45  Conexiones inalámbricas Bluetooth 5.0 Wi-Fi 802.11n, 2x2, doble banda  Sonido  Potencia de salida (RMS): 16 W Configuración del parlante: Altavoz de 8 W x2 Optimización del sonido Nivelador automático de volumen Diálogo nítido Dolby Atmos Mejora de graves Dolby  ORIGEN: ARGENTINA GARANTIA: 12 MESES', 'tvohilips18.jpg', 20, 3, 6, 'null'),
(20, 'Lavarropas automático Gafa', 119999, 'El lavarropas Gafa DigiFit hará que el lavado diario sea más sencillo. Evitará los residuos de jabón, dejará tu ropa impecable sin dañarla y te permitirá ahorrar tiempo.  Trabaja solo Únicamente necesita que se introduzcan los productos de limpieza y se elija el programa deseado. A diferencia de los semiautomáticos, no requiere que estés presente en todas las etapas del proceso, por lo que vas a tener prendas limpias y perfumadas sin esfuerzo.', 'lavarropas19.jpg', 15, 3, 7, 'null'),
(21, 'Lavarropas Samsung', 262590, 'Samsung apuesta por la innovación y el diseño de vanguardia en los productos de su línea blanca. Ofrece soluciones para el lavado que priorizan la eficiencia de cada uno de sus programas y con ello, el cuidado de tus prendas más delicadas.  Trabaja solo Únicamente necesita que se introduzcan los productos de limpieza y se elija el programa deseado. A diferencia de los semiautomáticos, no requiere que estés presente en todas las etapas del proceso, por lo que vas a tener prendas limpias y perfumadas sin esfuerzo.  Tecnología inverter Reduce el ruido y las vibraciones, aún en velocidad máxima de centrifugado. A su vez, requiere un menor consumo de agua y electricidad.  Eco-Friendly El programa Eco combina ahorro de energía, tiempo y eficiencia para lograr una mejor limpieza con menos cantidad de agua. De esta forma, vas a hacer el lavado diario aportando al cuidado del planeta.  Remoción efectiva de manchas La tecnología Bubble permite que el jabón penetre de una forma más rápida y uniforme. Así, logra la misma eficacia en frío de como lo haría en caliente, pero sin maltratar las telas. hará que el lavado diario sea más sencillo. Evitará los residuos de jabón, dejará tu ropa impecable sin dañarla y te permitirá ahorrar tiempo.  Trabaja solo Únicamente necesita que se introduzcan los productos de limpieza y se elija el programa deseado. A diferencia de los semiautomáticos, no requiere que estés presente en todas las etapas del proceso, por lo que vas a tener prendas limpias y perfumadas sin esfuerzo.', 'lavarropas20.jpg', 0, 3, 7, 'OnSale'),
(22, 'Lavasecarropas semiautomático Kanji', 262590, 'El lavasecarropas Kanji XPB55-655S ofrece gran comodidad y un uso eficaz para el lavado de tu ropa. Su doble función hará que ahorres tiempo y espacio.', 'lavarropas21.jpg', 0, 3, 7, 'null'),
(23, 'Saeco Lirika Black Cafetera Expreso', 220999, 'Regalate una pausa Empezá tu día con energía y de la mejor manera, disfrutando de la textura y calidad de un buen café en la comodidad de tu casa.  Desayuno al instante Si te apasiona el café molido no vas a poder resistirte al exquisito aroma de un expreso por las mañanas. Prepará los mejores cafés de manera sencilla y rápida.  Sabor intenso en minutos Preparar café de manera rápida y sencilla es posible. Disfrutá del aroma y la temperatura ideal de tu infusión preferida en cualquier momento del día', 'cafetera22.jpg', 11, 6, 8, 'null'),
(24, 'Cafetera Atma', 13499, 'Regalate una pausa Empezá tu día con energía y de la mejor manera, disfrutando de la textura y calidad de un buen café en la comodidad de tu casa.  Suave y aromático La mejor opción para cualquier momento del día. Elegí el café molido que más te guste y preparate para vivir una experiencia exquisita.  Café para paladares exigentes En pocos minutos y siguiendo simples pasos tu café va a estar listo con resultados profesionales. Programá tu cafetera y empezá a disfrutar de su aroma e intenso sabor.  Diseño de vanguardia y extra duración De estilo elegante y moderno, el acero inoxidable se convierte en una ventaja que podés aprovechar para mantener tu cafetera siempre limpia y reluciente.  Tu café listo El timer te permite establecer el horario de encendido de la máquina para que tengas tu café preparado en el momento que necesites.', 'cafetera23.jpg', 10, 3, 8, 'null'),
(25, 'Cafetera Oster', 144999, 'Con la cafetera Oster BVSTEM6701 tus días no serán iguales. Al ser rápida y eficiente podrás tomar tu café a cualquier hora y disfrutarás de un aroma increíble. Además, tiene un pequeño depósito de leche y se apaga de manera automática mejorando aún más tu experiencia.  Todas las opciones Si sos amante del café expreso o de la diversidad en sabor que te dan las cápsulas, ya no tenés que elegir: vas a poder disfrutar de ambos beneficios en una sola máquina. Prepará tu café clásico o probá nuevas variedades, vos elegís.  Café para paladares exigentes En pocos minutos y siguiendo simples pasos tu café va a estar listo con resultados profesionales. Programá tu cafetera y empezá a disfrutar de su aroma e intenso sabor.  Deliciosos y espumosos Con el vaporizador, la leche queda dulce, cremosa y con espuma aterciopelada. Prepará los mejores expressos, los capuchinos más tentadores y los lattes más sabrosos.', 'cafetera24.jpg', 20, 12, 8, 'null');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategoria`
--

CREATE TABLE `subcategoria` (
  `subCategoria_id` int(11) NOT NULL,
  `subCategoria` varchar(50) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `CategoriumCategoriaId` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subcategoria`
--

INSERT INTO `subcategoria` (`subCategoria_id`, `subCategoria`, `categoria_id`, `CategoriumCategoriaId`) VALUES
(1, 'Mesa', 1, NULL),
(2, 'Cama', 1, NULL),
(3, 'Escritorio', 1, NULL),
(4, 'Sillon', 1, NULL),
(5, 'Microondas', 2, NULL),
(6, 'Televisor', 2, NULL),
(7, 'Lavarropa', 2, NULL),
(8, 'Cafetera', 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `nombre`, `apellido`, `email`, `contrasena`, `telefono`, `img`, `categoria`) VALUES
(1, 'Martina', 'Solis', 'Hana1234@eeegmail.com', '$2a$10$pSm9hTgbfV6v6C7mbfwt/eYO1vtwt7tSdAnQI.vYv9Ddrxl3dq7Si', 2147483647, 'user-img-1684275374787.png', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto_id`),
  ADD KEY `FK_7f0b03f1-dc78-4eeb-ad3e-d4897c03d6be` (`subCategoria_id`);

--
-- Indices de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`subCategoria_id`),
  ADD KEY `FK_7e4b9f51-fbef-4e48-b0a6-cb8db26f8fa8` (`categoria_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `producto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `subCategoria_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_7f0b03f1-dc78-4eeb-ad3e-d4897c03d6be` FOREIGN KEY (`subCategoria_id`) REFERENCES `subcategoria` (`subCategoria_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD CONSTRAINT `FK_7e4b9f51-fbef-4e48-b0a6-cb8db26f8fa8` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`categoria_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
