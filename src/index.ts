import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "alex", age: 44 });
const root = document.getElementById("root");
if (root) {
  const userEdit = new UserEdit(document.getElementById("root"), user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found");
}
