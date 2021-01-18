<?php
require 'datbase.php';

$address = [];
$sql = "SELECT * FROM address_data";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $address[$i]['id']    = $row['id'];
    $address[$i]['address'] = $row['address'];
    $address[$i]['street'] = $row['street'];
    $address[$i]['city'] = $row['city'];
    $address[$i]['country'] = $row['country'];
    $i++;
  }

  echo json_encode($address);
}
else
{
  http_response_code(404);
}