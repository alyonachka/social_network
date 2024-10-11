import styled from "styled-components";

export const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #25b09b;
    --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
    mask: var(--_m);
    mask-composite: subtract;
    animation: l3 1s infinite linear;
    @keyframes l3 {to{transform: rotate(1turn)}}
`