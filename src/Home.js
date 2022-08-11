import React from 'react';
import { Link, Route } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <form>
                시작페이지입니다. 들어가려면 로그인을 해주세요
                <br />
                <br />
                <br />
                <br />
                <Link to="/about">로그인페이지 가기</Link><br />
            </form>
        </div>
    );
};

export default Home;