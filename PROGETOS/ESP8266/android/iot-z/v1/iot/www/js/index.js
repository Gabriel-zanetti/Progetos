
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
        id: 10,
        title: 'Acesse nosso site ',
        text: 'www.zanettiautomarketing.com.br ',
        smallIcon: 'res://calendar',
        data: { meetingId:"#f11" }
    }); 
      cordova.plugins.notification.local.on("click", function (notification) {
        if (notification.id == 10) {
          location.href='http://www.zanettiautomarketing.com.br';
        }
    });

  },

};

app.initialize();




