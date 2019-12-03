import { View } from "../views/View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h3>User Name: ${this.model.get("name")}</h3>
        <h3>User Age: ${this.model.get("age")}</h3>
      </div>
    `;
  }
}
