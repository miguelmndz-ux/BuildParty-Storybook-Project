import './Typography.css';

/** Maps each variant to its default HTML tag and CSS modifier class. */
const VARIANT_MAP = {
  H1:              { tag: 'h1', cls: 'typography--h1' },
  H2:              { tag: 'h2', cls: 'typography--h2' },
  H3:              { tag: 'h3', cls: 'typography--h3' },
  H4:              { tag: 'h4', cls: 'typography--h4' },
  H5:              { tag: 'h5', cls: 'typography--h5' },
  H6:              { tag: 'h6', cls: 'typography--h6' },
  'paragraph-lg':  { tag: 'p',  cls: 'typography--paragraph-lg' },
  'paragraph-md':  { tag: 'p',  cls: 'typography--paragraph-md' },
  'paragraph-sm':  { tag: 'p',  cls: 'typography--paragraph-sm' },
  'paragraph-xsm': { tag: 'p',  cls: 'typography--paragraph-xsm' },
};

/**
 * Typography atom — renders text with the BuildParty type scale.
 * Defaults to the semantically correct HTML element for each variant
 * (h1–h6 for headings, p for paragraphs) but can be overridden with `as`.
 *
 * @param {object}  props
 * @param {'H1'|'H2'|'H3'|'H4'|'H5'|'H6'|'paragraph-lg'|'paragraph-md'|'paragraph-sm'|'paragraph-xsm'} [props.variant='paragraph-md']
 * @param {string}  [props.as]        - Override the rendered HTML element
 * @param {import('react').ReactNode} [props.children]
 * @param {string}  [props.className]
 */
export function Typography({ variant = 'paragraph-md', as, children, className, ...rest }) {
  const config = VARIANT_MAP[variant] ?? VARIANT_MAP['paragraph-md'];
  const Tag = as ?? config.tag;

  return (
    <Tag
      className={['typography', config.cls, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
