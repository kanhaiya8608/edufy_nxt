-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 13, 2024 at 12:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schools`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` varchar(36) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `city` text DEFAULT NULL,
  `state` text DEFAULT NULL,
  `contact` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `email_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `address`, `city`, `state`, `contact`, `image`, `email_id`) VALUES
('1db3f8e2-1af4-4b32-9fbe-be74fbddb17c', 'Seth Anandram Jaipuria', 'Sector-D, Pocket-3, Sushant Golf City, Shaheed path, Lucknow, 226030, Gomti Nagar', 'Lucknow', 'Uttar pradesh', '9721081098', 'file_2.jpeg', 'sajslko@jaipuria.edu.in'),
('91044bb0-86de-416c-9c6b-30ad4c3aa4fb', 'Vidsan Charterhouse', 'Sector 93, Faridabad, Faridabad, Sector 93, ', 'Faridabad', 'Punjab', '9999265555', 'file_3.jpeg', 'info@vidsancharterhouse.com'),
('99dec7c3-0ef1-4afa-8215-3c4ce8ae761c', 'Ecole Globale International Girlsâ€™ School', 'Village Horawalla, Horawalla', 'Dehradun', 'Uttarakhand', '9557291888', 'file_ecole.jpeg', 'ecoleglobale@gmail.com'),
('bfaf83cf-4d64-497c-982d-e6892a2f3f2b', 'La Martiniere College', 'La Martiniere College Road, Hazratganj', 'Lucknow', 'Uttar pradesh', '9454469226', 'file_La_Martiniere_College_Lucknow_image1_7.jpeg', 'principal@lamartinierelucknow.org');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
