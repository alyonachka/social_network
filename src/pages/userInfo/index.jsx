import { useSelector } from "react-redux";
import * as SC from "./styled";

export default function UserInfoPage() {
    const user = useSelector((state) => state.auth.user);

    const role = user.role === "user" ? "пользователь" : "администратор";
    return (
        <SC.Wrapper>
            <SC.Avatar src="/default-user-photo.png" alt="user photo" />
            <SC.Info>
                <div>
                    Имя: <b>{user.username}</b>
                </div>
                <div>Почта: {user.email}</div>
                <div>Права: {role}</div>
            </SC.Info>
        </SC.Wrapper>
    );
}
