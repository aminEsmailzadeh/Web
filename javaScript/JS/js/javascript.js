
const btnCounter= document.getElementById('btnCcounter');
const header= document.querySelector('h1');
let counter = 0;

btnCounter.addEventListener('click',()=>{
    counter++;
    header.innerHTML = counter;
    if(counter%10===0)
    alert(`Counter is now ${counter}`);
});

//******************************************************************************************************************** */
// class task{

//     constructor(name,user)
//     {
//         this.name= name;
//         this.user= user;
//     }


// setUsename(name)
// {
//     this.name = name;
// }

// getUserName()
// {
//     return this.name;
// }
// }
// let T= new task('samuel','111');
// console.dir(T);


//******************************************************************************************************************************** */
// function log(startegy){
// startegy.handel();
// }
// log(new class
//     {
//         handel(){
// alert("MY LOG");
//     }
// });
//*********************************************************************************************** */
// console.log("before");
// let button = document.querySelector('button');
//  button.onclick = function(){
//     alert("Clicked...");
// }

// console.log("after");
//***************************************************************************************** */

/********************************************************************************************************/


// class User{

//     constructor(name,isAdmin)  {
//       this.name = name;
//       this.isAdmin = isAdmin;
//     }
//   }
  
//   let users=[
//       new User('samuel',true),
//       new User('samantha',false)
//     ];
  

//     console.log(
//     users.find(user => user.isAdmin).name
    
//   );

  
//   // console.dir(users);
  
// //   console.log(
// //     users.find( function (user){
// //              return  user.isAdmin;
// //     })
// //   );
// /********************************************************************************************************/


const person={};
person['name'] ='maria';
person['id']='123';

console.log('person init',person);

const arrayT = [];
arrayT.push('maria from array');
console.log('array',arrayT[0]);

// Array
// let collection=['samuel',5,1,2,'samantha','anna'];
// let collection2=[1,2,3,4,5,6];

// collection = collection.concat(collection2);


// collection.map(item => typeof item === 'number' ? item*2 : item); 


// let ittr = collection.entries();
// ittr.next();
// console.info(collection);


// // for(let name in items)
// // {
// //     console.log(name);
// // }


// // for(let name of collection)
// // {
// //     console.log(name);
// // }

// collection.forEach(n => console.log(n));


const array=[1,10,13,30,18,4];
const threshhold= (arr) => arr<40;
array.every(threshhold);
console.log(array);



let found=array.find(el=>el>10);
let foundFiltter2 = array.filter((arr)=>arr > 5);

const words= ['samuel','anna','samantha'];
let result =words.filter((wrd)=>wrd.length > 5);

console.log(result);



let elements=['david','kay','gaby'];


console.log(elements.join(' '));

const keysList=elements.keys();

const ValuesList=elements.values();

for(const values of ValuesList){
    console.log(values);
}

const concatArray = [...elements,...words];
console.log('concatArray',concatArray);

const nA ='marian';
const nameArray = [...nA];
nameArray.forEach((letter)=>
{
    console.log('marian letter ',letter);
})





const NumArray=[1,2,3,4,5,6,7,8,9];
const NumArray2=[1,3,5,7,9];
const reducer= (accumulator,currentValue) => accumulator+currentValue;
console.log(NumArray.reduce(reducer));
console.log(NumArray.reduce(reducer,10));

const even= (element)=> element%2 === 0;
console.log(NumArray.some(even));

console.log(NumArray2.some(even));


const SortArray=[1,92,63,454,25,64,67,18,39];
SortArray.sort(function(a,b)
{
return a-b;
});
console.log(SortArray);
SortArray.sort(function(a,b)
{
return b-a;
});
console.log(SortArray);







const Array3=[1,2,3,4,5];


Array3.forEach(function(item,index)
{
return console.log(item*2,`index : ${index}`);
});

Array3.forEach((item,index) => {return console.log(item*5,`index : ${index}`);});

Array3.map((item,index)=> {
    return console.log(item*2);
});


for(var i=0;i<Array3.length;i++)
{
     console.log(Array3[i]*3);
}

for(const item of Array3)
{
     console.log(item*4);
}


for(const [index,item] of Array3.entries())
{
     console.log(item*4,index);
}

let reduce = [1,2,3,4,5,6,7,8,9,10].reduce((accumulator,current)=>
{
return accumulator+current;
});

console.log('reducer on array',reduce);



const button = document.getElementById('btnClick');

button.addEventListener('click',()=>{

      const clicked = 'Clicked';
      const clickOnMe = 'Click Me';
      let buttonText = undefined;
      
     if(button.innerText.includes(clicked) )
     { 
        buttonText = clickOnMe ;
     }
     else{
        buttonText = clicked;
      } 

      button.innerText=buttonText ;
      alert(buttonText);
     
});
//********************** Promise ****************************************************** */


var t = new Promise(function(resolve,reject){
    console.log('start promise');
   

    resolve('enter to Resolve promise'); 

    reject('rejected by ME');
  

    setTimeout(function(){
        console.log('-------------------------------------');
        console.log('Done Promise Method');
    },2000);
    
});

t.then(function(data){
    console.log('-----------------------------------');
    console.log(data);
});

t.catch(function(err)
{
    console.log(err);
}
);
//**********************************Call Back*********************************************************************************** */


let callBack = (n)=>
{
    return n*2;
}

let map = [1,2,3,4,5,6].map(callBack);

console.log('map * 2 = ', map);





let callbackExample =  (name , callbackFunc)=>
{
console.log(callbackFunc(name));
}

let callBackF = (name)=>
{
    return 'welcome '+name;
}

callbackExample('jacoob',callBackF);
//***************************************************************************************************** */
// const obj= {one:1,two:2,three:3,four:4,five:5};
// const Obj2Array = Object.entries(obj);

// const Obj2ArrayValues = Object.values(obj);
// const Obj2ArrayKeys = Object.keys(obj);
// console.log(Obj2Array);

// for(const [index,item] of Obj2Array)
// {
//      console.log(item*4,index);
// }

// for(const item of Obj2ArrayValues)
// {
//     console.log(item*6);
// }


// for(const key of Obj2ArrayKeys)
// {
//     console.log(key);
// }


// for(const property in obj)
// {
//     console.log(`${property} : ${obj[property]}`);

//     // console.log(`${obj[property]}`);
// }

//*************************************************Genrators ****************************************************** */
// function* numbers()
// {
//     console.log('Begin');

//     yield 1;
//     yield 2;
//     yield 3;


// }
// let ittr = numbers();
// // itt.forEach(element => console.log(element.next().value));



// console.log(ittr.next().value);
// console.log(ittr.next().value);
// console.log(ittr.next().value);

//******************************************************************************************************* */
// function* range(start,end)
// {
//     while(start<=end)
//     {
//     yield start;
//     start ++;
//     }
// }
// console.log([...range(1,5)]);
//
//******************************************************************************************************* */
// let items = new Set(['one','two','three']);
// // console.log(items);
// // items.add('four');
// // console.log(items);
// // items.delete('two');
// // console.log(items);
// // items.has('two');
// items.forEach(item => console.log(item));
// // console.log(items.size());
//******************************************************************************************************* */
// let tags = ['js','php','rubys'];
// let set= new Set(tags);

// console.log(
// [...set].filter(tag=> tag.length===3));

//*****************************************Export and import ************************************************************** */
import task,{itemsA,personAssets as pAssets } from "./javascriptTest.js"
console.log('exported list',itemsA);
let T= new task('Alex','111');
console.dir('exported class',T);

pAssets.toString();

//******************************************************************************************************* */

//ojects  => class in ecmascript6



// const newobject ={
//     name: 'samuel',
//       username:'samuelUser',
//         password:'1234',
//           getPass: function () {return 'name';}
    
//   }
//   newobject.name ='samuel';
//   console.log(newobject.getPass());
//   console.log(newobject.name);



// class task{

//     constructor(name,user)
//     {
//         this.name= name;
//         this.user= user;
//     }
// getName()
// {
//     return this.name;
// }
// setName(newname)
// {
//      this.name = newname;
// }

// static task::register()
// {
//     return new task;
// }

// }
// let T= new task('samuel','111');
// console.dir(T);
  
//******************************************************************************************************* */

//method 

// (function(name){
//     console.info('hard work '+ name);
//     })('samuel');
    
    
//     let warnigMsg = function(name='samuel')
//     {
//       console.warn('hard work ' +name);
//     }
    
//     warnigMsg('samuel');
    
    
    
//     let errMsg = (name) =>  console.error('hard work '+name);
//     errMsg('samuel');



//******************************************************************************************************* */
let power =[1,2,3,4,5].map((numer,index) =>
{
return Math.pow(numer,index);
});

power.forEach((item,index) => { console.log(item);});

//************************************Spread******************************************************************* */


const addnumber= (n1,n2,n3) =>
{
    return n1+n2+n3;
}
console.log('speard add ',addnumber(...[1,2,3]));

const speardAddnumber= (...n) =>
{
    let retVal = 0;
    for (const val of n) {
        retVal+=val;
    }
    return  retVal;
}
console.log('speardAddnumber ',speardAddnumber(...[1,2,3,8]));

const mileToKm= (mile) => mile*1.60934;

console.log('5 Mile to KM',mileToKm(5));

//*************************************Enhance Object property****************************************************************** */
const propName ="PRICE";

const calculator= (name,price) =>
{
return {
    name:name,

toString()
{
    return {name:name}
},
    [propName.toLowerCase()] : price
}
}
const cal=calculator('Casio',22.8);
console.info('Object property  ',cal.name,cal.price);



//*****************************************************Array Descurturing******************************************************************************************* */

const nameArr = ['Anna','Mariam','Joe','Matt','Mark'];
const [anna, ,Joe,...RestOfnames] =nameArr;

console.log(`${anna},${Joe}`,RestOfnames);
console.log('RestOfnames lenght ',RestOfnames.length);



//***********************************************************************Object Descurturing******************************************************************************************* */
const getUsers= () =>
{
return {
    name:'joe',
    address:{
        country:'UK',
        fullAddress:
        {
            HomeNumer: 2,
            street:'LA ST'
        }
        
    },
    age:22
}
}

const user = getUsers();


// const name = user.name;
// const country= user.address.country;
// const age = user.age;
// const street = user.address.fullAddress.street;
// console.info('Object Descurturing  ',name,country,age,street);

const {name:theName,age:theAge,address:{country:theCountry}}=user;
const {address:{fullAddress:{street:street}}}=user;
console.info('Object Descurturing  ',theName,theCountry,theAge,street);
//*****************************************************iteration and destructuring*********************************************************************** */

const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (const {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }
  

//********************************************************** Resize *****************************************************************************************

(function(){
	var showSize = document.createElement('div');
    const sizeBox =document.getElementById('sizeBox');
	showSize.setAttribute('style', 'display: none;width: 130px;line-height: 25px; height: 25px; background-color: rgba(240,240,240,.8); text-align: center; position:fixed; top: 0; right: 0; color: #454545');
	document.body.appendChild(showSize);

	var timeout;
	window.addEventListener('resize', function(e){
		var width = document.documentElement.offsetWidth,
			height = window.innerHeight;
			
            sizeBox.innerHTML = 'witdh: '+width+' px    '+ '     height:  ' +height +'  px';
            
		showSize.textContent = width+'px x '+ height +'px';
		showSize.style.display = 'block';
		if(timeout !== undefined)
        {
            clearTimeout(timeout);
        }

		timeout = setTimeout(function(){
			showSize.style.display = 'none';
		}, 2000);
	});
})();

//******************************************************************Class and inheritance**********************************************************************
class Animal{
    constructor(name,age)
    {
        console.log(`${name} is animal and was created`);
        this.name =name;
        this.age = age;
    }

    static whatIsCallsName()
    {
        console.log('this class name is Animal by static Method');
    }
    eat()
    {
        console.log(`${this.name} is eating`);
    }
    sleep()
    {
            console.log(`${this.name} is sleeping`);   
    }
    wakeUp()
    {       
            console.log(`${this.name} is wakeing up`);
    }
    Name()
    {
        return this.name;
    }
}
console.log('---------------------------------------');
Animal.whatIsCallsName();
console.log('---------------------------------------');
const matt = new Animal('matt',2);
matt.eat();
matt.sleep();
matt.wakeUp();
console.log('---------------------------------------');
class dog extends Animal
{
    constructor(name,age,breed)
    {
        super(name,age);
        this.breed = breed;
    }
    getBreed()
    {
        console.log(`breed : ${this.breed}`);
    }
    getName()
    {
        console.log(`name : ${super.Name()}`);
    }
}

let maya =new dog('maya',4,'hasski');
maya.getBreed();
maya.getName();
maya.eat();
maya.sleep();
maya.wakeUp();
maya.sleep();
//**********************************************************Promise********************************************************************************

// const pr = new Promise((resolve,reject)=>{

// setTimeout(() => {
//     console.log(`%c Promise resolve`, 'background: green; color: white; display: block;');
//     resolve('enter to resolve state');
// }, 2000);

// setTimeout(() => {
//     console.log(`%c Promise reject`, 'background: red; color: white; display: block;');
//     reject('enter to reject state');
// }, 5000);


// });


// pr.then(Response=>{
//     console.log(Response);
// }).catch(error=>{
// console.log(error);
// });

//*********************************************Promise All***********************************************************************************
// const namePromise = new Promise(function(resolve,reject)
// {

//      resolve(['anna','joe','maya','mike']);
   
    
//     setTimeout(() => {
//         console.log(`%c Promise reject`, 'background: red; color: white; display: block;');
//         reject('No Data Back');
//     }, 5000);
    
    
//     });
    
//     const surnamePromise = new Promise(function(resolve,reject)
// {

    
//      resolve(['williams','bravo','janson','hafkin']);
    
    
//     setTimeout(() => {
//         console.log(`%c Promise reject`, 'background: red; color: white; display: block;');
//         reject('No Data Back');
//     }, 5000);
    
    
//     });
    
//     Promise.all([namePromise,surnamePromise]).then(data=>
//     {
//         const [names,surnames] = data;
//         for (let index = 0; index < names.length; index++) {
//             const name = names[index];
//             const surname = surnames[index];
//             console.log(`${name} ${surname}`);
//         }
   
//     }).catch(error=>{
//         console.log(error);
//     });
    //****************************************************************** promise ***************************************************************** */

    // const getRandomusers= n=>{
    //     const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    //     fetchRandomUsers.then(data=>{
    //         data.json().then(randomUsers => {
    //                 console.log(JSON.stringify(randomUsers));
    //                 randomUsers.results.forEach( user=>
    //                     {
    //                         console.log(`${user.name.first} ${user.name.last}`)
    //                     });
    //         });
    //     });
    // }

    // getRandomusers(100);

    //******************************************************* CoRoutins   GENRATORS  promise*********************************************************************
// import {coroutin as co} from 'bluebird';
// const getRandomusers = co (function* (n){
//     const fetchRandomUsers =  yield fetch(`https://randomuser.me/api/?results=${n}`);
//     const data  = yield fetchRandomUsers.json;
//     return data;
// });

// getRandomusers(10).then(randomUsers=>
//     {
//         randomUsers.results.forEach( user=>{
//             const {name:theName,age:theAge,address:{country:theCountry}}=user;
//             const {address:{fullAddress:{street:street}}}=user;
//             console.info('Object Descurturing  ',theName,theCountry,theAge,street);
//         });
        
    // });
//***********************************************ASYNc AWait ***********************************************************************/

const getRandomusers = async (n)=>{
    try{
    const fetchRandomUsers =  await fetch(`https://randomuser.me/api/?results=${n}`);
    const data  = await fetchRandomUsers.json();
    data.results.forEach( user=>{
        const {name:{first:thefirstName,last:thelasttName},location:{city:theCity},email:theemail,picture:{large:thePic}}=user;
        console.info('Async await  ',thefirstName,thelasttName,theCity,theemail,thePic);
    });
    return data;
}
catch(error)
{
    console.error(error);
}
};

getRandomusers(100);
   
//******************************************************* GENRATORS **************************************************************************** */
const getNumbers = function* (numbers){
    for (let index = 0; index < numbers.length; index++) {
        yield numbers[index];
        
    }
}

const Numbers = getNumbers([1,2,3,4,5]);
const interval = setInterval(() => {
    const next = Numbers.next();
    if(next.done)
    {
        console.log('this generator is done');
        clearInterval(interval);
    }else
    {
        const number= next.value;
        console.log(number);
    }

}, 1000);

