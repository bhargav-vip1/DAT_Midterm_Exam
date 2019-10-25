<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Create Student table</title>
</head>

<body>
<?php 
require("Config.php");
// sql to create table
  $sql = "CREATE TABLE VaDatStud (
dat_stud_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
dat_stud_fnm VARCHAR(20) NOT NULL,
dat_stud_lnm VARCHAR(20) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";
 
if ($connect->query($sql) === TRUE) {
    echo "Table VaDatStudcreated successfully";
} else {
    echo "Error creating table: " . $connect->error;
}

$connect->close();

?>
</body>
</html>