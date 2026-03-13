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
//q2

const users = [
 { name: "ali", role:"student" },
 { name: "sara", role: "student" },
 { name: "mona", role: "teacher " }
];
let result=users.map(users=>users.name+" - "+users.role);
console.log(result);
//q3
const products=[
  {name: "mouse",id:1},
  {name:"speakers ",id:2},
  {name:"keyboard",id:3}
];
let find=false;;
for(let i=0;i<products.length;i++){
    if(products[i].id===3){
        console.log("item found!");
        console.log(products[i]);
        find=true;
        break;
    }
}
if(!find){
    console.log("not found !")
}
//q4
const person = { name: "ahmed", age: 21};

const { name, age } = person;
console.log(name, age);
//q5
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merged = [...arr1, ...arr2];
console.log(merged);
//q6
const people1={name: "ali",age:18,grade:80};
const update={...people1,grade:85};
console.log(update);
//q7
const ar1=[1,2,3,4,5];
const d=ar1.map(n=>n*2);
console.log(d);
//q8
const arrayofnumbers=[1,2,3,4,5,6,7,8,9,10];
const evenarray=arrayofnumbers.filter(n=>n%2==0);
console.log(evenarray);
//q9
const employees = [
  { name: "Nour", department: "HR" },
  { name: "Youssef", department: "IT" }
];

const itemployee = employees.find(emp => emp.department === "IT");
console.log(itemployee);
//q10

