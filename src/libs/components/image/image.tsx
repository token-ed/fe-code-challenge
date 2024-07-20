import React from "react"

interface Props {
    className?: string;
    height?: number;
    src: string;
    width?: number;
}

export const Image: React.FC<Props> = ({ className, height, width, src }) => {
    return <img role="img" className={className} src={src} height={height} width={width} />
}