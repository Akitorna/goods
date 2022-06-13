<?php
// 连接数据库
require_once "../public/conn.php";

$n = $_GET["n"];
$p = $_GET["p"];
$num = $_GET["num"];
$r = $_GET["r"];
$pro = $_GET["pro"];
$d = $_GET["d"];



// 添加的sql语句

$sql="INSERT INTO `produce` (`id`, `pname`, `price`, `pcount`, `remark`, `pro`, `date`) VALUES (NULL, '$n', '$p', '$num', '$r', '$pro', '$d');";

// 执行sql语句
$conn->query($sql);

header("location:find.php");

?>