<?PHP 
include('functions.php');
try {
    $db = new PDO('sqlite:../database/admin.sqlite');
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

if ($_REQUEST['do'] == 'adminmenu'){
		$update = "UPDATE menu_items SET  
		menu_url = :menu_url,
		menu_parent_id = :menu_parent_id,
		sortorder = :sortorder,
		admin = :admin,
		status = :status,
		fontawesome = :fontawesome
		WHERE menu_item_id = :menu_item_id";
		$stmt = $db->prepare($update);
		$stmt->bindParam(':menu_url', $_REQUEST["menu_url"]);
		$stmt->bindParam(':menu_parent_id', $_REQUEST["menu_parent_id"]);
		$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
		$stmt->bindParam(':status', $_REQUEST["status"]);
		$stmt->bindParam(':admin', $_REQUEST["admin"]);
		$stmt->bindParam(':fontawesome', $_REQUEST["fontawesome"]);
		$stmt->bindParam(':menu_item_id', $_REQUEST["menu_item_id"]);
		$stmt->execute();
		if (!empty($_REQUEST['deletetask'])){
			$id = $_REQUEST['deletetask'];
			
				$delete = "DELETE FROM menu_items where menu_item_id = :id";
				$stmt = $db->prepare($delete);
				$stmt->bindParam(':id', $id);
				$stmt->execute();
		}	

};

##Add a new Menu Item
if ($_REQUEST['do'] == 'addmenu'){
		$insert = "INSERT INTO menu_items  
		(menu_parent_id, menu_item_name, menu_description, menu_url, sortorder, fontawesome, admin, status) 
		VALUES 
		(:menu_parent_id, :menu_item_name, :menu_description, :menu_url, :sortorder, :fontawesome, :admin, :status)";
		$stmt = $db->prepare($insert);
		$stmt->bindParam(':menu_parent_id', $_REQUEST["menu_parent_id"]);
		$stmt->bindParam(':menu_item_name', $_REQUEST["menu_item_name"]);
		$stmt->bindParam(':menu_description', $_REQUEST["menu_description"]);
		$stmt->bindParam(':menu_url', $_REQUEST["menu_url"]);
		$stmt->bindParam(':sortorder', $_REQUEST["sortorder"]);
		$stmt->bindParam(':fontawesome', $_REQUEST["fontawesome"]);
		$stmt->bindParam(':admin', $_REQUEST["admin"]);
		$stmt->bindParam(':status', $_REQUEST["status"]);
		$stmt->execute();

};
##Save Settings Page
if ($_REQUEST['do'] == 'settings'){
	$update = "UPDATE settings SET  
		`value` = :value, 
		`default` = :default,
		`description` = :description,
		`switches` = :switches,
		`status` = :status
		WHERE id = :id";
		$stmt = $db->prepare($update);
		$stmt->bindParam(':value', $_REQUEST["value"]);
		$stmt->bindParam(':default', $_REQUEST["default"]);
		$stmt->bindParam(':description', $_REQUEST["description"]);
		$stmt->bindParam(':switches', $_REQUEST["switches"]);
		$stmt->bindParam(':status', $_REQUEST["status"]);
		$stmt->bindParam(':id', $_REQUEST["id"]);
		$stmt->execute();

		if (!empty($_REQUEST['deletetask'])){
			$id = $_REQUEST['deletetask'];
				$delete = "DELETE FROM settings where id = :id";
				$stmt = $db->prepare($delete);
				$stmt->bindParam(':id', $id);
				$stmt->execute();
		}

};

if ($_REQUEST['do'] == 'addsetting'){
		$insert = "INSERT INTO settings  
		('name','value','status','switches','default','description') 
		VALUES
		(:name, :value, :status, :switches, :default, :description)";
		$stmt = $db->prepare($insert);
		$stmt->bindParam(':name', $_REQUEST["name"]);
		$stmt->bindParam(':value', $_REQUEST["value"]);
		$stmt->bindParam(':status', $_REQUEST["status"]);
		$stmt->bindParam(':switches', $_REQUEST["switches"]);
		$stmt->bindParam(':default', $_REQUEST["default"]);
		$stmt->bindParam(':description', $_REQUEST["description"]);
		$stmt->execute();
};
if ($_REQUEST['do'] == 'addlisting'){
		$insert = "INSERT INTO items  
		('item_name','description','image','image_after','image_before','image_gallery','item_group','link','short_description','sort_order','status','style') 
		VALUES
		(item_name = :item_name, description = :description, image = :image, image_after = :image_after, image_before = :image_before, image_gallery = :image_gallery, item_group = :item_group, link = :link, short_description = :short_description, sort_order = :sort_order, status = :status, style = :style)";
		$stmt = $db->prepare($insert);
		$stmt->bindParam(':item_name', $_REQUEST["item_name"]);
		$stmt->bindParam(':description', $_REQUEST["description"]);
		$stmt->bindParam(':image', $_REQUEST["image"]);
		$stmt->bindParam(':image_after', $_REQUEST["image_after"]);
		$stmt->bindParam(':image_before', $_REQUEST["image_before"]);
		$stmt->bindParam(':image_gallery', $_REQUEST["image_gallery"]);
		$stmt->bindParam(':item_group', $_REQUEST["item_group"]);
		$stmt->bindParam(':link', $_REQUEST["link"]);
		$stmt->bindParam(':short_description', $_REQUEST["short_description"]);
		$stmt->bindParam(':sort_order', $_REQUEST["sort_order"]);
		$stmt->bindParam(':status', $_REQUEST["status"]);
		$stmt->bindParam(':style', $_REQUEST["style"]);
		$stmt->execute();
};

##Save Users Page
if ($_REQUEST['do'] == 'adminusers'){
	$select = "SELECT * from adminusers";
	$stmt = $db->prepare($select);
	$stmt->execute();
	$row = $stmt->fetch();
	$password=$row['password'];
	$update = "UPDATE adminusers SET  
		password = :password,
		admingroup_id = :admingroup_id
		WHERE id = :id";
		$stmt = $db->prepare($update);
		if(isset($_REQUEST["password"])){
		$securepassword=generate_hash($_REQUEST["password"]);
		$stmt->bindParam(':password', $securepassword);
		}else{
		$stmt->bindParam(':password', $password);
		}
		$stmt->bindParam(':admingroup_id', $_REQUEST["admingroup_id"]);
		$stmt->bindParam(':id', $_REQUEST["id"]);
		$stmt->execute();
		if (!empty($_REQUEST['deletetask'])){
			$id = $_REQUEST['deletetask'];
			
				$delete = "DELETE FROM adminusers where id = :id";
				$stmt = $db->prepare($delete);
				$stmt->bindParam(':id', $id);
				$stmt->execute();
		}
};

if ($_REQUEST['do'] == 'adduser'){
	$username = strtolower($_REQUEST["username"]);
		$insert = "INSERT INTO adminusers  
		('username','password','admingroup_id') 
		VALUES
		(:username, :password, :admingroup_id)";
		$stmt = $db->prepare($insert);
		$stmt->bindParam(':username', $username);
		$securepassword=generate_hash($_REQUEST["password"]);
		$stmt->bindParam(':password', $securepassword);
		$stmt->bindParam(':admingroup_id', $_REQUEST["admingroup_id"]);
		$stmt->execute();
};



?>

