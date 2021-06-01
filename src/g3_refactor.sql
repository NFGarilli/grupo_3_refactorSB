-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-06-2021 a las 20:32:17
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

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
  `gender` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `colors` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `sizes` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
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
(116, 'Jean Wonder Super Skinny', 'Jean stretch denim super skinny fit. Tiro alto. Lavado enzimatico suave con pliegues laser.', 'product-1621924430452.jpg', 'Mujer', 'Jean', 'Jean', 'Varios', 5890);

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
(57, 'lucas', 'alvarez', 'alvarezlucass@hotmail.com', '$2a$10$rvVZsCZtQwLTBlpYxwlOre5spL5.EXQkECgoOLcZHP/Vevt/XDOtq', 'avatar-1621728054506.jpg');

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
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
