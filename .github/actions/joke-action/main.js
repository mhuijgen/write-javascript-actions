const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  console.log('mark was here')
  core.setOutput("joke-output", joke);
}

run();