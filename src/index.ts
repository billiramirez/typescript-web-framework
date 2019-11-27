import { User } from "./models/User";

const user = new User({ name: "alexander", age: 50 });
user.on("change", () => {
  console.log("user was changed");
});
