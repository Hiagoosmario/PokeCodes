$(document).ready(function() {
  // Busca as imagens dos Pokémons
  $.getJSON("https://pokeapi.co/api/v2/pokemon?limit=300", function(data) {
    // Itera sobre os Pokémons
    data.results.forEach(function(pokemon) {
      // Cria o card do Pokémon
      var card = $("<div class='card'></div>");
      // Adiciona a imagem do Pokémon
      card.append($("<img src='" + pokemon.sprites.front_default + "'></img>"));
      // Adiciona o número do Pokémon
      card.append($("<h2>" + pokemon.id + "</h2>"));
      // Adiciona o nome do Pokémon
      card.append($("<p>" + pokemon.name + "</p>"));

      // Adiciona um evento de clique ao card
      card.click(function() {
        // Exibe o pop-up com as estatísticas
        $(".stats").show();

        // Atualiza o conteúdo do pop-up
        var stats = $("<ul></ul>");
        stats.append($("<li>HP: " + pokemon.stats.hp + "</li>"));
        stats.append($("<li>Ataque: " + pokemon.stats.attack + "</li>"));
        stats.append($("<li>Defesa: " + pokemon.stats.defense + "</li>"));
        stats.append($("<li>Ataque Especial: " + pokemon.stats.special_attack + "</li>"));
        stats.append($("<li>Defesa Especial: " + pokemon.stats.special_defense + "</li>"));
        stats.append($("<li>Velocidade: " + pokemon.stats.speed + "</li>"));

        // Adiciona o conteúdo atualizado ao pop-up
        $(".stats h2").text(pokemon.name + " - Estatísticas");
        $(".stats ul").html(stats);
      });

      // Adiciona o card à lista de cards
      $(".cards").append(card);
    });
  });
});
