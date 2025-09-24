import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getReaderByEmail, createReader } from "../../service/readerService";
import "./Login.css"

export const Register = (props) => {
  const [reader, setReader] = useState({
    name: "",
    email: "",
    narrative: "",
  });
  let navigate = useNavigate();

  const registerNewReader = () => {
    createReader(reader).then((createdReader) => {
      if (createdReader.hasOwnProperty("id")) {
        localStorage.setItem(
          "lounge_user",
          JSON.stringify({
            id: createdReader.id,
          })
        );

        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    getReaderByEmail(reader.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists");
      } else {
        // Good email, create user.
        registerNewReader();
      }
    });
  };

  const updateReader = (evt) => {
    const copy = { ...reader };
    copy[evt.target.id] = evt.target.value;
    setReader(copy);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Literary Lounge</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateReader}
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateReader}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateReader}
              type="text"
              id="narrative"
              className="form-control"
              placeholder="Brief Narrative"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
