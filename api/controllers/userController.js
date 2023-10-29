export const test = (req, res) => {
  try {
    res.json({
      message: "Api route is working!",
    });
  } catch (error) {
    console.log(error);
  }
};
