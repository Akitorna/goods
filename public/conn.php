<?php
$conn = new mysqli("localhost","root","20020422","student");

if($conn->connect_error){
    echo "连接失败";
}
// else{
//     echo "成功";
// }
?>