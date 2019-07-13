$("ul").on("click", "li", function(event){
	$(this).toggleClass("delete");
});
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(1500,function(){
		$(this).remove();
	});//remove the parent of span
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");
	}
});
$(".fa-plus").on("click",function(){
	$("input").fadeToggle("slow");
	$("ul").fadeToggle("slow");
});