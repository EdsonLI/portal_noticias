-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 02-Jun-2017 às 19:52
-- Versão do servidor: 5.6.28
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal_noticias`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE IF NOT EXISTS `noticias` (
   `id_noticia` int(11) NOT NULL,
   `titulo` varchar(100) DEFAULT NULL,
   `noticia` text,
   `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `resumo` varchar(100) DEFAULT NULL,
   `autor` varchar(30) DEFAULT NULL,
   `data_noticia` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for table `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id_noticia`);

--
-- AUTO_INCREMENT for table `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;

--
-- Extraindo dados da tabela `noticias`
--

INSERT INTO `noticias` (`titulo`, `noticia`, `data_criacao`, `resumo`, `autor`, `data_noticia`) VALUES
('teste', 'teste', '2017-07-04 00:58:49', 'teste para mais de 10', 'teste', '2017-07-04'),
('Titulo', 'Texto da noticia', '2017-07-06 00:10:36', 'Resumooooo', 'Autor', '2017-07-05'),
('Titulo teste com controllers', 'Aqui está o conteúdo do teste com controllers...', '2017-07-14 01:04:29', 'Resumo teste com controllers', 'Edson Luis Isele', '2017-07-13');

--
-- Indexes for dumped tables
--



--
-- AUTO_INCREMENT for dumped tables
--
