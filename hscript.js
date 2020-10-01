$(document).ready(function(){
  $("a").hover(function(){
      var retref=firebase.database().ref("policy_no");
    retref.on('value',function(datasnapshot){
        //alert(datasnapshot.val());
        var count=0;
        var score=datasnapshot.val();
        var i=0;
        
        var keys=Object.keys(score);
        var tot=keys.length;
	document.getElementById("h1").innerHTML = ""+tot;
	document.getElementById("h2").innerHTML = "Registered policies";
        
        
    });
   
  });
});