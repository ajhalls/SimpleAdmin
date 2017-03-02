<?PHP
// Setup Setting Array
$db = new SQLite3('./database/admin.sqlite'); 
$sql = "SELECT * FROM settings WHERE status='ACTIVE'";
$result = $db->query($sql);
$setting = array();
 while($res = $result->fetchArray(SQLITE3_ASSOC)){
	  $setting[$res['name']] = $res['value'];
 }
 ?>
 <!DOCTYPE html>

<html class="gt-ie8 gt-ie9 not-ie">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?=$setting['sitename']?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

<link href="./includes/slider/jquery.mobile.custom.structure.min.css" rel="stylesheet" />
<link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-rc.1/css/select2.min.css" rel="stylesheet" />
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,600,700,300&subset=latin" rel="stylesheet" type="text/css">
<link href="http://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet"> 
<link media="all" type="text/css" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="./includes/animate.css">
<link rel="stylesheet" href="./includes/magnific-popup/magnific-popup.css">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="./includes/slider/jquery.mobile.custom.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/jquery.ui.touch-punch.js"></script>
<script src="./includes/javascripts/SplitText.js"></script>
<script src="./includes/javascripts/TimelineMax.js"></script>
<script src="./includes/javascripts/TweenMax.js"></script>
<script src="./includes/javascripts/select2.js"></script>
    
<script src="http://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
<script src="./includes/slider/velocity.js"></script>
<script src="./includes/slider/velocity.ui.js"></script>
<script src="./includes/javascripts/select2.js"></script>

<script>var init = [];</script>
<style type="text/css">

</style>
</head>
<body>


