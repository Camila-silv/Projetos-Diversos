const nameFilter = (data) => {
  const reg = new RegExp("^[a-zA-Z]{3,}$", "g");
  const response = reg.exec(data);

  return response;
};

const emailFilter = (data) => {
  const reg = new RegExp(
    "^[a-zA-Z][a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{3,}@[a-zA-Z]{3,}.com$",
    "g"
  );
  const response = reg.exec(data);

  return response;
};

const filters = {
  nameFilter,
  emailFilter,
};

export default filters;
