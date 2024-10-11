import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../../../redux/slices/loginSlice";
import { Input } from "../../../../components/UI/Input";
import { Button } from "../../../../components/UI/AppButton";
import { Form } from "../../../../components/UI/Form";
import { useForm } from "react-hook-form";
import { FormErrorMessage } from "../../../../components/UI/FormErrorMessage";

export const Login = ({ users }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const foundUser = users.find((item) => item.email === data.email);
        if (!foundUser) {
            alert("Нет такого пользователя");
            return;
        }

        if (foundUser.password !== data.password) {
            alert("Пароль неверный");
            return;
        }

        dispatch(login(foundUser));
        navigate(`/user/${foundUser.id}/`);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    placeholder="E-mail"
                    {...register("email", {
                        required: "E-mail обязателен",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Введите действительный E-mail",
                        },
                    })}
                />
                {errors.email && (
                    <FormErrorMessage text={errors.email.message} />
                )}
            </div>
            <div>
                <Input
                    placeholder="Пароль"
                    {...register("password", { required: "Пароль обязателен" })}
                />
                {errors.password && (
                    <FormErrorMessage text={errors.password.message} />
                )}
            </div>
            <Button type="onsubmit" content="Войти" />
        </Form>
    );
};
