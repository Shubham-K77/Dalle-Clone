const notfound = (req, res, next) => {
  res.status(404); //Not-Found
  const error = new Error("Resource/Url Not Found!");
  next(error);
};
const errorHandle = (error, req, res, next) => {
  let message = error.message || "Internal Server Error!";
  let apiStatus = res.statusCode === 200 ? 500 : res.statusCode;
  if (error.name === "CastError" && error.kind === "ObjectId") {
    message = "MongoDb Error!";
    apiStatus = 400; //Bad Request!
  }
  res.status(apiStatus).send({ success: false, status: apiStatus, message });
  console.error(error);
};
export { notfound, errorHandle };
