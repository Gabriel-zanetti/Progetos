var menu={
	menu:function () {

		$("#menu").html(`<nav class="navbar navbar-dark " style="width:100%; background: red; ">
			 <img src="img/logo.png" style="height:40px; width:40px;" >
			 <a class="nav-link" target="_self" onclick="db.scaner()" > <img src="img/code.png" style="height:40px; width:40px;" ></a></nav>`);
       
	}
};