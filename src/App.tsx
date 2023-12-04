import { Link } from "react-router-dom";

//ホーム画面の内容
export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/sns/login">Login</Link> |{" "}
        <Link to="/sns/sign-up">Sign up</Link>
      </nav>
    </div>
  );
}
