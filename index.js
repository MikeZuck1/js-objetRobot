// Import stylesheets
// import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const useTheKeyValuePeer = () => {
  let xCome = {
      robot: "XI_OML", 
      name: "X-i-oml",
      age:  4,
      gender: false,
      isRobot: true,
      sayHiToMeAndPresentYourself() {
          return `Hi, my name is ${this.name} and I'm the robot ${this.robot}. I was created ${this.age} years ago.` + " " + `I've a gendre ? => ${this.gender}.`;
      }
  }
  console.log(xCome.sayHiToMeAndPresentYourself());
}
useTheKeyValuePeer(); 