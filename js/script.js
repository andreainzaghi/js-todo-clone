var listaSpesa = [
	'comprare vino',
  'comprare pollo',
  'comprare carte',
];

for (var i = 0; i < listaSpesa.length; i++) {
	// clono il template
	var template =$('template li').clone();
	// aggiungo le info al template
	template.prepend(listaSpesa[i]);
	// aggiung ol iil template alla lista
	$(this).parent().remove();
}

// cancello gli elementi dalla listaSpesa
$('.todo-list__delete').click(function (){
	$(this).parent().remove();
});

$('#aggiungi').keydown(function (){
	if(evento.which == 13){
		var testo = $(this).val();
		if (testo!=''){
			// clono il template
			var template =$('.template li').clone();
			// aggiungo le info al template
			 template.prepend(testo);
			// aggiungo il template alla lista
			 $('.todo-list').append(template);
			 $(this).val('');
		}
	}
});

$(document).on('click','todo-list__delete',function(){
	$(this).parent().remove();
}
);
