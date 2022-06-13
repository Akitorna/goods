<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>添加商品</title>
		<link rel="stylesheet" type="text/css" href="../public/layui/css/layui.css" />
		<script src="../public/jquery-3.3.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="../public/layui/layui.js" type="text/javascript" charset="utf-8"></script>

	</head>
	<body>
		<!-- 表单 -->
		<form action="save.php" method="GET" class="layui-form">
			<div class="layui-form-item">
				<label class="layui-form-label">商品名称</label>
				<div class="layui-input-block">
					<input type="text" name="n" lay-verify="required|n" placeholder="请输入商品名称" autocomplete="off"
						class="layui-input">
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">商品价格</label>
				<div class="layui-input-block">
					<input type="number" step="0.01" name="p" placeholder="请输入商品价格" autocomplete="off" class="layui-input"
						lay-verify="required|p|number">
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">商品数量</label>
				<div class="layui-input-block">
					<input type="number" name="num" placeholder="请输入商品数量" autocomplete="off" class="layui-input"
						lay-verify="required|num|number">
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">商品简介</label>
				<div class="layui-input-block">
					<input type="text" name="r" lay-verify="required|r" placeholder="请输入商品简介" autocomplete="off"
						class="layui-input">
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">商品产地</label>
				<div class="layui-input-block">
					<select name="pro">
						<option value="河南">河南</option>
						<option value="江苏">江苏</option>
						<option value="山东">山东</option>
					</select>
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">生产日期</label>
				<div class="layui-input-block">
					<input type="text" name="d" id="SelectDate" placeholder="请选择生产日期" autocomplete="off"
						class="layui-input">
				</div>
			</div>
			<div class="layui-form-item">
				<div class="layui-input-block">
					<input class="layui-btn" type="submit" value="立即提交" lay-filter="demo">
					<button type="reset" class="layui-btn layui-btn-primary">重置</button>
				</div>
			</div>
		</form>



		<script>
			//使用layui的多个模块:表单模块、日期模块、弹层模块
			layui.use(['form', 'laydate', 'layer'], function() {
				var form = layui.form;
				var laydate = layui.laydate;
				var layer = layui.layer;
				//执行一个laydate实例
				laydate.render({
					elem: '#SelectDate', //指定元素
					value: '2022-01-10'
				});
				
				 form.on('submit(demo)', function(data) {
				 	console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
				 	$.get("save.php", data.field, function(res) {
						if (res.status == 1) {
				 			layer.msg(res.msg)
				 		}
				 	}, "json")
				 });
				

			});
		</script>
	</body>
</html>
