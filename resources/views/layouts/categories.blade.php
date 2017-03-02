<?PHP
use App\Menuitems;
use Libraries\functions;

///
/// LEFT HAND NAVIGATION SECTION
///
?>
<!-- 4. $MAIN_SIDE_MENU ================================================================================= -->

    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav" id="side-menu">

            {{ printNav(getLeftnav()) }}
            {{ printNav(getCategories()) }}

            </ul>

</div>

