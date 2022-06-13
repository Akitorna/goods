<?php
error_reporting(E_ALL & ~E_NOTICE);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>搜索商品</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="../public/layui/css/layui.css" />
		<script src="../public/jquery-3.3.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="../public/layui/layui.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<!-- nav -->
		<nav>
			<ul class="layui-nav layui-bg-blue">
				<li class="layui-nav-item"><a href="index.php">商品管理系统</a></li>
				<li class="layui-nav-item">
					<a href="javascript:;">操作</a>
					<dl class="layui-nav-child">
						<dd><a href="add.php">添加</a></dd>
					</dl>
				</li>
				<li class="layui-nav-item"><a href="search.php">搜索</a></li>
				<li class="layui-nav-item" style="float: right;">
					<a href="javascript:;">欢迎你<?php echo $_SESSION['username'] ?></a>
					<dl class="layui-nav-child">
						<dd><a href="login.php?action=logout">退出登录</a></dd>
					</dl>
				</li>
			</ul>
		</nav>
		<!-- table -->
		<div style="background-image: url(../public/img/interlude_jk.png);height: 1000px;">
		<form action="search.php" method="post" class="layui-form">
			<div class="layui-form-item">
				<label class="layui-form-label">
					<input class="layui-btn layui-btn-normal" type="submit" values="搜索" style="margin-top: -8px;">
				</label>
				<div class="layui-input-block">
					<input class="layui-input" type="text" name="keywords" autocomplete="off"
						placeholder="搜索不到？可能还没被收录哦~">
				</div>
			</div>
			
		</form>
		<table class="layui-table" style="background-color: rgba(255, 170, 255, 0.6);">
			<thead>
				<tr style="background-color: rgba(174, 92, 255, 0.6);">
					<th scope="col">商品名称</th>
					<th scope="col">商品价格</th>
					<th scope="col">商品数量</th>
					<th scope="col">商品备注</th>
					<th scope="col">商品产地</th>
					<th scope="col">生产日期</th>
				</tr>
			</thead>
			<?php
			require("../public/conn.php");
			$keywords=$_POST['keywords'];
			$sql="select * from produce where pname like '%".$keywords."%'";
			$result = $conn->query($sql);
			if(!$result){
				die('无法读取数据,请联系管理员修复:'.mysqli_error($conn));
			}
			while($row = $result->fetch_assoc()){
			?>
				<th scope="row"><?php echo $row['pname'];?></th>
				<td><?php echo $row['price'];?></td>
				<td><?php echo $row['pcount'];?></td>
				<td><?php echo $row['remark'];?></td>
				<td><?php echo $row['pro'];?></td>
				<td><?php echo $row['date'];?></td>
			</tr>
			<?php
						}				
					?>
			<tbody>
		</table>
		</div>	
	</body>
</html>
