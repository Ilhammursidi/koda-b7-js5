const account = {
  id: 120,
  username: "ilham",
  password: "ilhamlama",
};

const editPassword = {
  ...account,
  password: "baru",
};

function editPass() {
  if (editPassword.password.length < 5) {
    console.log(account);
    console.log("minimum password adalah 5 karakter");
  } else {
    console.log(editPassword);
  }
}

editPass();
