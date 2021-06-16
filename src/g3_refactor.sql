-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2021 a las 22:56:04
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `g3_refactor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(50) UNSIGNED NOT NULL,
  `name` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(800) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `colors` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sizes` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `img`, `gender`, `category`, `colors`, `sizes`, `price`) VALUES
(101, 'Buzo Canguro', 'Buzo Canguro', 'product-1621735363887.jpg', 'Hombre', 'Buzo', 'Negro', 'Unicio', 4990),
(106, 'Kerrosover 6.0 Surfboard', 'Parte de la colección Kerrlection, es la tabla elegida por Josh Kerr para competir. Construida para soportar todas las condiciones e instancias de la ola. Desde la formación de la tubería hasta el quiebre de la ola en la playa. KERROSOVER  MEDIDAS: ALTO: 6\'00\' ANCHO: 19.12 ESPESOR: 2.43 VOLUMEN: 28.30', 'product-1621741582552.jpg', 'Accesorio', 'Surfboard', 'Blanco', 'Ver Medidas', 65000),
(107, 'Canguro Sommerset Oversize Hood Negro', 'Canguro de PIel con escote medio cierre y bolsillos. Confort Fit hood con logo bordado', 'product-1621741781041.jpg', 'Mujer', 'Buzos', '', 'Varios', 6590),
(108, 'Campera Bungaloo Azul', 'Campera de Nylon con Capucha. 2 Bolsillos Fronto-inferiores con broches de presion. Forreria interna de nylon. Cintura y Puños elastizados.', 'product-1621741955083.jpg', 'Niño', 'Campera', '', 'Varios', 11990),
(113, 'Chaleco Mavericks Negro', 'Chaleco con capucha desmontable. 2 Bolsillos Fronto-inferiores con cierre tipo termosellado a contratono. Forreria interna de alto contraste. Doble regulación de apertura en el frente', 'product-1621891720078.jpg', 'Hombre', 'Chalecos', 'varios', 'Unico', 9790),
(114, ' Campera Brave', 'Tapado tipo mongomery con capucha de piel sintética, realizada con paño de lana a cuadros estilo principe de Gales y rellena de guata siliconada. Posee alamares y cierres metálicos delanteros. Fashion fit.', 'product-1621923947403.jpg', 'Mujer', 'Campera', 'Varios', 'Unico', 13590),
(115, 'Pantalon Upper Hand', 'Pantalon Twill a cuadros. Tipo pinzado tiro alto con bolsillos. Fashion Fit', 'product-1621924181260.jpg', 'Mujer', 'Pantalon Mujer', 'varios', 'varios', 6390),
(116, 'Jean Wonder Super Skinny', 'Jean stretch denim super skinny fit. Tiro alto. Lavado enzimatico suave con pliegues laser.', 'product-1621924430452.jpg', 'Mujer', 'Jean', 'Jean', 'Varios', 5890),
(117, 'Beanie Rip Curl Ledge', ' Beanie Rip Curl, interior forrado en polar. Talle único. ', 'product-1622733451725.png', 'Hombre', 'Gorro', 'Negro y Crema', 'Unico', 2300),
(124, 'Beanie Rip Curl Urban', 'Beanie Rip Curl, talle único. ', 'product-1622755433947.jpg', 'Hombre', 'Gorro', 'Negro', 'Unico', 1999),
(125, 'Steamer Rip Curl 4/3 G BOMB ZIP FREE', 'Steamer 4/3 Zip Free Neoprene E6. Thermo lining E6 de secado rapido. Maxima elasticidad y confort. Todas las costuras selladas. E6 taped en puntos criticos. Ultra livian. Facil de poner.   E6 neoprene  E6 taped  E6 thermo lining', 'product-1622755557516.jpg', 'Mujer', 'Neoprene', 'Negro', 'Varios', 5999),
(126, 'Reloj Rip Curl Revelstoke', 'CUADRANTE:  - 3 agujas  CARCASA:  - Plástico ABS  - Sumergible hasta 50m  - Ancho:33mm.  MALLA:   - Silicona', 'product-1623258270194.jpg', 'Hombre', 'Reloj', 'Unico', 'Unico', 8999),
(127, 'Anteojos Vulk Sunday XL', 'Anteojos Vulk Sunday XL. Marco de acetato. Barra superior de metal. Protección UV 100%.', 'product-1623258358147.jpg', 'Mujer', 'Lentes', 'Unico', 'Unico', 5990),
(128, 'Anteojos Vulk Group', 'Anteojos Vulk Group. Marco Grilamid. Lentes de policarbonato. Protección UV 100%. ', 'product-1623258435653.jpg', 'Niño', 'Lentes', 'Unico', 'Unico', 4190),
(129, 'Remera  Santa Cruz Over Print ', 'Remera Santa Cruz Over Print Jersey 24/1. Estampa en frente y espalda. ', 'product-1623258523598.jpg', 'Niño', 'Remera', 'Unico', 'Varios', 2599),
(130, 'Rollers K2 Kinetic 80', 'El modelo Kinetic 80 es el la mejor opción para todos aquellos que buscan calidad. Posee un marco F.B.I., que minimiza vibraciones del camino brindando suavidad en el andar. Su característica “stability plus” otorga confianza al usarlos ya que posee la combinación perfecta de soporte y flexibilidad. Sus ruedas de 80 mm pueden alcanzar mayor velocidad en comparación al modelo de 78mm. El sistema K2 speed lacing asegura un rápido y fácil ajuste del patín y mejora el calce gracias a su ya original y probada bota SoftBoot.', 'product-1623258657992.jpg', 'Productos técnicos', 'Rollers', 'Unico', 'Unico', 19900);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(50) UNSIGNED NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`, `avatar`) VALUES
(47, 'Gerladina', 'Robotham', 'grobotham1a@hibu.com', 'bnLil58Pazna', 'https://robohash.org/consequaturdistinctioperferen'),
(48, 'Abbe', 'MacCaffrey', 'amaccaffrey1b@google.com.hk', 'XV2LCkhGS', 'https://robohash.org/repellatdoloremquenobis.png?s'),
(49, 'Ferdy', 'Dudin', 'fdudin1c@google.com.hk', 'G8hOV8v', 'https://robohash.org/officiisevenietnemo.png?size='),
(50, 'Yuma', 'Fritche', 'yfritche1d@netscape.com', 'v3G3YsD6f', 'https://robohash.org/etetsit.png?size=50x50&set=se'),
(57, 'lucas', 'alvarez', 'alvarezlucass@hotmail.com', '$2a$10$rvVZsCZtQwLTBlpYxwlOre5spL5.EXQkECgoOLcZHP/Vevt/XDOtq', 'avatar-1621728054506.jpg'),
(58, 'Tomas', 'Sanchez', 't@gmail.com', '$2a$10$Z28z5p8w2MER22M0fZkoU.mg6Q6o173ntOh80xZ48n642X8cUUI6e', 'avatar-1623269497214.jpeg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
