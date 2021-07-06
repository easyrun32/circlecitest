console.log(process.env.TEST_VALUE);

if (process.env.TEST_VALUE === "TEST_VALUE") {
  console.log("TEST_VALUE");
} else {
  console.log("IF STATE IS NOT TRUE");
}
