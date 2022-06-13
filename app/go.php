<?php
$id = $_GET["id"];
$n = $_GET["n"];
$p = $_GET["p"];
$num = $_GET["num"];
$r = $_GET["r"];
$pro = $_GET["pro"];
$d = $_GET["d"];
require_once "../public/conn.php";

// 更新语句
$sql = "UPDATE `produce` SET `pname` = '$n', `price` = '$p', `pcount` = '$num', `remark` = '$r', `pro` = '$pro', `date` = '$d' WHERE `produce`.`id` = $id;";

$conn->query($sql);
header("Location:index.php");
?>