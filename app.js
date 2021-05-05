//Exercitiul 1: Convert degrees from Kelvin to Fahrenheit
console.log("Exercises 1:");

const kelvinToFahrenheit = kelvin => {
  const celsius=kelvin-273;
  const celsiusToFahrenheit=Math.floor(celsius*(9/5)+32);
  return celsiusToFahrenheit;
};

console.log(`The temperature is ${kelvinToFahrenheit(293)} degrees Fahrenheit.`);

//Exercitiul 2: Human age in Dog years.
console.log("Exercises 2:");

const humanAgeInDogYears = myAge => {
  let earlyYears=2;
    earlyYears=earlyYears*10.5;
  let laterYears=myAge-2;
    laterYears=laterYears*4;
  let myAgeInDogYears=earlyYears+laterYears;
  return myAgeInDogYears;
};

console.log(`My age are ${humanAgeInDogYears(32)} years old in dog years.`);

//Exercitiul 3: Magic Eight Ball
console.log("Exercises 3:");

const answerMyQuestion = (userName, userQuestion) => {
  userName ? console.log(`Hello, ${userName}!`)
  : console.log('Hello!');  
  console.log(`${userName} asked: ${userQuestion}?`);

  let randomNumber=Math.floor(Math.random()*8);

  switch (randomNumber) {
    case 0:
      eightBall='It is certain';
      break;
    case 1:
      eightBall='It is decidedly so';
      break;
    case 2:
      eightBall='Reply hazy try again';
      break;
    case 3:
      eightBall='Cannot predict now';
      break; 
    case 4:
      eightBall='Do not count on it';
      break; 
    case 5:
      eightBall='My sources say no';
      break; 
    case 6:
      eightBall='Outlook not so good';
      break; 
    case 7:
      eightBall='Signs point to yes';
      break;
    default :
      break;
  }
  return eightBall;
};

console.log(answerMyQuestion('Marina', 'I can do my homework'));

//Exercitiul 4: Race time.
console.log("Exercises 4:");

const raceTime = (userAge, registeredEarly) => {
  let raceNumber=Math.floor(Math.random()*1000);
  
  if (userAge>=18 &&  registeredEarly) { //Checks whever the runner is an adult and regostered early.
    raceNumber+=1000;               // if it is true, their race numbee+1000
  } 

  if (userAge>=18 && registeredEarly) {
    console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
  } else if (userAge>=18 && !registeredEarly) {
    console.log(`You will race at 11:00 am and your race number is ${raceNumber}`);
  } else if (userAge<18) {
    console.log(`You will race at 12:30 am and your race number is ${raceNumber}`);
  }
};
raceTime(18, true);