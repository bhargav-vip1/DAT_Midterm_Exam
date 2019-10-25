<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Question | Vision Aid Digital Accessibility Training Midterm Exam</title>
  </head>
  <body>
    <header>
      <h1>Question | Vision Aid Digital Accessibility Training Midterm Exam</h1>
    </header>
    <main>
<?php
require("Config.php");
function getData($connect, $tbl, $field, $fieldName) {
$sql = "SELECT * FROM ".$tbl." WHERE ".$field." = 1 order by RAND() LIMIT 1";
$result = mysqli_query($connect, $sql);

//echo mysqli_affected_rows($connect)."<br>";

while ($row = mysqli_fetch_array($result)) {

 return $row[$fieldName];
}
}

$student = getData($connect, "students_name", "dat_stud_tf", "dat_stud_fnm");
$question = getData($connect, "questionsbank", "qb_tf", "qb_question");

// $resultup = mysqli_query($connect, "UPDATE sheet1 SET dat_stud_tf=0 where dat_stud_id=".$row["dat_stud_id"]);

?>


      <br>
      <h2><span> <?php echo $student; ?></span></h2>
      
      <div><p> <?php echo $question; ?> </p></div>
      <br>
      <form action="question.php" method="post">
      <?php 
echo '<input type="hidden" id="studNM" name="studNM" value="'.$student.'">';
?>
              <label for="scnumber">SC Number</label>
        <input type="text" name="scnumber" id="scnumber">
<br>
        <label for="scname">SC name</label>
        <input type="text" name="scname" id="scname">
        <br>
        <label for="level">Level</label>
        <input type="text" name="level" id="level">
<br>
              <label for="principle">Principle</label>
        <input list="prn" name="principle" id="principle">
        <datalist id="prn">
        <option value="Perceivable">
        <option value="Operable">
        <option value="Understandable">
        <option value="Robust">
        </datalist>
        <br>
        <label for="guideline">Guideline</label>
        <input type="text" name="guideline" id="guideline">
<br>
        
        <button type="submit">Submit</button>
      </form>
      <br>
      <button id="next">Next Question</button>
      -->
      <button id="repeat" onClick="textToSpeech(msg);">Repeat Question</button>

Welcome <?php 
if(isset($_POST['studNM']))
{
echo "bhargav";	
}


?>.<br />

    </main>
        <script src="js/main.js"></script>
    
  </body>
</html>
