<?php
	require_once "../public/conn.php";
	session_start();
	if (empty($_SESSION['username'])) {
		exit("<script>
			alert('请先登录');
			location.href='login.php';
		</script>");
		}

	?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<script src="../public/jquery-3.6.0.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="../public/layui/layui.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="../public/layui/css/layui.css" />
		<!-- <link rel="stylesheet" type="text/css" href="../public/style.css"/> -->
	</head>
	<body>
		<!-- nav -->
		<nav>
			<ul class="layui-nav layui-bg-blue">
				<li class="layui-nav-item"><a href="">商品管理系统</a></li>
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
		<div style="background-image: url(../public/img/interlude_jk.png);height: 1000px; margin-top: -10px;">
			<table class="layui-table" style="background-color: rgba(255, 170, 255, 0.6);">
				<thead>
					<tr style="background-color: rgba(174, 92, 255, 0.6);">
						<th scope="col">商品名称</th>
						<th scope="col">商品价格</th>
						<th scope="col">商品数量</th>
						<th scope="col">商品备注</th>
						<th scope="col">商品产地</th>
						<th scope="col">生产日期</th>
						<th scope="col">操作</th>
					</tr>
				</thead>
				<tbody>
					<?php
  $sql = "SELECT * FROM `produce`";
  $result = $conn->query($sql);
//   var_dump($result);//输出结果
//   var_dump($result->fetch_assoc());//输出单条结果

    while($row = $result->fetch_assoc()){
        // var_dump($row);
    ?>

					<tr>
						<th scope="row"><?php echo $row['pname'];?></th>
						<td><?php echo $row['price'];?></td>
						<td><?php echo $row['pcount'];?></td>
						<td><?php echo $row['remark'];?></td>
						<td><?php echo $row['pro'];?></td>
						<td><?php echo $row['date'];?></td>
						<td>
							<a class="edit layui-btn layui-btn-warm" href="edit.php?id=<?php echo $row['id'];?>">
								<i class="layui-icon layui-icon-edit"></i>
							</a>
							<a class="delete layui-btn layui-btn-danger" style="color: #ff255f; background-color: #8ee7ff;"
								id="<?php echo $row['id'];?>">
								<i class="layui-icon layui-icon-delete"></i>
							</a>
							<a class="add layui-btn layui-btn-normal">
								<i class="layui-icon layui-icon-add-1"></i>
							</a>
						</td>
					</tr>
					<?php
    }
    ?>
				</tbody>
			</table>
		</div>



		<script>
			layui.use('layer', function() {
				var layer = layui.layer;
			});
			//数据添加
			$(".add").click(function() {
				layer.open({
					type: 2,
					content: 'add.php',
					title: '学生信息添加',
					btn: '退出',
					area: ['80%', '80%'],
					end: function() {
						location.reload();
					}
				})
			});
			$(".delete").click(function() {
				//避免this重复
				var that = this;
				layer.open({
					btn: ['确认', '取消'],
					title: '商品信息删除',
					content: '确认要删除这行商品信息吗？',
					yes: function(index, layero) {
						var data = {};
						data.style = 'delete';
						data.id = $(that).attr('id');
						$.get('del.php', data, function() {}, "json")
						layer.close(index); //如果设定了yes回调，需进行手工关闭
					},
					end: function() {
						location.reload();
					}
				});
			});
		</script>

	</body>
</html>

