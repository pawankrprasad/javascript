
var obj1 = {id:1,name:"Pawan",age:28};

var obj2 = {id:1,name:"Pawan",age:28};


console.log(isEqual(obj1,obj2));


function isEqual(obj1,obj2){
  
  var props1 = Object.getOwnPropertyNames(obj1), 
      props2 =Object.getOwnPropertyNames(obj2); 
        if(props1.length!=props2.length){
          return false;
        }
  for(var i=0;i<props1.length;i++){
    var prop = props1[i];
    if(obj1[prop]!=obj2[prop]){
      return false;
    }
  }
  return true;
}

