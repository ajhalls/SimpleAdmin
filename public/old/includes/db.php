<?php

//you may need to setup username and password in the $db connection.
try {
$db = new PDO('mysql:host=localhost; dbname=test', 'root', '');
} catch (PDOException $e) {
print "Error!: " . $e->getMessage() . "<br/>";
die();
}

?>