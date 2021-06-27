import React from 'react';

const Goo = ({
    children,
    className,
    composite = false,
    intensity = 'medium',
    id = 'gooey-react',
    style,
}) => {
    const blur = intensity === 'weak' ? 8 : intensity === 'strong' ? 16 : 12;
    const alpha = blur * 6;
    const shift = alpha / -2;
    const r = '1 0 0 0 0';
    const g = '0 1 0 0 0';
    const b = '0 0 1 0 0';
    const a = `0 0 0 ${alpha} ${shift}`;

    return (
        <>
            <svg
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                }}
            >
                <defs>
                    <filter colorInterpolationFilters="sRGB" id={id}>
                        <feGaussianBlur stdDeviation={blur} />
                        <feColorMatrix values={`${r} ${g} ${b} ${a}`} />
                        {composite && (
                            <feComposite in="SourceGraphic"></feComposite>
                        )}
                    </filter>
                </defs>
            </svg>
            <div className={className}>{children}</div>
        </>
    );
};

export default Goo;
