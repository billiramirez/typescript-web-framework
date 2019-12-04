import { View } from "../views/View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h3>User Detail</h3>
        <p>User Name: ${this.model.get("name")}</p>
        <p>User Age: ${this.model.get("age")}</p>
      </div>
    `;
  }
}
