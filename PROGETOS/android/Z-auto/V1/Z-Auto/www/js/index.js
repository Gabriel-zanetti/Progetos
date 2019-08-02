
var app = {
 initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},


onDeviceReady: function() {
    this.receivedEvent('deviceready');
},


receivedEvent: function(id) {
    window.requestFileSystem(LocalFileSystem.PERSISTENT,0, pegarArquivoRead, fail);
    menu.menu();
    cordova.plugins.backgroundMode.setEnabled(true); //abilitar segundo plano
    sd.verificar();
    cordova.plugins.autoStart.enable(); //inicializa junto com o Android
      cordova.plugins.backgroundMode.enable(); //desabilitar botao de voltar
      

      cordova.plugins.notification.local.schedule({
        title: 'Z-Autor',
        text: 'www.zanettiautomarketing.com.br ',
        smallIcon: 'res://calendar',
    }); 

  },

};

app.initialize();




