import { Typography } from '../../atoms/Typography/Typography';
import { Badge } from '../../atoms/Badge/Badge';
import { Button } from '../../atoms/Button/Button';
import './Card.css';

/**
 * Card molecule — composes Typography, Badge, and Button atoms.
 * Used for session listings, speaker profiles, and build showcases.
 *
 * @param {object}  props
 * @param {string}  props.title
 * @param {string}  [props.description]
 * @param {string}  [props.thumbnail]       - Image URL
 * @param {{ label: string, variant?: string }} [props.badge]
 * @param {string}  [props.meta]            - Footer meta text (date, count, etc.)
 * @param {{ label: string, onClick: function }} [props.action] - Footer CTA button
 * @param {'default'|'selected'|'disabled'} [props.state]
 * @param {function} [props.onClick]
 */
export function Card({
  title = 'Session Title',
  description,
  thumbnail,
  badge,
  meta,
  action,
  state = 'default',
  onClick,
}) {
  const isDisabled = state === 'disabled';

  return (
    <article
      className={`card card--${state}`}
      onClick={!isDisabled && onClick ? onClick : undefined}
      aria-disabled={isDisabled || undefined}
      tabIndex={onClick && !isDisabled ? 0 : undefined}
    >
      {thumbnail && (
        <div className="card__thumbnail">
          <img src={thumbnail} alt="" />
        </div>
      )}

      <div className="card__body">
        {badge && (
          <div className="card__badge">
            <Badge label={badge.label} variant={badge.variant ?? 'primary'} />
          </div>
        )}
        <Typography variant="H5" className="card__title">{title}</Typography>
        {description && (
          <Typography variant="paragraph-sm" className="card__description">
            {description}
          </Typography>
        )}
      </div>

      {(meta || action) && (
        <div className="card__footer">
          {meta && (
            <Typography variant="paragraph-xsm" className="card__meta" as="span">{meta}</Typography>
          )}
          {action && (
            <Button
              label={action.label}
              variant="primary"
              disabled={isDisabled}
              onClick={!isDisabled ? action.onClick : undefined}
            />
          )}
        </div>
      )}
    </article>
  );
}
