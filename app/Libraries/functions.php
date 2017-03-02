<?PHP
use App\Menuitems;
use App\Greensock;
use App\Rightclick;

function left_guest_nav() {
$sqlmenu = Menuitems::where('status', 'ACTIVE')
    ->WHERE('restricted', '!=', 'ADMIN')
    ->ORDERBY('parent_id', 'ASC')
    ->ORDERBY('sortorder', 'ASC')
    ->ORDERBY('name', 'ASC')
    ->GET();
    return $sqlmenu;
}
function left_admin_nav() {
$sqlmenu = Menuitems::where('status', 'ACTIVE')
    ->ORDERBY('parent_id', 'ASC')
    ->ORDERBY('sortorder', 'ASC')
    ->ORDERBY('name', 'ASC')
    ->GET();
    return $sqlmenu;
}
function left_inactive_nav() {
$availablemenulist = Menuitems::where('status', 'INACTIVE')
    ->ORDERBY('parent_id', 'ASC')
    ->ORDERBY('sortorder', 'ASC')
    ->ORDERBY('name', 'ASC')
    ->GET();
    return $availablemenulist;
}
function getLeftnav() {
    if (Auth::guest()) {
        return parseNav(left_guest_nav());
    }else{
        return parseNav(left_admin_nav());
    }   
}

// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.
function parseNav($tree, $root = 0) {


    $return = [];
    # Traverse the tree and search for direct children of the root
    foreach($tree as $key => $value) {
        # A direct child is found
        if($value["parent_id"] == $root) {
        
            # Remove item from tree (we don't need to traverse this again)
            unset($tree[$key]);
            # Append the child into result array and parse its children
            $return[] = array(
                'value' => $value,
                'children' => parseNav($tree, $value["id"])
            );
        }
    }
    
    return empty($return) ? null : $return;
}

function printNav($tree,$level=0) {
    global $currentpage;
    if(!is_null($tree) && count($tree) > 0) {
        foreach($tree as $node) {
        echo "\n";
            // Top level
            if ( empty($node['children']) ) { // no children
                if ( $currentpage == $node["value"]['url'] ) {
                echo '<li class="active activeNavItem">';    
                } else {
                echo '<li>';    
                }
                echo '<a id="'.$node['value']['id'].'" href="'. $node['value']['url'] .'">&nbsp;<i class="menu-icon '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'">&nbsp;</i><span class="mm-text mmc-dropdown-delay animated fadeIn">&nbsp;'.$node['value']['name'].'</span></a>';
            }
            if ( !empty($node['children']) ) { // has children
                if ( $currentpage == $node["value"]['url'] ) {
                echo '<li class="active activeNavItem">';    
                } else {
                echo '<li>';    
                }
                echo '<a id="'.$node['value']['id'].'" href="'. $node['value']['url'] .'">&nbsp;<i class="'.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'">&nbsp;</i><span class="nav-label">&nbsp;'.$node['value']['name'].'</span><span class="fa arrow"></span></a><ul class="nav nav-second-level">';
                                }

            printNav($node['children'], $level+1);
            if (empty($node['children']) ) {echo '</li>';}
            if (!empty($node['children']) ) {echo '</ul>';}
            } // end foreach
    } // end if
} // end printNav Printout

function parseTree($tree, $whichlist, $root = 0) {
    $return = [];
    # Traverse the tree and search for direct children of the root
    foreach($tree as $key => $value) {
        # A direct child is found
        if($value["parent_id"] == $root) {
        
            # Remove item from tree (we don't need to traverse this again)
            unset($tree[$key]);
            # Append the child into result array and parse its children
            $return[] = array(
                'value' => $value,
                'children' => parseTree($tree, $whichlist, $value["id"])
            );
        }
    }
    return empty($return) ? null : $return;
}

function printIconTree($tree,$level=0) {
    if(!is_null($tree) && count($tree) > 0) {
    if($level==0){
    echo '<div class="dropdown" style="position:relative">
            <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Select: <span class="caret"></span></a>
                <ul class="dropdown-menu">';
    }
        foreach($tree as $node) {
            //print("<pre>".print_r($node['children'],true)."</pre>");
        echo "\n";
            // Top level
            if ( empty($node['children']) ) {
                echo '<li><a class="iconItemSelection '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'" type="button" data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'" data-id="'.$node['value']['id'].'">&nbsp;'.$node['value']['name'].'</a></li>';
            }
            if ( !empty($node['children']) AND !empty($node['children']['0']['children'] )) {
                echo '<li class="dropdown-submenu">
                <a class="trigger right-caret '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'"  data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'"  data-id="'.$node['value']['id'].'">'.$node['value']['name'].'</a>
                <ul class="dropdown-menu sub-menu">';
            }
            if ( !empty($node['children']) AND empty($node['children']['0']['children']) ) {
                echo '<li class="dropdown-submenu">
                <a class="trigger right-caret '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'"  data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'" data-id="'.$node['value']['id'].'">'.$node['value']['name'].'</a>
                <ul class="dropdown-menu sub-menu"  style="max-height:400px;overflow:auto;">';
            }
            printIconTree($node['children'], $level+1);
            if (!empty($node['children']) ) {echo '</li></ul>';}
        } // end foreach
    } // end if
    if($level==0){
    echo '</div><span class="iconSelection pull-right" style="color:#6699ff;position:absolute;top:2px;left:105px; font-size:1.5em;"></span>';
    }
} // end function

function printrightMenu($tree,$level=0) {
    
    if(!is_null($tree) && count($tree) > 0) {
    if($level==0){
    echo '<ul class="dropdown-menu rightClickMenu">';
    }
        foreach($tree as $node) {
        echo "\n";
            // Top level
            if ( empty($node['children']) ) {
                if ( !empty($node['value']['menu_type']) AND ($node['value']['menu_type']== "inlineForm") ) {
                    echo '<li><a class="trigger right-caret '.$node['value']['action_type'].' '.$node['value']['icon'].' '.$node['value']['menu_type'].' '.$node['value']['action_type'].'" data-menu_type="'.$node['value']['menu_type'].'" data-action_type="'.$node['value']['action_type'].'" data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>
                <ul class="dropdown-menu sub-menu"><li>'. $node['value']['custom'] . '</li></ul></li>';
                }else{
                    //this group has no child and will likely have an Add Animation icon on it
                echo '<li><a class="iconItemSelection '.$node['value']['action_type'].' '.$node['value']['icon'].' MenuActionItem '.$node['value']['menu_type'].' '.$node['value']['code'].' '.$node['value']['action_type'].'" '. (!empty($node["value"]["act_on"]) ? 'data-target="'.$node['value']['act_on'].'" data-toggle="modal" ' : '').  '  type="button" data-animationui="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" data-code="'.$node['value']['code'].'" data-action_type="'.$node['value']['action_type'].'" data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>'. (!empty($node["value"]["code"]) ? '<span  data-code="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" style="position:absolute; right:15px; top:9px; text-size=16px;" class="addKeyframeMenu fa fa-plus-square-o fa-lg pull-right" ></span>' : '').  '</li>';
                }
            }
            if ( !empty($node['children']) AND !empty($node['children']['0']['children'] )) {
                echo '<li class="dropdown-submenu">
                <a class="trigger right-caret '.$node['value']['icon'].' '.$node['value']['action_type'].' '.$node['value']['menu_type'].' '.$node['value']['code'].' '.$node['value']['action_type'].'"  data-animationui="'.$node['value']['code'].'" data-menu_type="'.$node['value']['menu_type'].'" data-code="'.$node['value']['code'].'" data-action_type="'.$node['value']['action_type'].'"  data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>
                <ul class="dropdown-menu sub-menu">';
            }
            if ( !empty($node['children']) AND empty($node['children']['0']['children']) ) {
                echo '<li class="dropdown-submenu">
                <a class="trigger right-caret '.$node['value']['action_type'].' '.$node['value']['icon'].' '.$node['value']['menu_type'].' '.$node['value']['code'].' '.$node['value']['action_type'].'"  data-menu_type="'.$node['value']['menu_type'].'" data-code="'.$node['value']['code'].'" data-action_type="'.$node['value']['action_type'].'" data-id="'.$node['value']['id'].'">'. (!empty($node["value"]["image"]) ? '<img class="rightClickIcon" height="15" src="'.$node['value']['image'].'">' : '').  '&nbsp;'.$node['value']['name'].'</a>
                <ul class="dropdown-menu sub-menu"  style="max-height:400px;overflow:auto;">';
            }
            printrightMenu($node['children'], $level+1);
            if (!empty($node['children']) ) {echo '</li></ul>';}
        } // end foreach
    } // end if
    if($level==0){
    echo '<div class="currentAnimations"></div>';
    }
} // end function

function printDropdown($tree,$level=0) {
    if(!is_null($tree) && count($tree) > 0) {
    if($level==0){
    echo '<div class="dropdown" style="position:relative">
            <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Select: <span class="caret"></span></a>
                <ul class="dropdown-menu">';
    }
        foreach($tree as $node) {
            //print("<pre>".print_r($node['children'],true)."</pre>");
        echo "\n";
            // Top level
            if ( empty($node['children']) ) {
                echo '<li><a class="iconItemSelection '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'" type="button" data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'" data-id="'.$node['value']['id'].'">&nbsp;'.$node['value']['name'].'</a></li>';
            }
            if ( !empty($node['children']) AND !empty($node['children']['0']['children'] )) {
                echo '<li class="dropdown-submenu">
                <a class="trigger right-caret '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'"  data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'"  data-id="'.$node['value']['id'].'">'.$node['value']['name'].'</a>
                <ul class="dropdown-menu sub-menu">';
            }
            if ( !empty($node['children']) AND empty($node['children']['0']['children']) ) {
                echo '<li class="dropdown-submenu">
                <a class="trigger right-caret '.$node['value']['prefix'].' '.$node['value']['code'].' '.$node['value']['modifier'].'"  data-prefix="'.$node['value']['prefix'].'" data-csscode="'.$node['value']['code'].'" data-modifier="'.$node['value']['modifier'].'" data-id="'.$node['value']['id'].'">'.$node['value']['name'].'</a>
                <ul class="dropdown-menu sub-menu"  style="max-height:400px;overflow:auto;">';
            }
            printDropdown($node['children'], $level+1);
            if (!empty($node['children']) ) {echo '</li></ul>';}
        } // end foreach
    } // end if
    if($level==0){
    echo '</div><span class="iconSelection pull-right" style="color:#6699ff;position:absolute;top:2px;left:105px; font-size:1.5em;"></span>';
    }
} // end function

    function startListTree($treelist,$menutype="standardlist") {
        
            
        echo '<div '. (($menutype == "active") ? "class='col-md-5 '" :"class='col-md-6 affix'  style='right:0'") .' >
                <div id="usersidediv">
                    <div class="panel panel-info panel-dark">
                        <div class="panel-heading">
                            <div class="panel-heading-controls">
                                <button class="btn btn-xs topPanel" title=""  data-target="#modal-sizes-2" data-toggle="modal" rel="tooltip" data-original-title="Add Menu Item"><span class="fa fa-plus-circle"></span></button></a>

                                <input type="hidden" id="reorderValue" name="ids" value=""/>
                                
                                <button class=" toggleView btn btn-xs topPanel" title="Expand All" rel="tooltip" type="button" data-action="expand-all"><span class="fa fa-chevron-down"></span></button>
                                
                                <button  class=" toggleView btn btn-xs topPanel" title="Collapse All" rel="tooltip" data-action="collapse-all" type="button" data-original-title="Collapse All"><span class="fa fa-chevron-up"></span></button>
                                
                                <button  class="pull-right toggleView btn btn-xs topPanel" onclick="$(\'.affixToggle\').toggleClass(\'affix\')" title="Fix to Top" rel="tooltip"  type="button" data-original-title="Fix to Top"><span class="glyphicon glyphicon-pushpin"></span></button>
                            </div>
                                <span class="panel-title">Menu Items</span>
                        </div>
                        <div class="panel-body">';
    }

    function printEditableTree($editabletree,$level=0) {
        if(!is_null($editabletree) && count($editabletree) > 0) {
            foreach($editabletree as $node) {

            echo "\n";
            //print_r($editabletree);
                // Top level
                if ( empty($node['children']) ) { // no children
                    echo '<li class="dd-item dd3-item" data-id="'. $node["value"]["id"] .'">
                            <div class="dd-handle dd3-handle" data-id="'. $node["value"]["id"] .'"></div>
                            <div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'"><span data-id="'. $node["value"]["id"] .'" class="btn '.$node['value']['prefix'].' '.$node['value']['code'].'"></span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span><span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-group="'. $node["value"]["group"] .'" data-code="'. $node["value"]["code"] .'" data-prefix="'. $node["value"]["prefix"] .'" data-modifier="'. $node["value"]["modifier"] .'" data-custom="'. $node["value"]["custom"] .'" data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'" data-restricted="'. (!empty($node["value"]["restricted"]) ? $node["value"]["restricted"] : "").  '" data-url="'. (!empty($node["value"]["url"]) ? $node["value"]["url"] : "").  '"></span></div>';

                    
                }
                if ( !empty($node['children']) ) { // has children
                    echo '<li class="dd-item dd3-item" data-id="'. $node["value"]["id"] .'">
                    <div class="dd-handle dd3-handle" data-id="'. $node["value"]["id"] .'"></div>
                    <div class="dd-handle dd3-content" data-id="'. $node["value"]["id"] .'"><span data-id="'. $node["value"]["id"] .'" class="btn '.$node['value']['prefix'].' '.$node['value']['code'].'"></span>'. $node["value"]["name"] .'<span class="pull-right fa fa-trash  fa-lg deleteItem dd-nodrag" data-id="'. $node["value"]["id"] .'"></span><span class="pull-right fa fa-pencil fa-lg editItem dd-nodrag" data-target="#modal-sizes-2" data-toggle="modal" data-id="'. $node["value"]["id"] .'" data-parent_id="'. $node["value"]["parent_id"] .'" data-name="'. $node["value"]["name"] .'" data-group="'. $node["value"]["group"] .'" data-code="'. $node["value"]["code"] .'" data-prefix="'. $node["value"]["prefix"] .'" data-modifier="'. $node["value"]["modifier"] .'" data-custom="'. $node["value"]["custom"] .'" data-sortorder="'. $node["value"]["sortorder"] .'" data-status="'. $node["value"]["status"] .'" data-restricted="'. (!empty($node["value"]["restricted"]) ? $node["value"]["restricted"] : "").  '"  data-url="'. (!empty($node["value"]["url"]) ? $node["value"]["url"] : "").  '"></span></div><ol class="dd-list" data-id="'. $node["value"]["id"] .'">';
                                    }

                printEditableTree($node['children'], $level+1);
                if (empty($node['children']) ) {echo '</li>';}
                if (!empty($node['children']) ) {echo '</ol>';}
                } // end foreach
                
        } // end if
    } // end editTree Printout

    function adminMenu($incominglist, $list){
        if ($list == "active"){

            startListTree($incominglist,$menutype="active");
            echo '<div class="dd" id="nestable" data-id="0" data-list="ACTIVE"><ol class="dd-list" data-id="ACTIVE"><li class="dd-item dd3-item dd-collapsed" data-id="ACTIVE">Active Items';
            if (!empty($incominglist)){printEditableTree($incominglist);}
            echo '</li></ol></div>';
            echo '</div></div></div></div>';
        }
        if ($list == "available"){
            startListTree($incominglist);
            echo '<div class="dd" id="nestable" data-id="0" data-list="INACTIVE"><ol class="dd-list" data-id="INACTIVE"><li class="dd-item dd3-item dd-collapsed" data-id="INACTIVE">Inactive Items';
            if (!empty($incominglist)){printEditableTree($incominglist);}
            echo '</li></ol></div>';
            echo '</div></div></div></div>';
        }
    }