let errorHandler = (err, req, res, next) => {
  console.log("Error:", err.message);

  let statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  return res.status(statusCode).json({
    message: err.message || "Internal server error"
  });
};

export default errorHandler;
