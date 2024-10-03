import { Outlet } from "react-router";
import * as SC from "./styled";
import { MyLink } from "./styled";

export const Root = () => {
    return (
        <div style={{ display: "flex" }}>
            <SC.Sidebar id="sidebar">
                <SC.NavMenu>
                    <MyLink to={`info`}>Моя страница</MyLink>
                    <MyLink to={`posts`}>Посты</MyLink>
                    <MyLink to={`friends`}>Друзья</MyLink>
                    <MyLink to={`posts`}>Выйти</MyLink>
                </SC.NavMenu>
            </SC.Sidebar>
            <SC.Detail>
                <Outlet />
            </SC.Detail>
        </div>
    );
};
