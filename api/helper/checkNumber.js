const { getUserNum } = require("./guessNumber");

let secret = 0;

const randomNumber = () => {
  secret = Math.floor(Math.random() * 11);
  return secret;
};

randomNumber();

const checkNumber = (req, res) => {
  const userNum = getUserNum();
  if (secret == userNum) {
    randomNumber();
    res.status(200).send("Correct Guess");
  } else {
    console.log(userNum);
    console.log(secret);
    res.send("Number is not the same");
  }
};

module.exports = checkNumber;
