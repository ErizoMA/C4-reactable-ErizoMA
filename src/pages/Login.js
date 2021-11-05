import Input from "../components/Login/Input";
import Label from "../components/Login/Label";
import Subtitle from "../components/Login/Subtitle";
import Title from "../components/Login/Title";
import Button from "../components/UI/Button";

function Login() {
  return (
    <div>
      <Title title="Welcome to Expensable" />
      <Subtitle subtitle="Please login to start using the app" />
      <Label text="Email" />
      <Input placeholder="somebody@mail.com" />
      <Label text="Password" />
      <Input placeholder="********" />
      <Button></Button>
    </div>
  );
}

export default Login;
