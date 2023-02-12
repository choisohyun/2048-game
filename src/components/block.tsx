import React, {useEffect, useState} from 'react';
import styles from "@/app/page.module.css";
import {usePrevProps} from "@/src/hooks/use-prev-props";
import {useBoard} from "@/src/contexts/board";
import invariant from "tiny-invariant";

interface BlockProps {
    value: number
    position: [number, number]
}

const Block = ({ value, position }: BlockProps) => {
    const [scale, setScale] = useState(1);
    const [containerWidth, tileCount] = useBoard();

    const prevValue = usePrevProps<number>(value);

    const isNew = prevValue === undefined;
    const hasChanged = prevValue !== value;
    const shallAnimate = isNew || hasChanged;

    const withinBoardBoundaries =
        position[0] < tileCount && position[1] < tileCount;
    invariant(withinBoardBoundaries, "Tile out of bound");

    useEffect(() => {
        if (shallAnimate) {
            setScale(1.1);
            setTimeout(() => setScale(1), 100);
        }
    }, [shallAnimate, scale]);

    const positionToPixels = (position: number) => {
        return (position / tileCount) * (containerWidth as number);
    };

    // all animations come from CSS transition, and we pass them as styles
    const style = {
        top: positionToPixels(position[1]),
        left: positionToPixels(position[0]),
        transform: `scale(${scale})`,
    };

    return (
        <div className={styles.card} style={style}>
            {value}
        </div>
    );
};

export default Block;
