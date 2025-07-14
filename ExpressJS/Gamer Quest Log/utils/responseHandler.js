function successResponse(res, message, data = {}) {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
}

function createdResponse(res, message, data = {}) {
  return res.status(201).json({
    success: true,
    message,
    data,
  });
}

function errorResponse(res, message, errors = {}, statusCode = 400) {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}

module.exports = {
  successResponse,
  createdResponse,
  errorResponse,
};
