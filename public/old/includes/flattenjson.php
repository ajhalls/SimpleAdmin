<?php
/** 
 * @return array (flattened array with item_id, parent_id, level & position)
 *
 */
function flattenJsonTree($aJSON, $id, $parent_id, $status, $iParentId = 0, $iLevel = 0)
{
    $aRetval = array();
    $iPosition = 1;
    foreach ($aJSON as $aChilds) {
        $aDescendents = array();
        if (isset($aChilds['children'])) {      
            $aDescendents = flattenJsonTree(
                $aChilds['children'], $aChilds['id'], $iLevel+1
            );
        }
        $aRetval[] = array(
            'item_id'  => $aChilds['id'], 
            'parent'   => $iParentId,
            'level'    => $iLevel,
            'position' => $iPosition++, 
        );
        $aRetval = array_merge($aRetval, $aDescendents);
    }
	print_r($aRetval);
    return $aRetval;
}
flattenJsonTree($_REQUEST["jsondata"],$_REQUEST["id"],$_REQUEST["parent_id"],$_REQUEST["status"] );

?>