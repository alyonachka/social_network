import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../../../redux/slices/loginSlice";
import { Input } from "../../../../components/UI/AppInput";
import { Button } from "../../../../components/UI/AppButton";
import { Form } from "../../../../components/UI/Form";
import { useForm } from "react-hook-form";
import { FormErrorMessage } from "../../../../components/UI/FormErrorMessage";
import { emailValidationRegular } from "../../../../utils/validationOptions";

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

    const emailValidationOptions = {
        required: "E-mail обязателен",
        pattern: {
            value: emailValidationRegular,
            message: "Введите действительный E-mail",
        },
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    placeholder="E-mail"
                    {...register("email", emailValidationOptions)}
                />
                {errors.email && (
                    <FormErrorMessage text={errors.email.message} />
                )}
            </div>
            <div>
                <Input
                    placeholder="Пароль"
                    type="password"
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
