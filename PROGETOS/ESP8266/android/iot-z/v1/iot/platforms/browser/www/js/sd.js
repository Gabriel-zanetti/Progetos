 
var sd = {
	conteudoNovo:"",
	conteudoExistente:"",
	gravar:function(conteudo){
		sd.conteudoNovo = conteudo;
     window.requestFileSystem(LocalFileSystem.PERSISTENT,0, pegarArquivo, fail);
 },
 pegar:function(){
  window.requestFileSystem(LocalFileSystem.PERSISTENT,0, pegarArquivoRead, fail);
},
gravar2:function(conteudo2){
    window.requestFileSystem(LocalFileSystem.PERSISTENT,0, pegarArquivo2, fail);
    function pegarArquivo2(directoryEntry){
        directoryEntry.root.getFile('status".iot"',{create:true, exclusive:false}, sucess2, fail);
    }

    function sucess2(fileEntry){
        fileEntry.createWriter(win2, fail);
    }

    function win2(writer){
        writer.onwrite= alertaSucesso;
        writer.onerror= fail;

        var conteudo = conteudo2;

        writer.write(conteudo);
       
    };

    function alertaSucesso(evt){
        if (conteudo2 == '') {
            location.reload();
        }
      
    };

    function fail(){
        alert('Erro no processo');


    }
     
},
verificar:function(){
    window.requestFileSystem(LocalFileSystem.PERSISTENT,0, pegarArquivoRead2, fail);
    function pegarArquivoRead2(directoryEntry){
        directoryEntry.root.getFile('status".iot"',{create:true, exclusive:false}, sucessRead2, fail);
    };

    function sucessRead2(fileEntry){
        fileEntry.file(winRead2, fail);
    }

    function winRead2(file){
        var reader = new FileReader();

        reader.onloadend=function(evt){
           
            $('body').append(reader.result);
        };

        reader.onerror= fail;
        reader.readAsText(file);
    }

},


};



function pegarArquivo(directoryEntry){
    directoryEntry.root.getFile('texto".iot"',{create:true, exclusive:false}, sucess, fail);
}

function sucess(fileEntry){
    fileEntry.createWriter(win, fail);
}

function win(writer){
    writer.onwrite= alertaSucesso;
    writer.onerror= fail;

    var conteudo = sd.conteudoNovo+sd.conteudoExistente;

    writer.write(conteudo);
    sd.pegar();

};

function alertaSucesso(evt){
    alert('Conteúdo cadastrado com sucesso');
};

function fail(){
    alert('Erro no processo');


}

 //Pega do arquivo e coloca na textarea


 function pegarArquivoRead(directoryEntry){
    directoryEntry.root.getFile('texto".iot"',{create:true, exclusive:false}, sucessRead, fail);
};

function sucessRead(fileEntry){
    fileEntry.file(winRead, fail);
}

function winRead(file){
    var reader = new FileReader();

    reader.onloadend=function(evt){
        sd.conteudoExistente = reader.result;
        $("#app").html(sd.conteudoExistente);
    };

    reader.onerror= fail;
    reader.readAsText(file);
};