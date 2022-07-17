import React from 'react';
import { useBem } from "@protolane/bem";

export type IButtonProps = {
    onClick: () => void;
    className?: string;
}

export default function Button({onClick, className}: IButtonProps) {
    const bem = useBem('button', 'protolane');
    return <button {...bem(null, null, className)} onClick={() => onClick?.()}>Hello world</button>
}
