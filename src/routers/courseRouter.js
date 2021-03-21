const express = require("express");
const router = express.Router();
const {
  publicData,
  fetchcourse,
  createData,
  deleteData,
  updateData,
} = require("../controller/course");

// router using param
router.param("id", async (req, res, next, id) => {
  const course = await fetchcourse(id, next);
  if (course) {
    req.course = course;
    next();
  } else {
    const err = new Error("Course ID must be wrong please try again");
    err.status = 404;
    next(err);
  }
});

router.get("/", publicData);
router.post("/", createData);
router.delete("/:id", deleteData);
router.put("/:id", updateData);

module.exports = router;
