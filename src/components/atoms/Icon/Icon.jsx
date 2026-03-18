import './Icon.css';

/**
 * Icon atom — a sized, accessible wrapper for Phosphor (or any SVG) icons.
 *
 * Pass a Phosphor icon as children with `size={ICON_SIZE_PX[size]}` to match
 * the container dimensions.
 *
 * @param {object} props
 * @param {'xl'|'lg'|'md'|'sm'|'xsm'} [props.size='md']
 * @param {string}  [props.label]     - Accessible label; omit for decorative icons
 * @param {import('react').ReactNode} [props.children]
 * @param {string}  [props.className]
 */
export function Icon({ size = 'md', label, children, className, ...rest }) {
  const isDecorative = !label;
  return (
    <span
      className={['icon', `icon--${size}`, className].filter(Boolean).join(' ')}
      role={isDecorative ? undefined : 'img'}
      aria-label={isDecorative ? undefined : label}
      aria-hidden={isDecorative ? true : undefined}
      {...rest}
    >
      {children}
    </span>
  );
}
