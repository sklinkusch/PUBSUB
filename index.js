class EventGeneric {
  constructor() {
    this._events = {
      UserSignup: [
        function() {
          console.log("User has signed up");
        },
        function() {
          console.log("Another clg");
        }
      ]
    };
  }

  emit(eventName) {
    const myEventFunctions = this._events[eventName];
    myEventFunctions.forEach(function(eventFn) {
      return eventFn();
    });
  }

  on(eventName, fn) {
    this._events[eventName] = this._events[eventName] || [];
    this._events[eventName].push(fn);
  }
}

const MyEvents = new EventGeneric();

MyEvents.on("UserSignup", () => console.log("On works"));
MyEvents.on("UserSignup", function() {
  document.querySelector("body").style.backgroundColor = "hotpink";
});

MyEvents.emit("UserSignup");

// const myLogs = [() => console.log("Hello"), () => console.log("good bye")]
// myLogs.forEach(fn => fn())

const bttn = document.querySelector("#myBttn");
bttn.addEventListener("click", function() {
  console.log(this);
});

const feld = document.querySelector("#textfeld");
feld.addEventListener("input", function() {
  console.log(`Current input in ${this}: ${this.value}`);
});

bttn.addEventListener("click", () => {
  console.log("Arrow: ", this);
});

const btn = document.querySelector("#Btn");
btn.addEventListener("click", () => {
  const col = document.querySelector("body").style.backgroundColor;
  if (col == "green") {
    document.querySelector("body").style.backgroundColor = "hotpink";
  } else {
    document.querySelector("body").style.backgroundColor = "green";
  }
});

console.log(this);
