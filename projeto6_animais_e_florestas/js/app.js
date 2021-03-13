$(document).ready(function(){
  $('.animais .tab-menu a').first().addClass('active'); //adiciona a classe ativa ao primeiro item encontrado (a)
  $('.animais .item').first().addClass('active'); //adiciona a classe ativa ao primeiro item encontrado div
  $('.animais .tab-menu a').click(function(e){
    e.preventDefault(); //previne a ação padrão
    let itemId = $(this).attr('href'); //seleciona o item correspondente ao que está sendo clicado

    $('.animais .tab-menu a, .animais .item').removeClass('active'); //remove a classe do item que não está selecionado
    $(this).addClass('active'); //adiciona a classe ao item selecionado
    $(itemId).addClass('active'); //adiciona a classe ao item clicado de acordo com a opçção selecionada
  });

  $('.florestas .tab-menu a').first().addClass('active'); //adiciona a classe ativa ao primeiro item encontrado (a)
  $('.florestas .item').first().addClass('active'); //adiciona a classe ativa ao primeiro item encontrado div
  $('.florestas .tab-menu a').click(function(e){
    e.preventDefault(); //previne a ação padrão
    let itemId = $(this).attr('href'); //seleciona o item correspondente ao que está sendo clicado

    $('.florestas .tab-menu a, .florestas .item').removeClass('active'); //remove a classe do item que não está selecionado
    $(this).addClass('active'); //adiciona a classe ao item selecionado
    $(itemId).addClass('active'); //adiciona a classe ao item clicado de acordo com a opçção selecionada
  });
});