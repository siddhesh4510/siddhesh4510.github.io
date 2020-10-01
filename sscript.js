var next=true;
function convertDate(dob)
{	    var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 	    var dates=dob.split("-");
	    var mon=parseInt(dates[1],10)-1;
	    return dob=dates[2]+" "+months[mon]+" "+dates[0];
}
function chang_next()
{
	next=true;

}
function clear_b()
{      //alert("buc");
	for(var i=0;i<6;i++)
		document.getElementById("show"+i).style.visibility = "hidden";

	
 document.getElementById("but").style.visibility = "hidden";
}
function getdata()
{   var dile=false;
    clear_b();
    var retref=firebase.database().ref("policy_no").orderByChild("name").startAt(document.getElementById("name").value.toUpperCase()).endAt(document.getElementById("name").value.toUpperCase()+"\\uf8ff");
    retref.on('value',function(datasnapshot){
        //alert(datasnapshot.val());
        var count=0;
        var score=datasnapshot.val();
        var i=0;
        if(score!=null){
        var keys=Object.keys(score);
        document.getElementById("but").style.visibility = "visible";
        for( i=0;i<keys.length;i++)
        {   next=false;
	    count+=1;
            var k=keys[i];
            var name=score[k].name;
            var dob=score[k].dob;
	    dob=convertDate(dob);
            var dos=score[k].dos;
	    dos=convertDate(dos);
	    var dom=score[k].dom;
	    dom=convertDate(dom);
            var pol_number=score[k].pol_number;
            var mob=score[k].mob;
	    var height=score[k].h;
	    var weight=score[k].w;
          //  alert("name:"+name+"\npolicy number: "+pol_number+"\nmobile: "+mob+"\ndate of birth: "+dob+"\npolicy start: "+dos+"\nPolicy End: "+dom+"\nHeight :"+height+"cm   Weight :"+weight+"kg");
           // alert(i);
	   var answ="name:"+name+"<br>policy number: "+pol_number+"<br>mobile: "+mob+"<br>date of birth: "+dob+"<br>policy start: "+dos+"<br>Policy End: "+dom+"<br>Height :"+height+"cm   Weight :"+weight+"kg";
	document.getElementById("show"+i).innerHTML = "<p>"+answ+"</p>"; 
	document.getElementById("show"+i).style.visibility = "visible";
	//while(!next){}       
        }
    }
        //alert(i);
        if(i==0)
        {

	document.getElementById("show0").innerHTML = "<p>"+"No record found"+"</p>"; 
	document.getElementById("show0").style.visibility = "visible";
 document.getElementById("but").style.visibility = "visible";
            //alert("No record found ");
        }
        
    });
    
    
}