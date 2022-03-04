/*this is js comment*/
//this is a line comment
//console.log("Hello world");
//console.warn("This is a warning message");
//console.error("Error connecting to server");
//alert("Hello world");
//prompt("Enter something");

//var x; //variable declaration
//x=2;  //assignation of value

//let/var/const variableName = value;
// student=prompt("Enter your name");
//console.log(student);

//let age=99;
//console.log(age);
//age="Samantha";
//console.log("May name is " + age + " and I have " + x + "dogs");

//let jobTitle="Founder";
//let geoLocation="San Diego";
//let partnerName="no one";
//let numberChildren=0;
//console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberChildren + " kids.")

//let jobTitle="Founder";
//let geoLocation="San Diego";
//let partnerName="no one";
//let numberChildren=0;
//console.log(`You will be a  ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChildren} kids.`)

//console.log(`The result is= ${100/3}`);

let name="Joey";
let email="joey@abovethestigma.org";
let password="Coffee101";
let age=29;
let country="United States";
let salary=7500
let totalSalary=salary*12;
let taxes = totalSalary*0.11;
/*
console.log(`My name is ${name} and my email is ${email} and I make ${salary*12} a year`);
*/
let template=`
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Salary:</b> ${totalSalary}</p>
    <p><b>Taxes:</b> ${taxes}</p>
`;
console.log(template);
document.write(template);
