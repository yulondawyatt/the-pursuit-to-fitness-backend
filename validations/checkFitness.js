const checkName = (req, res, next) => {
    if (req.body.workout_name) {
      return next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  
  const checkDays = (req, res, next) => {
      if (req.body.workout_days) {
        return next();
      } else {
        res.status(400).json({ error: "Days is required" });
      }
    };
  
    module.exports = { checkName, checkDays };