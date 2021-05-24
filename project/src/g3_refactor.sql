-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-05-2021 a las 04:45:50
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
  `category` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `colors` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `sizes` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `img`, `category`, `colors`, `sizes`, `price`) VALUES
(96, 'Chaleco Mavericks Negro', 'Chaleco con capucha desmontable. 2 Bolsillos Fronto-inferiores con cierre tipo termosellado a contratono. Forreria interna de alto contraste. Doble regulación de apertura en el frente', 'https://robohash.org/atdignissimossaepe.png?size=5', 'Chalecos', 'Varios', 'Varios', 9790),
(97, 'Lucien Bowcock', 'Dilate L Ulnar Art, Bifurc, w 3 Intralum Dev, Perc', 'https://robohash.org/occaecativelitasperiores.png?', 'Dilation of Left Ulnar Artery, Bifurcation, with T', 'Urterost/urete cth irrig', 'Disarticulation of wrist', 82),
(98, 'Sully Nightingale', 'Insertion of Monitoring Device into Jejunum, Via O', 'https://robohash.org/voluptasvoluptatemquis.png?si', 'Insertion of Monitoring Device into Jejunum, Via N', 'Sialoadenectomy NOS', 'Rep scler staphyloma NEC', 89),
(99, 'Tedd Abdon', 'Drainage of L Com Iliac Vein with Drain Dev, Open ', 'https://robohash.org/dictasuntomnis.png?size=50x50', 'Drainage of Left Common Iliac Vein with Drainage D', 'Skull & brain op NEC', 'Imp epiretinal prosth', 43),
(100, 'Eran Garter', 'Change Drainage Device in Skull, External Approach', 'https://robohash.org/enimducimusaut.png?size=50x50', 'Change Drainage Device in Skull, External Approach', 'Exc/dest intvrt disc NOS', 'Reattach amputated ear', 91),
(101, 'Buzo Canguro', 'Buzo Canguro', 'product-1621735363887.jpg', 'Buzo', '', 'Unicio', 4990),
(102, 'buzo', 'buzo', 'default-image.png', 'buzo', NULL, 'unico', 4990),
(103, 'Remera', 'Remera Cuello Redondo', 'default-image.png', 'Remeras', NULL, 'Unico', 2990),
(104, 'Tabla', 'Tablas repuesto', 'default-image.png', 'Tablas', NULL, 'Único', 15900),
(105, 'Ruedas 80mm', 'Ruedas Especiales Repuesto', 'default-image.png', 'Repuestos', NULL, '80', 9900),
(106, 'Kerrosover 6.0 Surfboard', 'Parte de la colección Kerrlection, es la tabla elegida por Josh Kerr para competir. Construida para soportar todas las condiciones e instancias de la ola. Desde la formación de la tubería hasta el quiebre de la ola en la playa. KERROSOVER  MEDIDAS: ALTO: 6\'00\' ANCHO: 19.12 ESPESOR: 2.43 VOLUMEN: 28.30', 'product-1621741582552.jpg', 'Surfboard', NULL, 'Ver Medidas', 65000),
(107, 'Canguro Sommerset Oversize Hood Negro', 'Canguro de PIel con escote medio cierre y bolsillos. Confort Fit hood con logo bordado', 'product-1621741781041.jpg', 'Buzos', NULL, 'Varios', 6590),
(108, 'Campera Bungaloo Azul', 'Campera de Nylon con Capucha. 2 Bolsillos Fronto-inferiores con broches de presion. Forreria interna de nylon. Cintura y Puños elastizados.', 'product-1621741955083.jpg', 'Campera', NULL, 'Varios', 11990),
(109, 'Campera Bungaloo Azul', 'Campera de Nylon con Capucha. 2 Bolsillos Fronto-inferiores con broches de presion. Forreria interna de nylon. Cintura y Puños elastizados.', 'product-1621742191780.jpg', 'Campera', NULL, 'Varios', 11990),
(110, 'Campera Bungaloo Azul', 'Campera de Nylon con Capucha. 2 Bolsillos Fronto-inferiores con broches de presion. Forreria interna de nylon. Cintura y Puños elastizados.', 'product-1621742263228.jpg', 'Campera', NULL, 'Varios', 11990),
(111, 'Campera Bungaloo Azul', 'Campera de Nylon con Capucha. 2 Bolsillos Fronto-inferiores con broches de presion. Forreria interna de nylon. Cintura y Puños elastizados.', 'product-1621742333174.jpg', 'Campera', NULL, 'Varios', 11990),
(112, 'Campera Bungaloo Azul', 'Campera de Nylon con Capucha. 2 Bolsillos Fronto-inferiores con broches de presion. Forreria interna de nylon. Cintura y Puños elastizados.', 'product-1621742391951.jpg', 'Campera', NULL, 'Varios', 11990);

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
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
