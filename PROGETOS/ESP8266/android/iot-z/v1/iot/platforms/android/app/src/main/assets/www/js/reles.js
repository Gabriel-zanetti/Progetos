var rele ={
rele: function (status,n) {

    if (status == true) {
      $("#rele"+n).html( ` 
          
            <button class="btn  my-2 my-sm-0" onclick="rele.img(`+n+`),firebase.database().ref('rele`+n+`').set(false),firebase.database().ref('banco').set(true);" type="button"> <span ><img src="img/l1.png" style="height:60px; width:50px;" ></span></button>
           
            `);
      

    }else{
      $("#rele"+n).html( ` 
          
            <button class="btn  my-2 my-sm-0" onclick="rele.img(`+n+`),firebase.database().ref('rele`+n+`').set(true),firebase.database().ref('banco').set(true);" type="button"> <span ><img src="img/l0.png" style="height:60px; width:50px;" ></span></button>
           
            `);

    }
  },

  img:function(n){
    $("#rele"+n).html( ` 
          
            <img src="img/carregar.gif" style="height:80px; width:80px;" >
           
            `);

  },

};