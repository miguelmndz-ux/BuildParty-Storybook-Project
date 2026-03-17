import React from 'react';

export type ButtonVariant = 'primary' | 'outline';

export interface ButtonProps {
  /** Button label text */
  label?: string;
  /** Visual variant — primary is filled amber, outline is transparent with border */
  variant?: ButtonVariant;
  /** Disables the button and reduces opacity to 50% */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * BuildParty Button atom.
 *
 * Design tokens from Figma (registered in @theme in index.css):
 *   --color-btn-primary-bg:   #d97706  (amber-600)
 *   --color-btn-border:       #b45309  (amber-700)
 *   --color-btn-primary-text: #ffffff
 *   --color-btn-outline-text: #b45309
 *
 * Primary uses bottom + left border only for the raised/3D shadow effect.
 * Outline uses a full-perimeter border.
 */
export function Button({
  label = 'BUTTON',
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center ' +
    'px-[16px] py-[8px] rounded-[8px] ' +
    'text-[14px] font-[600] tracking-[1px] leading-[1.3] uppercase whitespace-nowrap ' +
    'select-none border-solid ';

  const variantClasses =
    variant === 'primary'
      ? 'bg-btn-primary-bg text-btn-primary-text border-b-2 border-l-2 border-btn-border'
      : 'bg-transparent text-btn-outline-text border-2 border-btn-border';

  const stateClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type="button"
      className={`${base}${variantClasses} ${stateClasses}`}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
}
