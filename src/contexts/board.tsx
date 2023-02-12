

import React, {useContext} from "react";

export const BoardContext = React.createContext({
    containerWidth: 0,
    tileCount: 4,
});

type Props = {
    containerWidth: number;
    tileCount: number;
    children: any;
};

export const BoardProvider = ({
                                  children,
                                  containerWidth = 0,
                                  tileCount = 4,
                              }: Props) => {
    return (
        <BoardContext.Provider value={{ containerWidth, tileCount }}>
            {children}
        </BoardContext.Provider>
    );
};

export const useBoard = () => {
    const { containerWidth, tileCount } = useContext(BoardContext);

    return [containerWidth, tileCount] as [number, number];
};