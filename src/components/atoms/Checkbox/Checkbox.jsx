import PropTypes from 'prop-types';
import './Checkbox.css';

/**
 * BuildParty Checkbox atom.
 *
 * Design tokens sourced from Figma — amber action palette:
 *   surface/action            #f59e0b  (checked bg)
 *   surface/action-hover      #b45309  (checked hover bg)
 *   surface/action-pressed    #78350f  (checked pressed bg)
 *   surface/action-hover-subtle  #fef3c7  (unchecked hover bg)
 *   surface/action-pressed-subtle #fcd34d (unchecked pressed bg)
 *   surface/disabled          #e7e5e4
 *   border/default            #d6d3d1
 *   border/action             #f59e0b
 *   border/action-subtle      #b45309
 */
export default function Checkbox({ state = 'Default', checked = false, onChange }) {
  const isDisabled = state === 'Disabled';

  function handleKeyDown(e) {
    if (!isDisabled && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      onChange?.();
    }
  }

  return (
    <div
      className="checkbox"
      role="checkbox"
      aria-checked={checked}
      aria-disabled={isDisabled || undefined}
      data-state={state.toLowerCase()}
      tabIndex={isDisabled ? -1 : 0}
      onClick={!isDisabled ? onChange : undefined}
      onKeyDown={handleKeyDown}
    >
      <svg
        className={`checkbox__mark${checked ? ' checkbox__mark--visible' : ''}`}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 7L4.5 9.5L10 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

Checkbox.propTypes = {
  /** Visual / interaction state — forces the displayed state (useful in Storybook) */
  state: PropTypes.oneOf(['Default', 'Hover', 'Pressed', 'Disabled']),
  /** Whether the checkbox is checked (selected) */
  checked: PropTypes.bool,
  /** Callback fired when the user toggles the checkbox */
  onChange: PropTypes.func,
};
