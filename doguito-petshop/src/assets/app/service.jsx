const createNewCustomer = async (iten) => {
  try {
    await fetch("http://localhost:3000/customersDB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(iten),
    });
  } catch (error) {
    console.error(`Algo deu errado: ${error}`);
  }
};

const searchCustomerList = async () => {
  try {
    const url = await fetch("http://localhost:3000/customersDB/");
    const convertedUrl = await url.json();

    return convertedUrl;
  } catch (error) {
    console.error(`Algo deu errado: ${error}`);
  }
};

const deleteCustomer = async (id) => {
  try {
    await fetch(`http://localhost:3000/customersDB/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(`Algo deu errado: ${error}`);
  }
};

const updateClient = async (id, iten) => {
  try {
    await fetch(`http://localhost:3000/customersDB/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(iten),
    });
  } catch (error) {
    console.error(`Algo deu errado: ${error}`);
  }
};

const searchForSpecifiCustomer = async (id) => {
  try {
    const url = await fetch(`http://localhost:3000/customersDB/${id}`);
    const convertedUrl = await url.json();

    return convertedUrl;
  } catch (error) {
    console.error(`Algo deu errado: ${error}`);
  }
};

const serviceControl = {
  createNewCustomer,
  searchCustomerList,
  deleteCustomer,
  updateClient,
  searchForSpecifiCustomer,
};

export default serviceControl;
