import './PollOptionBar.css';
import { CrownSimple } from '@phosphor-icons/react';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';

const STATE_CLASS = {
  Default: 'poll-option-bar--default',
  Voted: 'poll-option-bar--voted',
  ResultsOnly: 'poll-option-bar--results-only',
};

/**
 * PollOptionBar molecule — a single poll answer row with an optional
 * animated fill bar representing the vote percentage.
 *
 * @param {object}  props
 * @param {'Default'|'Voted'|'ResultsOnly'} [props.state='Default']
 * @param {string}  [props.label='Option']
 * @param {number}  [props.percentage=0]      - 0–100, controls fill bar width
 * @param {boolean} [props.showIcon=true]     - show crown icon next to label
 * @param {boolean} [props.showPercentage=true] - show percentage value on right
 */
export function PollOptionBar({
  state = 'Default',
  label = 'Option',
  percentage = 0,
  showIcon = true,
  showPercentage = true,
}) {
  const showFill = state === 'Voted' || state === 'ResultsOnly';
  const stateClass = STATE_CLASS[state] ?? STATE_CLASS.Default;

  return (
    <div className={`poll-option-bar ${stateClass}`}>
      {showFill && (
        <div
          className="poll-option-bar__fill"
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        />
      )}
      <div className="poll-option-bar__wrapper">
        <Typography variant="paragraph-md" as="span" className="poll-option-bar__label">
          {label}
        </Typography>
        {showIcon && (
          <Icon size="sm">
            <CrownSimple size={16} weight="regular" />
          </Icon>
        )}
      </div>
      {showPercentage && (
        <Typography variant="paragraph-md" as="span" className="poll-option-bar__percentage">
          {percentage}%
        </Typography>
      )}
    </div>
  );
}
