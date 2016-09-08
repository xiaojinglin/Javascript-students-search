var message='';
var getName='';
function print(message){
  var outputDiv=document.getElementById('output');
  outputDiv.innerHTML=message;
}
function getStudentReport(student){//get the infomation of the student
  var report=' ';
  for(var key in student){  
      report+=key+': '+student[key]+'<br/>';
  }
  return report;
}
do{    //a do...while loop to keep asking people to enter a name, exit the program when enter 'quit'
  
  getName=prompt('Please enter the name of the students:(enter quit to exit!)');
  getName=getName.toLowerCase();
  for(var i=0;i<students.length;i++){     //a for loop to search a name to match
    if(students[i].name.toLowerCase()===getName){    //find the name match
     message= getStudentReport(students[i]);
     print(message);      //print out the student's information
    }
  }
}while(getName!=='quit');

