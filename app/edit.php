<?php

$id = $_GET["id"];

require_once "../public/conn.php";
$sql = "SELECT * FROM `produce` WHERE `id` = $id";
$result = $conn->query($sql);

// var_dump($result->fetch_assoc());
$res = $result->fetch_assoc()
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<link rel="stylesheet" type="text/css" href="../public/layui/css/layui.css"/>
</head>
<body>
    <form action="go.php" method="GET" class="layui-form">
		<div class="layui-form-item">
			<label class="layui-form-label">商品名称</label>
			<div class="layui-input-block">
				<input name="n" class="form-control" type="text"  value="<?php echo $res['pname'];?>">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">商品价格</label>
			<div class="layui-input-block">
				<input name="p" class="form-control" type="text"  value="<?php echo $res['price'];?>">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">商品数量</label>
			<div class="layui-input-block">
				<input name="num" class="form-control" type="text" value="<?php echo $res['pcount'];?>">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">商品简介</label>
			<div class="layui-input-block">
				<input name="r" class="form-control" type="text" value="<?php echo $res['remark'];?>">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">商品产地</label>
			<div class="layui-input-block">
				<input name="pro" class="form-control" type="text" value="<?php echo $res['pro'];?>">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">生产日期</label>
			<div class="layui-input-block">
				<input name="d" class="form-control" type="text" value="<?php echo $res['date'];?>">
			</div>
		</div>
        <input hidden name="id" class="layui-btn layui-btn-primary" type="text" value="<?php echo $res['id'];?>">
        <input class="layui-btn" type="submit" value="更新">
    </form>
</body>
</html>