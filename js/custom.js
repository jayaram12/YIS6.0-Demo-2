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
