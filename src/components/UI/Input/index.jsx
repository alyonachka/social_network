import * as SC from "./styled";
import { forwardRef } from "react";

export const Input = forwardRef(({ ...props }, ref) => {
    return <SC.Input {...props} ref={ref} />;
});
