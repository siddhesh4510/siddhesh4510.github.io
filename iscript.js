function valiform()
{
  var x=document.getElementById("name").value;
  if(x=="")
   { return false;}
  var p=document.getElementById("pono").value;
  if(p=="")
    {return false;}
  var m=document.getElementById("pho").value;
  if(m=="")
    {return false;}
  var b=document.getElementById("dob").value;
  if(b=="")
    {return false;}
  var s=document.getElementById("dos").value;
  if(s=="")
    {return false;}
  var e=document.getElementById("dom").value;
  if(e=="")
  {
    return false;
  }
  var h=document.getElementById("h").value;
  var w=document.getElementById("w").value;
  if(h=="")
  {
    return false;
  }
  if(w=="")
  {
    return false;
  }
  return true;
}
function ente()
{var bo=valiform();
 // alert(valiform());
  if(!bo)
   { alert("Enter all feilds");}
   else{
  var playersRef = firebase.database().ref("policy_no");
  var name=document.getElementById("name").value;
  playersRef.once('value', function(snapshot) {
  if (snapshot.hasChild(document.getElementById("pono").value)) {
    alert('exists');
  
  }
  else{
    playersRef.child(document.getElementById("pono").value).set({
      name: document.getElementById("name").value.toUpperCase(),
      pol_number:document.getElementById("pono").value,
      mob:document.getElementById("pho").value,
      dob:document.getElementById("dob").value,
      dos:document.getElementById("dos").value,
      dom:document.getElementById("dom").value,
      h:document.getElementById("h").value,
      w:document.getElementById("w").value
   }).then(function() {
    console.log("Document successfully written!");
    alert("Document written successfully");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });;
  
  }
});

   }
}
