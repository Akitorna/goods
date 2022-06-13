<?php
session_start();
if(isset($_GET['action']) && $_GET['action']=='logout'){
  session_destroy();
}
?>


<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>后台登录</title>
			<script src="../public/jquery-3.3.1.min.js" type="text/javascript" charset="utf-8"></script>
			<script src="../public/layui/layui.js" type="text/javascript" charset="utf-8"></script>
			<link rel="stylesheet" type="text/css" href="../public/layui/css/layui.css" />
<!-- 			<link rel="stylesheet" type="text/css" href="../public/style.css" /> -->
			<link rel="stylesheet" type="text/css" href="../public/index.css"/>
		</head>
		<body>
			<div class="box">
			    <div class="left"></div>
			    <div class="right">
			        <h4>后 台 登 录</h4>
			        <form action="" method="post" class="yuki">
			            <div>
			            	<label for="username">姓名:</label>
			            	<input class="acc" type="text" name="username" placeholder="请输入用户名" required autofocus><br />
							<label for="password">密码:</label>
							<input class="acc" type="password" name="password" placeholder="请输入密码" required>
			            </div>
			            <input class=" btn submit" type="submit" value="Login">
			        </form>
			    </div>
			</div>
			<div>

			</div>
			</div>
			<script>
				layui.use(['form', 'layer'], function() {
					var form = layui.form;
					var layer = layui.layer;
				});
				$(".btn").click(function() {
					var data = {};
					data.username = $("[name='username']").val();
					data.password = $("[name='password']").val();
					//console.log(data);
					if (data.username == '' || data.password == '') {
						layer.msg('必选项不能为空');
						return;
					}
					$.post("admin.php", data, function(res) {
						if (res.status == 1) {
							layer.msg(res.msg);
							location.href = "index.php";
						} else if (res.status == 0) {
							layer.msg(res.msg);
						}
					}, "json")
				})
			</script>
		</body>
	</html>
	<?php
session_start();
if(isset($_GET['action']) && $_GET['action']=='logout'){
	session_destroy();
}
?>
