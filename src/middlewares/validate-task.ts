const validateTask = (req, res, next) => {
    const { title, completed } = req.body;
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ message: "Title is required and must be a string" });
    }
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be a boolean" });
    }
    next();
  };
  
  export default validateTask;