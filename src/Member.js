import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Member = () => {
  const history = useHistory();
  const [userMail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // https://velog.io/@gym/React-721 참고
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

  async function memberShip(e) {
    e.preventDefault();
    if (!isEmail(userMail)) {
      alert("email의 형식을 지켜주세요.");
      return;
    }
    if (password.length < 7) {
      alert("비밀번호는 8자 이상이여야 합니다.");
      return;
    }
    if (password !== passwordCheck) {
      alert("비밀번호를 확인하여주세요");
      return;
    }

    const values = { email: userMail, password };
    try {
      const { data: response } = await axios.post(
        "http://localhost:8080/users/create",
        values
      );
      if (response.token) {
        localStorage.setItem("token", response.token);
        history.push("/");
      }
    } catch (err) {
      const errCode = {
        ERR_NETWORK: "서버 통신 에러 입니다. 서버가 켜져있는지 확인해주세요.",
      };
      console.error("에러 >>", err);
      window.alert(errCode[err.code]);
    }
  }

  return (
    <div>
      <form type="submit" onSubmit={memberShip}>
        e-Mail
        <br />{" "}
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          defaultValue={userMail}
          onChange={(e) => setMail(e.target.value)}
        />
        <br />
        <br />
        password
        <br />{" "}
        <input
          type={"password"}
          placeholder="비밀번호를 입력하세요"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        password 확인
        <br />{" "}
        <input
          type={"password"}
          placeholder="비밀번호를 확인하세요"
          defaultValue={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <br />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Member;
