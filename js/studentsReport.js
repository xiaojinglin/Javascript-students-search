var message='';
  for( var i=0; i<students.length; i++ ){
    for(var key in students[i]){
      message=message+ '<br/>'+key+': '+students[i][key];
    }
    message+='<br/>';
  }

function print(message){
  var outputDiv=document.getElementById('output');
  outputDiv.innerHTML=message;
}

//print(message);
