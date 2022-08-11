import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


const Member = () => {
    const history = useHistory()
    const [userName, setName] = useState("");
    const [userId, setId] = useState("");
    const [userMail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    function memberShip(e) {
        e.preventDefault();
        if (userName.length < 1) { alert("이름은 1자 이상이여야 합니다.") }
        if (userId.length < 4) { alert("아이디는 4자 이상이여야 합니다.") }
        else if (password.length < 7) { alert("비밀번호는 8자 이상이여야 합니다.") }
        else if ((!userMail.includes("@")) && (!userMail.length < 4)) { alert("email의 형식을 지켜주세요.") }
        else if ((!userMail.includes("."))) { alert("email의 형식을 지켜주세요.") }
        else if (password !== passwordCheck) { alert("비밀번호를 확인하여주세요") }
        else {
            console.log(
                `userName : ${userName},
            userId : ${userId},
            password : ${password},
            passwordCheck : ${passwordCheck},
            userMail : ${userMail}`
            )
            history.push('About');
            localStorage.setItem(userId, password);
        }
        return;
    }

    return (
        <div>
            <form type='submit' onSubmit={memberShip}>
                이름 <br /><input type='text' placeholder='이름을 입력하세요'
                    defaultValue={userName} onChange={(e) => setName(e.target.value)} /><br />

                ID<br /> <input type='text' placeholder='아이디를 입력하세요'
                    defaultValue={userId} onChange={(e) => setId(e.target.value)} /><br />

                password<br /> <input type={'password'} placeholder='비밀번호를 입력하세요'
                    defaultValue={password} onChange={(e) => setPassword(e.target.value)} /><br />

                password 확인<br /> <input type={'password'} placeholder='비밀번호를 확인하세요'
                    defaultValue={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} /><br />

                e-Mail<br /> <input type='text' placeholder='이메일을 입력하세요'
                    defaultValue={userMail} onChange={(e) => setMail(e.target.value)} /><br />
                <br />
                <button type='submit' >가입하기</button>
            </form>
        </div>
    );
};

export default Member;