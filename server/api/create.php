<?php
 header('Content-Type: application/json');
require_once 'datbase.php';
print_r($_POST['address']);
  

  for ($i = 0; $i < count($_POST['address']); $i++) 
			{
				
			$address = $_POST['address'][$i];
			$street = $_POST['street'][$i];
			$city = $_POST['city'][$i];
			$country = $_POST['country'][$i];
      $sql = "INSERT INTO `address_data` (`address`, `street`, `city`, `country`) VALUES ('.$address','.$street','.$city','.$country')";

      if (mysqli_query($con, $sql)) {
          echo "New record created successfully";
      } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($con);
      }
    } 
  


?>