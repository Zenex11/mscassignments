//q1 
const students = [
 { name: "ali", grade: 75 },
 { name: "sara", grade: 92 },
 { name: "mona", grade: 88 }
];
let highgrade=[];
for(let i=0;i<students.length;i++){
    if(students[i].grade>80){
        highgrade.push(students[i]);
    }
    
}
for(let j=0;j<highgrade.length;j++){
    console.log(highgrade[j]);
    
    
}

