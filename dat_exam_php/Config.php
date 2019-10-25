<?php
$connect = mysqli_connect("localhost","root","") or die(mysqli_error($connect));
mysqli_select_db($connect, "va_dat_exam") or die(mysqli_error($connect));

?>