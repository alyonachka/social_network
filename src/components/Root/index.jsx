import { Outlet } from "react-router";
import * as SC from "./styled";
import { MyLink } from "./styled";
import { logout } from "../../redux/slices/loginSlice";
import { useDispatch } from "react-redux";

export const Root = () => {
    const dispatch = useDispatch();

    return (
        <div style={{ display: "flex" }}>
            <SC.Sidebar id="sidebar">
                <SC.NavMenu>
                    <MyLink to={`info`}>Моя страница</MyLink>
                    <MyLink to={`posts`}>Посты</MyLink>
                    <MyLink to={`friends`}>Друзья</MyLink>
                    <MyLink to={`/`} onClick={() => dispatch(logout())}>
                        Выйти
                    </MyLink>
                </SC.NavMenu>
            </SC.Sidebar>
            <SC.Detail>
                <Outlet />
            </SC.Detail>
        </div>
    );
};
