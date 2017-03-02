



<script type="text/javascript">
setTimeout(function() {
$.ajax({
  url: "/plugins/slider/partials",
  success: function(data){
     $(data).find('a:contains(.js)').each(function(){
        // will loop through 
        var partial = $(this).attr("href");
        $.getScript( "/plugins/slider/partials/" + partial, function( data, textStatus, jqxhr ) {});
     });
  }
});
}, 30);
</script>