<?PHP
use App\Categories;

function categories() {
$categories = Categories::where('status', 'ACTIVE')
    ->ORDERBY('parent_id', 'ASC')
    ->ORDERBY('sortorder', 'ASC')
    ->ORDERBY('name', 'ASC')
    ->GET()->toArray();
    return $categories;
}
// This function accepts an array, tree, with a parent_id field that
// references the id of other items in the array.
function parseCategories($tree, $root = 0) {


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
                'children' => parseCategories($tree, $value["id"])
            );
        }
    }
    
    return empty($return) ? null : $return;
}

function printCategories($tree,$level=0) {
    global $currentpage;
    if(!is_null($tree) && count($tree) > 0) {
        foreach($tree as $node) {
        echo "\n<div class='row' style='margin-bottom:20px;'>";
        echo '<div class="col-md-1 btn btn-primary modaledit"  id="'.$node['value']['id'].'" data-target="#editCategory" data-toggle="modal">edit</div>';    
            // Top level
            if ( empty($node['children']) ) { // no children
                if ( $node['value']['parent_id'] != "0" ) { // is a sub category
                    echo '<div class="col-md-'.$level.'"></div>';
                }
                echo '';    
                echo '<a id="'.$node['value']['id'].'">&nbsp;'.$node['value']['name'].'</a>';
            }
            if ( !empty($node['children']) ) { // has children
                if ( $node['value']['parent_id'] != "0" ) { // is a sub category
                    echo '<div class="col-md-'.$level.'"></div>';
                }                
                echo '<a id="'.$node['value']['id'].'">&nbsp;'.$node['value']['name'].'</a>';
            }
            echo "\n</div>";

            printCategories($node['children'], $level+1);
        } // end foreach
    } // end if
} // end printCategories Printout
