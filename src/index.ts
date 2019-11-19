import { User } from "./models/User";

const user = new User({ name: "billi", age: 20 });

user.set({ name: "alexander" });
console.log(user.get("name"));
console.log(user.get("age"));
