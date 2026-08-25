import React from "react";
import { Loader2, type LucideIcon } from "lucide-react";

/**
 * Button — componente reutilizable
 *
 * Ejemplos:
 * <Button>Guardar</Button>
 * <Button variant="outline" size="sm">Cancelar</Button>
 * <Button variant="danger" icon={Trash2}>Eliminar</Button>
 * <Button loading>Procesando</Button>
 * <Button as="a" href="/inicio" variant="secondary">Volver</Button>
 */

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring-indigo-500",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-slate-400",
  outline:
    "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 focus-visible:ring-indigo-500",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-slate-400",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500",
};

const SIZE_STYLES: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5 gap-1.5 rounded-md",
  md: "text-sm px-4 py-2 gap-2 rounded-lg",
  lg: "text-base px-5 py-2.5 gap-2 rounded-lg",
};

const ICON_SIZE: Record<Size, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

// Props base compartidas, sin los atributos nativos (se agregan según "as")
interface BaseProps {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  fullWidth?: boolean;
  className?: string;
}

// Overload: renderizado como <button>
type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

// Overload: renderizado como <a>
type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      icon: Icon,
      iconPosition = "left",
      fullWidth = false,
      className = "",
      as = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const iconSize = ICON_SIZE[size];

    const classes = [
      "inline-flex items-center justify-center font-medium select-none",
      "transition-colors duration-150 cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      VARIANT_STYLES[variant],
      SIZE_STYLES[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const content = (
      <>
        {loading && <Loader2 size={iconSize} className="animate-spin" />}
        {!loading && Icon && iconPosition === "left" && <Icon size={iconSize} />}
        {children && <span>{children}</span>}
        {!loading && Icon && iconPosition === "right" && <Icon size={iconSize} />}
      </>
    );

    if (as === "a") {
      const anchorProps = props as Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof BaseProps
      >;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          aria-disabled={isDisabled}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const buttonProps = props as Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof BaseProps
    >;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;