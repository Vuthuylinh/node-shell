process.stdout.write("prompt > ");

// // moved code below to pwd.js
// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();

//   if (cmd === "pwd") {
//     console.log(process.cwd());
//   } else {
//     process.stdout.write("You typed: " + cmd);
//   }
//   process.stdout.write("\nprompt > ");
// });

const pwd = require("./pwd");
pwd();

const ls =require("./ls");
ls();
