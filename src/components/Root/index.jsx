import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const Root = () => {
    return (
        <div style={{ display: "flex" }}>
            <div id="sidebar">
                <nav>
                    <ul>
                        <Link to={`info`}>Моя страница</Link>
                        <Link to={`posts`}>Посты</Link>
                        <Link to={`friends`}>Друзья</Link>
                        <Link to={`posts`}>Выйти</Link>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
};
