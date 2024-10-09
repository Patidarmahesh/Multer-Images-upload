const upload = require("../middleware/index.js");
const userModel = require("../modal/user.js");

const getAllStudent = async (req, res) => {
  try {
    const response = await userModel.aggregate([
      { $match: {} },
      { $project: { __v: 0 } },
    ]);
    if (response) {
      res.send({
        data: response,
        error: false,
        success: true,
        status: 200,
        message: "data is sended",
      });
    } else {
      return res.send({
        data: response,
        error: true,
        success: false,
        status: 400,
      });
    }
  } catch (e) {
    return res.send({
      data: [],
      error: true,
      success: false,
      status: 400,
      message: e.message,
    });
  }
};

const getAllStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await userModel.find({ _id: id }, { __v: 0, _id: 0 });
    if (response) {
      res.send({
        data: response,
        error: false,
        success: true,
        status: 200,
        message: "1 student is get",
      });
    } else {
      res.send({
        data: response,
        error: true,
        success: false,
        status: 400,
      });
    }
  } catch (e) {
    res.send({
      data: [],
      error: true,
      success: false,
      status: 400,
      message: e.message,
    });
  }
};

const addStudent = async (req, res) => {

  upload(req, res, async (err) => {
    if (err) {
      res.send(err);
    }
    try {
      const response = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        image: req.files.map((val) => val.filename),
      });
      if (response) {
        res.send({
          data: response,
          error: false,
          success: true,
          status: 200,
          message: "data is added",
        });
      } else {
        return res.send({
          data: response,
          error: true,
          success: false,
          status: 400,
        });
      }
    } catch (e) {
      return res.send({
        data: [],
        error: true,
        success: false,
        status: 400,
        message: e.message,
      });
    }
  });
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  console.log("req.body",req.body)
  upload(req, res, async (err) => {
    if (err) {
      res.send(err);
    }
    try {
      const response = await userModel.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        image: req.file.filename,
      });
      if (response) {
        res.send({
          data: response,
          error: false,
          success: true,
          status: 200,
          message: "data is Update",
        });
      } else {
        res.send({
          data: response,
          error: true,
          success: false,
          status: 400,
        });
      }
    } catch (e) {
      res.send({
        data: [],
        error: true,
        success: false,
        status: 400,
        message: e.message,
      });
    }
  });
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await userModel.findByIdAndDelete({ _id: id });
    if (response) {
      res.send({
        data: response,
        error: false,
        success: true,
        status: 200,
        message: "data is delete",
      });
    } else {
      return res.send({
        data: response,
        error: true,
        success: false,
        status: 400,
      });
    }
  } catch (e) {
    return res.send({
      data: [],
      error: true,
      success: false,
      status: 400,
      message: e.message,
    });
  }
};

module.exports = {
  getAllStudent,
  addStudent,
  deleteStudent,
  getAllStudentById,
  updateStudent,
};
