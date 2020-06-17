/* CHAPTERS 21-25 */
/* Q1 */
var first = window.prompt("first name")
var last = window.prompt("last name")
var fullName = (first+' ' +last)
document.write("hello my dear ",fullName)

/* Q2 */
var inp = window.prompt('mobile model')
document.write("My favourite phone is : ",inp)
document.write("Length of string: ",inp.length)

/* Q3 */
var str = 'Pakistani'
document.write("String: ",str)
document.write("<br>Index of 'n': ",str.indexOf('n'))

/* Q4 */
var str = 'Hello World'
document.write("Str: ",str)
document.write("<br>Last index of 'l': ",str.lastIndexOf('l'))

/* Q5 */
var str = 'Pakistani'
document.write("String: ",str)
document.write("<br>Character at index 3:",str.charAt(3))

/* Q6 */
var first = window.prompt("first name")
var last = window.prompt("last name")
var fullName = first.concat(last)
document.write("hello my dear ",fullName)

/* Q7 */
var city = 'Hyderabad'
document.write("City :",city)
city.replace('Hyder','Islam')
document.write("<br>After replacement: ",city.replace('Hyder','Islam'))

/* Q8 */
var message = ('Ali and Sami are best friends. They play cricket and football together.')
var n = message.replace(/and/g,"&");
document.write("After replacement : ",n)

/* Q9 */
var v1 = '472'
document.write("Value: ",v1)
document.write("<br>Type: ",typeof(v1))
var v11 = parseInt(v1)
document.write("<br>Value: ",v11)
document.write("<br>Type: ",typeof(v11))

/* Q10 */
var inpu = window.prompt("input :")
document.write("User input : ",inpu)
var inpu1 = inpu.toUpperCase()
document.write("<br>Upper case : ",inpu1)

/* Q11 */
var inpu = window.prompt("input :")
document.write("User input : ",inpu)
var inpu1 = inpu.replace(/\b[a-z]/g, (x) => x.toUpperCase())
document.write("<br>Title case : ",inpu1)

/* Q12 */
var num = 35.36
document.write("Number : ",num)
document.write("<br>Result : ",num.toFixed())

/* Q14 */
var A = ['cake','apple pie','cookie','chips','patties']
var search = window.prompt("what do you want to order ?")
var x = hey(search)
function hey(cheez){
A = ['cake', 'applepie', 'cookie', 'chips', 'patties']
//search = window.prompt("what do you want to order ?")
for (i=0;i<A.length;i++){
    if (A[i]===cheez){
        return (A[i]+' is available at index '+i+' in our bakery');
    }
}return ('We are sorry . '+cheez+' is not available in our bakery');

}
document.write(x)

/* Q16 */
var university = "University of Karachi"
var ku = university.split('\n')
for(i=0;i<ku.length;i++)
    {document.write(ku[i])}

/* Q17 */
var user = window.prompt('give')
document.write("User input : ",user)
document.write("<br>Last character of input: ",user.slice(-1))

/* Q18 */
var text = 'the quick brown fox jumps over the lazy dog'
document.write("Text: ",text)
var occ = (text.match(/the/g) || []).length
document.write("<br>There are " + occ + " occurence(s) of word 'the'")

/* CHAPTERS 26-30 */
/* Q1 */
var int = window.prompt('Number: ')
var intt = parseInt(int)
document.write("Number: ",int)
document.write("<br>Round off value: ",Math.round(int))
document.write("<br>Floor value: ",Math.floor(int))
document.write("<br>Ceil value: ",Math.ceil(int))

/* Q2 */
var int = window.prompt('Number: ')
var intt = parseInt(int)
document.write("Number: ",int)
document.write("<br>Round off value: ",Math.round(int))
document.write("<br>Floor value: ",Math.floor(int))
document.write("<br>Ceil value: ",Math.ceil(int))

/* Q3 */
var abs = -4
document.write("The absolute value of "+abs+" is " + Math.abs(abs))

/* Q4 */
var ran = Math.round((Math.random()* 10) + 1)
var ran2 = Math.round((Math.random()* 10) + 1)
document.write("random dice value: ",ran)
document.write("<br>random dice value: ",ran2)

/* Q5 */
var items = ['Heads', 'Tails']
var item = items[Math.floor(Math.random() * items.length)];
var items2 = ['Heads', 'Tails']
var item2 = items2[Math.floor(Math.random() * items.length)];
var ran = Math.round((Math.random()* 10) + 1)
var ran2 = Math.round((Math.random()* 10) + 1)
document.write(ran)
document.write("<br>random coin value: ",item)
document.write("<br>",ran2)
document.write("<br>random coin value: ",item2)

/* Q6 */
var ran = Math.round((Math.random()* 100) + 1)
document.write("The random number between 1 and 100 is: ",ran)

/* Q7 */
var weight = window.prompt("Enter your weigh in kilograms")
document.write("The weight of user is "+weight + " kilograms")

/* Q8 */
var ran = Math.round((Math.random()* 10) + 1)
var ask = window.prompt("Enter a number between 1 and 10")
var askk = parseInt(ask)
if (askk===ran){
    alert("congratulations you guessed it right!")
}else{
    alert("Try again..")
}

/* CHAPTERS 31-34 */
/* Q1 */
var date = new Date()
document.write(date)

/* Q2 */
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = weekday[new Date().getDay()]
document.write("Current month: ",month)

/* Q3 */
var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var month = weekday[new Date().getDay()]
window.alert("Current month: "+month)

/* Q4 */
var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var month = weekday[new Date().getDay()]
if (month===6 || month===0){
    document.write("Current month: "+month)
}else{
    document.write("It is not a fun day")
}

/* Q5 */
var gtc = new Date().getUTCDate()
if (gtc < 16){
    document.write("First fifteen days of the month")
}else if(gtc > 15){
    document.write("Last days of the month")
}

/* Q6 */
var date = new Date()
document.write("Currend date: ",date)
var gt = new Date().getTime()
document.write("<br>Elapsed minutes since january 1,1970: ",gt)
var gtt = new Date().now()
document.write("<br>Elapsed milliseconds since january 1,1970: ",gtt)

/* Q7 */
var hr = new Date().getHours()
if (hr>12){
    alert("It's Pm")
}else{
    alert("It's Am")
}

/* Q8 */
var dat = new Date()
dat.setFullYear(2020,11,31)
dat.setHours(00,00,00)
document.write(dat)

/* Q9 */
var dateFirst = new Date("6/18/2015");
var dateSecond = new Date("6/17/2020");
var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
document.write(diffDays+" days have been passed since 1st Ramadan,2015")

/* Q10 */
var dateFirst = new Date("1/01/2015");
var dateSecond = new Date("11/05/2015");
var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
var diffDays = Math.ceil(timeDiff / ( 3600 * 24))
document.write(diffDays+"seconds have been passed since 1st Ramadan,2015")

/* Q11 */
var date = new Date()
var date2 = new Date()
date.setHours(17)
document.write("current date: ",date)
document.write("<br>1 hour ago,it was ", date2)

/* Q12 */
var date = new Date()
document.write("current date: ",date)
date.setFullYear(1920,06,17)
document.write("<br>100 years back,it was ", date)

/* Q13 */
var age = window.prompt("Age :")
var iage = parseInt(age)
document.write("Your age is ",age)
document.write("<br>Your birth year is ",(2020-age))

/* Q14 */

document.write("<H1> K-Electric Bill </H2>")
document.write("<br><br><br>Customer Name: <b>Sarim ali khan</b>")
document.write("<br>Month:<b> February</b>")
var nu = 410
var pnu = 16
var lnu = 350
document.write("<br>Number of units: ","<b>"+nu+"</b>")
document.write("<br>Charges per unit: ","<b>"+pnu+"</b>")
document.write("<br><br>Net Amount Payable (within Due Date): ","<b>"+nu*pnu+"</b>")
document.write("<br>Late payment surcharge: ","<b>"+lnu+"</b>")
document.write("<br>Gross Amount Payable (after Due Date): ","<b>"+((nu*pnu)+lnu)+"</b>")

/* CHAPTERS 35-38 */
/* Q1 */
function date(){
    document.write(new Date())
}
date()

/* Q2 */
function greet(firstName,lastName){
    document.write("Welcome to the website ",firstName+" "+lastName)
}
greet('Sarim','Ali Khan')

/* Q3 */
function sum(n1,n2){
    return(n1+n2);
}

document.write(sum(45,80))

/* Q4 */
function calculator(n1,n2,operator){
    if (operator==='+'){
        return (n1+n2)
    }else if (operator==='-'){
        return (n1-n2)
    }else if (operator==='*'){
        return (n1*n2)
    }else if (operator==='/'){
        return (n1/n2)
    }
}
document.write(calculator(4,7,'*'))

/* Q5 */
function sqr(n){
    return (n**2)
}
document.write(sqr(6))

/* Q6 */
function fact(n){
    ans = 1
    for(i=n;i>=1;i--){
        ans = ans*i
    }
    return ans
}
document.write(fact(5))

/* Q7 */
function count(s,e){
    for(i=s;i<=e;i++){
        document.write(i)
    }
}
count(5,10)

/* Q8 */
function calculateHypotenuse(base,perp){
    return calculateSquare()
    function calculateSquare(){
        hyp = (base**2)+(perp**2)
        return hyp
    }
}
document.write(calculateHypotenuse(4,6))

/* Q9 */
function calc(w,h){
    var a = w * h
    return a
}   
document.write(calc(2,4))
document.write(calc(x,y))

/* Q10 */
function check(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }
document.write(check('madam'))

/* Q11 */
function upper(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(upper('the quick brown fox'))

/* Q12 */
function longest(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(longest( 'Web Development Tutorial'))

/* Q13 */
function counting(str,word){
    var arr1 = str.split('')
    count = 0
    for(x=0;x<arr1.length;x++){
        if(arr1[x]===word){
            count += 1
        }
    }return count
    
}
document.write(counting( 'JSResourceS.com', 'o'))

/* Q14 */
function calcCircumference(radius){
    cir = 2*3.142*radius
    document.write("The circumference is ",cir)
}

function calcArea(radius){
    area = 3.142*(radius**2)
    document.write("<br>The area is ",area)
}

calcCircumference(4)
calcArea(4)
