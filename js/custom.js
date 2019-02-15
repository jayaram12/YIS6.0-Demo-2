$(document).ready(function(){
  /* Tooltip  */
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });
// starting the script on page load Image Preview
imagePreview();

// $('.collections .table tbody tr').click(function(){
//   $(this).toggleClass('selected');
// });

// For select 2
$(".searchbykeyword").select2();
$('.selectpicker').selectpicker();


$('#AddNewCollection').hide();
$('#AddNewCollectionBtn').click(function(){
  $('#AddNewCollection').slideDown('slow');
});

$('#Results').hide();
$('#Filter').click(function(){
  $('#Results').slideDown('slow');
});


$('.CellEditBtn').click(function(){
    $('.CellEdit').attr('contenteditable', 'true');
});
$('.CellEditBtn1').click(function(){
    $('.CellEdit1').attr('contenteditable', 'true');
});
$('.CellEditBtn2').click(function(){
    $('.CellEdit2').attr('contenteditable', 'true');
});

$('.CellEditBtn3').click(function(){
    $('.CellEdit3').attr('contenteditable', 'true');
});

$('.CellEditBtn4').click(function(){
    $('.CellEdit4').attr('contenteditable', 'true');
});

});

this.imagePreview = function(){
/* CONFIG */
xOffset = 5;
yOffset = 15;
// these 2 variable determine popup's distance from the cursor
// you might want to adjust to get the right result
/* END CONFIG */
$("a.preview").hover(function(e){
this.t = this.title;
this.title = "";
var c = (this.t != "") ? "<br/>" + this.t : "";
$("body").append("<p id='ImagePreview'><img src='"+ this.href +"' />"+ c +"</p>");
$("#ImagePreview")
.css("top",(e.pageY - xOffset) + "px")
.css("left",(e.pageX + yOffset) + "px")
.fadeIn("fast");
},
function(){
this.title = this.t;
$("#ImagePreview").remove();
});

};


$("document").ready(function(){
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function() {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "tab2"){
		$('.tab-slider--tabs').addClass('slide');
	}
  else if($(this).attr("rel") == "tab3"){
		$('.tab-slider--tabs').addClass('slide2');
	}
  else{
		$('.tab-slider--tabs').removeClass('slide');
		$('.tab-slider--tabs').removeClass('slide2');
	}

  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});


/* ===== Collapsible Panels JS ===== */

    (function ($, window, document) {
        var panelSelector = '[data-perform="panel-collapse"]',
            panelRemover = '[data-perform="panel-dismiss"]';
        $(panelSelector).each(function () {
            var collapseOpts = {
                    toggle: false
                },
                parent = $(this).closest('.panel'),
                wrapper = parent.find('.panel-wrapper'),
                child = $(this).children('i');
            if (!wrapper.length) {
                wrapper = parent.children('.panel-heading').nextAll().wrapAll('<div/>').parent().addClass('panel-wrapper');
                collapseOpts = {};
            }
            wrapper.collapse(collapseOpts).on('hide.bs.collapse', function () {
                child.removeClass('fa-minus').addClass('fa-plus');
            }).on('show.bs.collapse', function () {
                child.removeClass('fa-plus').addClass('fa-minus');
            });
        });

        /* ===== Collapse Panels ===== */

        $(document).on('click', panelSelector, function (e) {
            e.preventDefault();
            var parent = $(this).closest('.panel'),
                wrapper = parent.find('.panel-wrapper');
            wrapper.collapse('toggle');
        });

    }(jQuery, window, document));
