import { USERS } from "../../../../constants/keys";
import { Input } from "../../../../components/UI/Input";
import { Button } from "../../../../components/UI/AppButton";
import { Form } from "../../../../components/UI/Form";
import { useForm } from "react-hook-form";
import { FormErrorMessage } from "../../../../components/UI/FormErrorMessage";

export const Registration = ({ users, setToLS, setUsers }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (users.find((item) => item.email === data.email)) {
            alert("Пользователь с такой почтой уже существует");
            return;
        }

        const id = Date.now();

        const newUser = {
            ...data,
            id,
            role: "user",
            img: `https://robohash.org/${id}.png`,
            friends: [],
            followers: [],
            following: [],
        };

        setToLS(USERS, [...users, newUser]);
        setUsers([...users, newUser]);

        alert("Вы успешно зарегистрировались!");
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    placeholder="Имя"
                    {...register("username", { required: "Имя обязательно" })}
                />
                {errors.username && (
                    <FormErrorMessage text={errors.username.message} />
                )}
            </div>
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
                    {...register("password", {
                        required: "Пароль обязателен",
                        minLength: {
                            value: 10,
                            message:
                                "Пароль должен содержать минимум 10 символов",
                        },
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d).{10,}$/,
                            message:
                                "Пароль должен содержать хотя бы одну цифру и одну заглавную букву",
                        },
                    })}
                />
                {errors.password && (
                    <FormErrorMessage text={errors.password.message} />
                )}
            </div>
            <Button type="onsubmit" content="Зарегистрироваться" />
        </Form>
    );
};
