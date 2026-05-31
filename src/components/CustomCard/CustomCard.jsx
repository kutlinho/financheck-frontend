import React from "react";
import clsx from "clsx";

const CustomCard = ({
                    header,
                    children,
                    width = "w-full",
                    height = "",
                    className = "",
                    headerClassName = "",
                    bodyClassName = "",
                }) => {
    return (
        <div
            className={clsx(
                "rounded-4xl border-3 border-primary-green-light bg-neutral-bg-grey shadow-sm",
                width,
                height,
                className
            )}
        >
            {header && (
                <div
                    className={clsx(
                        "text-center px-4 py-3 text-3xl font-semibold text-gray-800",
                        headerClassName
                    )}
                >
                    {header.toUpperCase()}
                </div>
            )}

            <div className={clsx("p-4 text-center", bodyClassName)}>
                {children}
            </div>
        </div>
    );
};

export default CustomCard;
