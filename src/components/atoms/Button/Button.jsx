/**
 * BuildParty Button atom.
 *
 * Design tokens from Figma (registered in @theme in index.css):
 *   --color-btn-action:       #f59e0b  (surface/action, border/action, text/action)
 *   --color-btn-border:       #b45309  (border/action-subtle — primary 3-D shadow)
 *   --btn-primary-text:        #ffffff  (text/on-action)
 *
 * Primary uses bottom + left border only for the raised/3D shadow effect.
 * Outline uses a full-perimeter border.
 */
export function Button({
  label = 'BUTTON',
  variant = 'primary',
  disabled = false,
  onClick,
}) {
  const base =
    'inline-flex items-center justify-center ' +
    'px-[16px] py-[8px] rounded-[12px] ' +
    'text-[20px] font-bold leading-[24px] tracking-[0px] uppercase whitespace-nowrap ' +
    'select-none border-solid ';

  const variantClasses =
    variant === 'primary'
      ? 'bg-btn-action text-btn-primary-text border-b-2 border-l-2 border-btn-border'
      : 'bg-transparent text-btn-action border-2 border-btn-action';

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
