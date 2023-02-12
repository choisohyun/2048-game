import { useEffect, useRef } from "react";

/**
 * `usePrevProps` stores the previous value of the prop.
 *
 * @param {K} value
 * @returns {K | undefined}
 */
export const usePrevProps = <K = any>(value: K) => {
    const ref = useRef<K>();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};
