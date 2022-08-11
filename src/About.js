import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'



const About = () => {
    const history = useHistory()
    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");
    function memberShip(e) {
        e.preventDefault();
        if (password.length <= 8 && userId.length <= 4) { alert("아이디와 비밀번호를 확인해주세요") }
        else if (localStorage.getItem(userId) !== password) { alert("아이디와 비밀번호를 확인해주세요") }
        else {
            history.push('Todo');
        } return;

    }



    return (
        <div>
            <form onSubmit={memberShip}>
                <h1>LOGIN</h1>
                <input placeholder='아이디를 입력하세요'
                    defaultValue={userId} onChange={(e) => setId(e.target.value)} /><br /><br />
                <input type={'password'} placeholder='비밀번호를 입력하세요'
                    defaultValue={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type='submit'>LOGIN</button><br />
                <Link to="/member">회원가입</Link>
            </form>
        </div >
    );
};

export default About;