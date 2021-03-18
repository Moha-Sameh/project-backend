const express = require("express");
const router = express.Router();
const { publicData, fetchCollege } = require("../controller/data");

// router using param
router.param("id", async (req, res, next, id) => {
  const college = await fetchCollege(id, next);
  if (college) {
    req.college = college;
    next();
  } else {
    const err = new Error("College ID must be wrong please try again");
    err.status = 404;
    next(err);
  }
});

router.get("/", publicData);

module.exports = router;
