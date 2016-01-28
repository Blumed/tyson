$('.sidebar-toggle').on('click', function(){
  $(this).toggleClass('active');
  console.log('click');
  //$('#overlay').toggleClass('open');
});
	// // MOBILE NAVIGATION TOGGLE
	// $('.toggle_navigation').on('click', function(e){
	// 	e.preventDefault();
	// 	$('.toggle_navigation').parent('nav').toggleClass('is-active');
	// });