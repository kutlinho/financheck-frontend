function CustomButton({
                          type = 'primary',
                          label = 'Giriş Yapın',
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
    };

    const variantClasses = buttonVariants[type] || buttonVariants.primary;

    return (
        <button
            {...props}
            className={`
        ${variantClasses}
        px-4 py-2
        rounded-lg
        font-medium
        transition-colors
        duration-200
        cursor-pointer
        ${className}
      `}
        >{label}</button>
    );
}

export default CustomButton;
