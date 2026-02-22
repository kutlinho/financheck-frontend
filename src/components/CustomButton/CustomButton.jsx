function CustomButton({
                          type = 'primary',
                          label = 'Giriş Yapın',
                          icon = null,
                          iconPosition = 'left', // left | right
                          className = '',
                          ...props
                      }) {
    const buttonVariants = {
        primary: `
    bg-[color:var(--color-primary-green-dark)]
    hover:bg-green-600
    text-white
  `,
        secondary: `
    bg-[color:var(--color-secondary-blue-dark)]
    hover:bg-[color:var(--color-secondary-blue-light)]
    text-white
  `,
        alert: `
    bg-[color:var(--color-alert-red-dark)]
    hover:bg-[color:var(--color-alert-red-light)]
    text-white
  `,
        alternative: `
    bg-[color:var(--color-neutral-bg-light)]
    border border-[color:var(--color-primary-green-dark)]
    hover:bg-[color:var(--color-neutral-bg-grey)]
    text-black
  `,
    };

    const variantClasses = buttonVariants[type] || buttonVariants.primary;

    return (
        <button
            {...props}
            className={`
        ${variantClasses}
        inline-flex items-center justify-center
        gap-2
        px-4 py-2
        rounded-lg
        font-medium
        transition-colors duration-200
        cursor-pointer
        ${className}
      `}
        >
            {icon && iconPosition === 'left' && (
                <span className="flex items-center">
          {icon}
        </span>
            )}

            {label && <span>{label}</span>}

            {icon && iconPosition === 'right' && (
                <span className="flex items-center">
          {icon}
        </span>
            )}
        </button>
    );
}

export default CustomButton;
