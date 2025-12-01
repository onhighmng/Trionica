CREATE TABLE `mkt_nextend2_smartslider3_sliders_xref` (  `group_id` int(11) NOT NULL,  `slider_id` int(11) NOT NULL,  `ordering` int(11) NOT NULL DEFAULT '0',  PRIMARY KEY (`group_id`,`slider_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40000 ALTER TABLE `mkt_nextend2_smartslider3_sliders_xref` DISABLE KEYS */;
SET FOREIGN_KEY_CHECKS = 0;
SET UNIQUE_CHECKS = 0;
INSERT INTO `mkt_nextend2_smartslider3_sliders_xref` VALUES('0', '2', '0');
/*!40000 ALTER TABLE `mkt_nextend2_smartslider3_sliders_xref` ENABLE KEYS */;
SET FOREIGN_KEY_CHECKS = 1;
SET UNIQUE_CHECKS = 1;
