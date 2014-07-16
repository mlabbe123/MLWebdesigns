$(document).ready(function(){
	$('.toggle-menus-reguliers').on('click', function(event) {
		$('.menus-normal').removeClass('is-hidden');
		$('.menus-groupes').addClass('is-hidden');

		$('.toggle-menus-reguliers').addClass('is-selected');
		$('.toggle-menus-groupes').removeClass('is-selected');
	});

	$('.toggle-menus-groupes').on('click', function(event) {
		$('.menus-normal').addClass('is-hidden');
		$('.menus-groupes').removeClass('is-hidden');

		$('.toggle-menus-reguliers').removeClass('is-selected');
		$('.toggle-menus-groupes').addClass('is-selected');
	});
});