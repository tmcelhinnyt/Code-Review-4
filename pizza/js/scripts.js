$(document).ready(function() {
    $("form#order-form").submit(function(event) {
        event.preventDefault();
        $("#order-receipt").show();
        $("input:checkbox[name=vegetable]:checked").each(function() {
            var veg = $(this).val();
            $("#orderVeg").prepend(veg + ", ");
        });
        $("input:checkbox[name=protein]:checked").each(function() {
            var pro = $(this).val();
            $("#orderPro").prepend(pro + ", ");
        });
        $("input:radio[name=small]:checked").each(function() {
            var sizS = 0
            var sizS = parseInt($(this).val());
            $("#orderSizeS").prepend("small");
        });
        $("input:radio[name=medium]:checked").each(function() {
            var sizM = 0
            var sizM = parseInt($(this).val());
            $("#orderSizeM").prepend("medium");
        });
        $("input:radio[name=large]:checked").each(function() {
            var sizL = 0
            var sizL = parseInt($(this).val());
            $("#orderSizeL").prepend("large");
        });
        $("#order-form").hide();
    });
});

function orderPrice() {
    var price = 0
    $(":checkbox[name=vegetable]:checked").each(function() {
        var price = price + .25;
    });
    $(":checkbox[name=protein]:checked").each(function() {
        var price = price + .5;
    });
    $("#orderPrice").prepend(price);
};

// function orderPrice() {
//     var price = 0
//     $(":checkbox:checked").each(function() {
//     price = parseInt($(this).val());
//     $("#orderPrice").prepend(price);
//     });
// };