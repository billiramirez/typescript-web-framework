import { User } from "./models/User";

const user = new User({ name: "billi", age: 20 });
user.on("change", () => {});

console.log(user);
