<?php
	header('content-type:text/html;charset=utf-8');
	//引入数据库文件
	require "../public/db.php";
	extract($_POST);
	//使用命名参数作为占位符的预处理语句
	$sql = "select pname from produce where pname=?";
	$stmt = $pdo->prepare($sql);
	$stmt->bindParam(1, $spname);
	$stmt->execute();
	//判断是否有重名或者重号
	$stmt->rowCount() != 0 ? print json_encode(['status' => 1, 'msg' => "该商品已存在"]) : null;
