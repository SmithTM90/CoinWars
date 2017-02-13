window.onload = function() {

  var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create });

  function preload () {

    game.load.image('logo', 'phaser.png');
    game.load.image('table', 'wood1.jpg');
    game.load.image('coin', 'Coin.png');

  }

  function create () {

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

  }

  function update () {

  }

};
