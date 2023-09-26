var json = [{
    "name" : "swetha",
    "qualification": "M.com(C.A)",
    "age"   : "22",
    "gender" : "female",
    "mail": "swetha2322@gmail.com"
},
{
    "name" : "harini",
    "qualification": "BBA", 
    "age"   : "25",
    "gender" : "female",
    "mail": "harini22@gmail.com" 
}];


//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.qualification);
    console.log(obj.age);
    console.log(obj.gender);
    console.log(obj.mail);

}


//for Each
json.forEach(function(obj) { console.log(obj.qualification); });


//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
}
}


//for Of
let text = "";
for (let x of json[key].mail) {
 text += x; 
}
 console.log(text);
