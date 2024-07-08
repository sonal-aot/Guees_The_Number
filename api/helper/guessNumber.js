let userNum = 0;

const guessNumber = (req, res) => {
  const { num } = req.body;
  userNum = num;
  res.json("Number Got Successfully");
};

const getUserNum = () => userNum;

module.exports = {
  guessNumber,
  getUserNum,
};
