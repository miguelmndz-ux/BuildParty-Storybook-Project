import { User, QuestionMark } from '@phosphor-icons/react';
import './Input.css';

/**
 * BuildParty Input atom.
 *
 * Design tokens in index.css under `--input-*`.
 * Hover border is applied via CSS :hover on `.input-root`.
 * Disabled state uses `.input-root--disabled`.
 */
export function Input({
  placeholder = 'Placeholder',
  disabled = false,
  showIconLeft = true,
  showIconRight = true,
  iconLeft,
  iconRight,
  value,
  onChange,
  id,
  'aria-label': ariaLabel,
}) {
  return (
    <div className={`input-root${disabled ? ' input-root--disabled' : ''}`}>
      {showIconLeft && (
        <span className="input-icon" aria-hidden="true">
          {iconLeft ?? <User size={20} aria-hidden="true" />}
        </span>
      )}
      <input
        id={id}
        type="text"
        className="input-field"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel ?? placeholder}
      />
      {showIconRight && (
        <span className="input-icon" aria-hidden="true">
          {iconRight ?? <QuestionMark size={20} aria-hidden="true" />}
        </span>
      )}
    </div>
  );
}
