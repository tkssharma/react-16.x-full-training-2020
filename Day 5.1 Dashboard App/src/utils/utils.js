const GetHeaders = function(token) {
  const header = {};
  const bearer = `Bearer ${token}`;

  header.Authorization = bearer;

  return header;
};

export { GetHeaders };
