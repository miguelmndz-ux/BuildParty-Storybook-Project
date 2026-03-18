import { StarFour } from '@phosphor-icons/react';
import './Badge.css';

/**
 * BuildParty Badge atom.
 *
 * Design tokens in index.css under `--badge-*`.
 * Figma: node 81-300 — two variants: Primary (amber fill) and Outline (white + subtle border).
 */
export function Badge({ label = 'Agents', variant = 'primary' }) {
  return (
    <span className={`badge badge--${variant}`} aria-label={label}>
      <StarFour size={12} weight="fill" aria-hidden="true" />
      <span className="badge__label">{label}</span>
    </span>
  );
}
