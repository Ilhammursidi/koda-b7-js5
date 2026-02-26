const account = {
  id: 120,
  username: "ilham",
  password: "ilham123"
};

function editPass() {
  let editPassword = { ...account, password: "baru" };
  if (editPassword.password.length < 5) {
    console.log(account);
    console.log("minimum password adalah 5 karakter");
  } else {
    console.log(editPassword);
  }
}

editPass();
