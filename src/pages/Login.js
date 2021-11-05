import Input from "../components/Login/Input";
import Label from "../components/Login/Label";
import Subtitle from "../components/Login/Subtitle";
import Title from "../components/UI/Title";

function Login() {
  return (
    <div>
      <Title title="Welcome to Expensable" />
      <Subtitle subtitle="Please login to start using the app" />
      <Label text="Email" />
      <Input placeholder="somebody@mail.com" />
      <Label text="Password" />
      <Input placeholder="********" />
    </div>
  );
}

export default Login;
