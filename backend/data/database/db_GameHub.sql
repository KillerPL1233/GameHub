CREATE TABLE `Users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(5O),
  `surname` varchar(50),
  `nick` varchar(50),
  `password` varchar(50),
  `account_type` int
);

CREATE TABLE `AccountType` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `account_type` varchar(10)
);

CREATE TABLE `Game` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `producer` int,
  `type` int,
  `release` date,
  `points` double,
  `total_votes` int,
  `total_points` int
  `image` varchar
);

CREATE TABLE `PointValue` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `points` varchar(10),
  `value` int(10)
);

CREATE TABLE `GameType` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar
);

CREATE TABLE `GameProducer` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar
);

CREATE TABLE `point_log` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user` int,
  `game` int,
  `point_value` int,
  `date` date
);

CREATE TABLE `event_log` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user` int,
  `game` int,
  `event_name` varchar,
  `date` date
);

CREATE TABLE `event` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `event_name` varchar
);

ALTER TABLE `Users` ADD FOREIGN KEY (`account_type`) REFERENCES `AccountType` (`id`);

ALTER TABLE `point_log` ADD FOREIGN KEY (`user`) REFERENCES `Users` (`id`);

ALTER TABLE `point_log` ADD FOREIGN KEY (`game`) REFERENCES `Game` (`id`);

ALTER TABLE `point_log` ADD FOREIGN KEY (`point_value`) REFERENCES `PointValue` (`id`);

ALTER TABLE `Game` ADD FOREIGN KEY (`producer`) REFERENCES `GameProducer` (`id`);

ALTER TABLE `Game` ADD FOREIGN KEY (`type`) REFERENCES `GameType` (`id`);

ALTER TABLE `event_log` ADD FOREIGN KEY (`event_name`) REFERENCES `event` (`id`);

ALTER TABLE `event_log` ADD FOREIGN KEY (`user`) REFERENCES `Users` (`id`);

ALTER TABLE `event_log` ADD FOREIGN KEY (`game`) REFERENCES `Game` (`id`);
