/*
 Navicat Premium Data Transfer

 Source Server         : Akitorna
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : student

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 13/06/2022 13:46:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;



-- ----------------------------
-- Table structure for produce
-- ----------------------------
DROP TABLE IF EXISTS `produce`;
CREATE TABLE `produce`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '商品编号',
  `pname` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '商品名称',
  `price` float NOT NULL COMMENT '商品价格',
  `pcount` int NOT NULL COMMENT '商品数量',
  `remark` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '商品备注',
  `pro` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '产地',
  `date` date NOT NULL COMMENT '生产日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 134 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of produce
-- ----------------------------
INSERT INTO `produce` VALUES (104, '百事可乐', 3, 99, '无糖', '江苏', '2022-05-10');
INSERT INTO `produce` VALUES (105, '冷酸灵牙膏', 8.22, 132, '强效亮白', '河南', '2020-05-20');
INSERT INTO `produce` VALUES (124, '爱时乐夹心棒', 13.5, 65, '卫生&美味|独立包装', '山东', '2021-09-10');
INSERT INTO `produce` VALUES (129, '不二家棒棒糖', 1.5, 524, '牛奶味', '江苏', '2022-01-10');
INSERT INTO `produce` VALUES (130, '5 无糖口香糖', 10, 45, '迷你酸甜弹立方', '山东', '2021-04-28');
INSERT INTO `produce` VALUES (131, '怡宝', 2, 79, '纯净水', '江苏', '2022-01-10');
INSERT INTO `produce` VALUES (132, '可口可乐', 3, 23, '无糖', '河南', '2022-01-10');
INSERT INTO `produce` VALUES (133, '11', 11, 11, '11', '河南', '2022-01-10');


-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cid` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '20020422', 0);
INSERT INTO `user` VALUES (2, 'yuki', '1ebe052c5fd859e98d1dc93bbaa029ad', 0);



SET FOREIGN_KEY_CHECKS = 1;
