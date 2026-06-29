"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface SharedProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

interface LinkButtonProps extends SharedProps {
  href: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}

interface ActionButtonProps extends SharedProps {
  href?: never;
  download?: never;
  target?: never;
  rel?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    className,
    children,
    icon,
    iconRight,
  } = props;

  const classes = cn("btn", variantClass[variant], className);

  const content = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );

  if ("href" in props && props.href) {
    const { href, download, target, rel } = props;
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  const { type = "button", onClick } = props;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
