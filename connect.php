<?php
 $register = $_POST['register'];
 $password = $_POST['password'];

//database connection
$conn = new mysqli('localhost','root','','login');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(register,password)values(?,?)");
    $stmt->bind_param("is",$register,$password);
    $stmt->execute();
    echo "Registration successful...!";
    $stmt->close();
    $conn->close();
}

?>

