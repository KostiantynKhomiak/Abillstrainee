var modalInputs = {
	name: $('#recipient-name'),
	sales: $('#recipient-sales'),
	city: $('#recipient-city'),
	email: $('#recipient-email')
}

$('.edit-button').on('click', function(){
	var info = {
		name: $(this).closest('.card').find('.client-name'),
		sales: $(this).closest('.card').find('.client-sales'),
		city: $(this).closest('.card').find('.client-city'),
		email: $(this).closest('.card').find('.client-email')
	}
	
	$('#edit').attr('data-edit-client-id', $(this).closest('.card').attr('data-client-id'));

	modalInputs.name.val(info.name.html());
	modalInputs.sales.val(info.sales.html());
	modalInputs.city.val(info.city.html());
	modalInputs.email.val(info.email.html());
	
	$('#edit').modal();
});

$('#save-modal-changes').on('click', function() {
	var clientId = $('#edit').attr('data-edit-client-id');
	$('.card[data-client-id="'+clientId+'"]').find('.client-name').html(modalInputs.name.val());
	$('.card[data-client-id="'+clientId+'"]').find('.client-sales').html(modalInputs.sales.val());
	$('.card[data-client-id="'+clientId+'"]').find('.client-city').html(modalInputs.city.val());
	$('.card[data-client-id="'+clientId+'"]').find('.client-email').html(modalInputs.email.val());
	$('#edit').modal('hide');
});

/*function myFunction() {
  document.getElementById("input1").innerHTML = document.getElementById("recipient-name");
}*/