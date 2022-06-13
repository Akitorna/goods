<?php
 header('cotent-type:text/html;charset=utf-8');
 require "../public/config.php";
 try{
  $pdo=new PDO(DB_DSN,DB_USER,DB_PWD);
 }catch(Exception $e){
  echo $e->getMessage();
 }