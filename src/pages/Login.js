import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { Redirect } from "react-router";
import Input from "../components/Login/Input";
import Label from "../components/Login/Label";
import Subtitle from "../components/Login/Subtitle";
import { BlueButton } from "../components/UI/Button";
import Title from "../components/UI/Title";
import { SessionContext } from "../contexts/SessionContext";
import { CategoriesFetcher } from "../services/categories_fetcher";
import { SessionFetcher } from "../services/session_fetcher";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const context = useContext(SessionContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await SessionFetcher.login(form.email, form.password);
      if (data.token) {
        const categories = await CategoriesFetcher.index(data.token);
        context.setToken(data.token);
        context.setCategories(categories);
      }
    } catch (e) {
      console.log(e);
      setForm({
        email: "",
        password: "",
      });
    }
  }

  function setFormValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      {!context.token ? (
        <LoginContainer>
          <Title title="Welcome to Expensable" />
          <Subtitle subtitle="Please login to start using the app" />
          <form onSubmit={handleSubmit}>
            <Label text="Email" />
            <Input
              name="email"
              value={form.email}
              onChange={setFormValue}
              type="text"
              placeholder="somebody@mail.com"
            />
            <Label text="Password" />
            <Input
              name="password"
              value={form.password}
              onChange={setFormValue}
              type="password"
              placeholder="********"
            />
            <BlueButton>Login</BlueButton>
          </form>
        </LoginContainer>
      ) : (
        <Redirect to="/expenses" />
      )}
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 58px;
  text-align: center;
`;

export default Login;
