//Popover initialization
$(document).ready(function(){
    $('#slidea').popover('show');
    window.setTimeout(function(){
        $('#slidea').popover('hide');
    }, 6000); //600 are the ms until the timeout is called
});  
//Popover end               
$(document).ready(function() {
    $("#slider").slider({
        animate: true,
        value:1,
        min: 1,
        max: 500,
        step: 1,
        slide: function(event, ui) {
            update(1,ui.value); //changed
        }
    });

    //Added, set initial value.
    $("#amount").val(1);
    $("#amount-label").text(1);
    update();
});

//changed. now with parameter
function update(slider,val) {
    //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
    var $amount = slider == 1?val:$("#amount").val();
    var $duration = slider == 2?val:$("#duration").val();

    /* commented
    $amount = $( "#slider" ).slider( "value" );
    $duration = $( "#slider2" ).slider( "value" );
    */

    $( "#amount" ).val($amount);
    $( "#amount-label" ).text($amount);

    $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}