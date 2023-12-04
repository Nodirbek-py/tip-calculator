import { useState } from "react";

export const useHook = () => {
    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0);
    const [tip, setTip] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    return { bill, setBill, people, setPeople, tip, setTip, tipAmount, setTipAmount, total, setTotal };
};
