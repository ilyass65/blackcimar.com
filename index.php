<?php
include './includes/condata.php';
include './includes/form.php';
include './includes/select.php';
include './includes/data_close.php';





?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=".\css\style.css">
    <title> my web</title>
</head>
<body>


<div id = 'container'> 
<div id = 'getStarted'> be the first members <h1 id="demo"></h1>
  welcom dear into our website click here to get started 
    <br>
  <button id='starSubmit' onclick='star()'>Get Started</button>
</div>
  <form id = 'loginForm' action="index.php" method ='POST'>
    <div>
      <label for="firstname" id='loginLab'>first name</label>
      <input type="text"   class='loginInputs' name='firstname' id='firstname' value='<?php echo $firstname ?>' placeholder='first name'>
      <?php echo $erroors['firstNameError']; ?>
  </div>
    <div>
    <label for="lastname" id='loginLab'>last name</label>
      <input type="text"   class='loginInputs' name='lastname' id='lastname' value='<?php echo $lastname ?>' placeholder='last name'>
     <?php echo $erroors['lastNameError']; ?>
  </div>
    <div>
    <label for="email" id='loginLab'>email</label> 
      <input type="text"   class='loginInputs' name='email' id='email' value='<?php echo $email ?>' placeholder='email'>
      <?php echo $erroors['emailError']; ?>
  </div>
    <input type="submit" class='loginSubmit' name='submit' id='send' value='send'>
  </form>

  
<div id = 'floader'>
  <div id="loader">
	<canvas id="circularLoader" width="200" height="200"></canvas>
</div>
</div>

  <button id='winBtn'> chose a winner </button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
            <h2>the winer is</h2>
    </div>
    <div class="modal-body">
    <?php foreach($users1 as $user) : ?>
      <h1><?php echo htmlspecialchars($user['FirstName']) . ' ' . 
    htmlspecialchars($user['LastName']);  ?></h1>
      <?php endforeach; ?> 
    </div>
      </div>
     </div>
    </div>

      <div id = 'cards'>
  <?php foreach($users1 as $user) : ?>
    <h1 id='hcards'><?php echo htmlspecialchars($user['id']) . ' ' . htmlspecialchars($user['FirstName']) . ' ' . 
    htmlspecialchars($user['LastName']) . '<br>' . htmlspecialchars($user['Email']) . '</br>';  ?></h1>
 
    <?php endforeach; ?> 
    </div>
</div>


<script src=".\js\loader.js"></script>
<script src=".\js\script.js"></script>
</body>
</html>