import { Input } from '../../atoms/Input/Input';
import { Typography } from '../../atoms/Typography/Typography';
import './FormField.css';

/**
 * FormField molecule — wraps Input with a Typography label and optional helper text.
 * Used in session creation, Q&A submission, and profile forms.
 *
 * @param {object}   props
 * @param {string}   [props.id]          - Wired to label htmlFor and input id
 * @param {string}   [props.label]       - Field label text
 * @param {boolean}  [props.required]    - Shows asterisk indicator
 * @param {string}   [props.helper]      - Helper text below the input
 * @param {string}   [props.placeholder]
 * @param {string}   [props.value]
 * @param {function} [props.onChange]
 */
export function FormField({
  id,
  label,
  required = false,
  helper,
  placeholder = 'Placeholder',
  value,
  onChange,
}) {
  const inputId = id ?? `field-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="form-field">
      {label && (
        <label className="form-field__label" htmlFor={inputId}>
          <Typography variant="paragraph-md" as="span">{label}</Typography>
          {required && (
            <span className="form-field__required" aria-hidden="true">*</span>
          )}
        </label>
      )}

      <Input
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        showIconLeft={false}
        showIconRight={false}
      />

      {helper && (
        <Typography
          variant="paragraph-xsm"
          id={`${inputId}-helper`}
          className="form-field__helper"
        >
          {helper}
        </Typography>
      )}
    </div>
  );
}
