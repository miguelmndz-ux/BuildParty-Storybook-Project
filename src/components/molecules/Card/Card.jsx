import { Typography } from '../../atoms/Typography/Typography';
import { Badge } from '../../atoms/Badge/Badge';
import { Button } from '../../atoms/Button/Button';
import './Card.css';

/**
 * Card molecule — composes Typography, Badge, and Button atoms.
 * Used for session listings on the BuildParty platform.
 *
 * @param {object}  props
 * @param {string}  [props.title]
 * @param {string}  [props.description]
 * @param {{ label: string, variant?: string }} [props.badge]
 * @param {string}  [props.actionLabel]   - CTA button label
 * @param {function} [props.onAction]     - CTA button click handler
 */
export function Card({
  title = 'Launch Day: AI Builder Showcase',
  description = 'Join us for a live showcase of the latest AI tools built by the community.',
  badge,
  actionLabel = 'RSVP NOW',
  onAction,
}) {
  return (
    <article className="card">
      <div className="card__image-placeholder" aria-hidden="true">
        <span className="card__image-watermark">BuildParty</span>
      </div>

      <div className="card__body">
        {badge && (
          <Badge label={badge.label} variant={badge.variant ?? 'primary'} />
        )}
        <Typography variant="H6" className="card__title">{title}</Typography>
        <Typography variant="paragraph-sm" className="card__description">
          {description}
        </Typography>
      </div>

      <Button label={actionLabel} variant="primary" onClick={onAction} />
    </article>
  );
}
