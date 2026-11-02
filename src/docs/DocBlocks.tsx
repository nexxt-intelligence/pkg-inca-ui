// Building blocks for the MDX docs pages (Getting Started, Tokens, Typography).
// The token tables read src/tokens.css directly, so they always match the code.
import { type ReactNode, useEffect, useState } from 'react';

import { theme } from '../constants/theme';
import { Text, Title } from '../index';
import tokensCss from '../tokens.css?raw';

type Token = { group: string; name: string; value: string };

const parseTokens = (css: string): Token[] => {
    const tokens: Token[] = [];
    let group = '';

    // Prettier wraps long values like var(\n --x,\n fallback\n); put them back on one line
    const unwrapped = css
        .replace(/\(\s*\n\s*/g, '(')
        .replace(/,\s*\n\s*/g, ', ')
        .replace(/\s*\n\s*\)/g, ')');

    for (const line of unwrapped.split('\n')) {
        const subgroup = line.match(/^\s*\/\*\s*([^─*]+?)\s*\*\/\s*$/);
        if (subgroup) {
            group = subgroup[1];
            continue;
        }
        if (/^\s*\/\*\s*─/.test(line)) {
            group = '';
            continue;
        }
        const token = line.match(/^\s*(--[\w-]+):\s*([^;]+);/);
        if (token) {
            tokens.push({ group, name: token[1], value: token[2].trim() });
        }
    }

    return tokens;
};

const TOKENS = parseTokens(tokensCss);

/** Mantine prop key for a scale token, e.g. --spacing-md → md, --shadow-1 → sm. */
const mantineKey = (name: string) => {
    if (name === '--shadow-1') return 'sm';
    if (name === '--shadow-2') return 'md';
    return name.replace(/^--(spacing|radius|font-size)-/, '');
};

/** Sizes show px first, then rem, e.g. 16px (1rem). Accepts either unit. */
const formatSize = (value: string) => {
    const match = value.match(/^(-?[\d.]+)(px|rem)$/);
    if (!match) return value;
    const px = Number(match[1]) * (match[2] === 'rem' ? 16 : 1);
    return px === 0 ? '0px' : `${px}px (${px / 16}rem)`;
};

/** The value the browser actually uses (after var() fallbacks are resolved). */
const useResolvedValue = (name: string) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(
            getComputedStyle(document.documentElement)
                .getPropertyValue(name)
                .trim()
        );
    }, [name]);

    return value;
};

const cellStyle = {
    borderBottom: '1px solid var(--border-default)',
    padding: 'var(--spacing-xs) var(--spacing-sm)',
    textAlign: 'left' as const,
    verticalAlign: 'middle' as const
};

/** Plain table (Storybook MDX has no GitHub-style markdown tables). */
export const Table = ({
    head,
    rows
}: {
    head: ReactNode[];
    rows: ReactNode[][];
}) => (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
            <tr>
                {head.map((cell, i) => (
                    <th key={i} style={cellStyle}>
                        {cell}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, i) => (
                <tr key={i}>
                    {row.map((cell, j) => (
                        <td key={j} style={cellStyle}>
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

const Preview = ({ name }: { name: string }) => {
    const value = `var(${name})`;

    if (name.startsWith('--spacing-')) {
        return (
            <div
                style={{
                    background: 'var(--bg-accent)',
                    borderRadius: 'var(--radius-xs)',
                    height: 12,
                    width: value
                }}
            />
        );
    }
    if (name.startsWith('--radius-')) {
        return (
            <div
                style={{
                    background: 'var(--bg-accent-light)',
                    border: '1px solid var(--border-accent)',
                    borderRadius: value,
                    height: 40,
                    width: 64
                }}
            />
        );
    }
    if (name.startsWith('--font-size-')) {
        return <span style={{ fontSize: value }}>Aa</span>;
    }
    if (name.startsWith('--font-family-')) {
        return <span style={{ fontFamily: value, fontSize: 20 }}>Aa 123</span>;
    }
    if (name.startsWith('--font-weight-')) {
        return <span style={{ fontSize: 20, fontWeight: value }}>Aa</span>;
    }
    if (name.startsWith('--line-height-')) {
        return (
            <div
                style={{
                    background: 'var(--bg-accent-light)',
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: value,
                    width: 64
                }}
            >
                Line one
                <br />
                Line two
            </div>
        );
    }
    if (name.startsWith('--shadow-')) {
        return (
            <div
                style={{
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: value,
                    height: 40,
                    width: 64
                }}
            />
        );
    }
    return (
        <div
            style={{
                background: value,
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                height: 24,
                width: 40
            }}
        />
    );
};

const TokenRow = ({ token, withKey }: { token: Token; withKey: boolean }) => {
    const resolved = useResolvedValue(token.name);
    const value = /^--(spacing|radius|font-size)-/.test(token.name)
        ? formatSize(resolved)
        : resolved;

    return (
        <tr>
            <td style={cellStyle}>
                <Preview name={token.name} />
            </td>
            <td style={cellStyle}>
                <code>{token.name}</code>
            </td>
            {withKey && (
                <td style={cellStyle}>
                    <code>{mantineKey(token.name)}</code>
                </td>
            )}
            <td style={cellStyle}>
                <code>{value || token.value}</code>
            </td>
        </tr>
    );
};

/** Every token in src/tokens.css whose name starts with `prefix`, e.g. "--bg-". */
export const TokenTable = ({ prefix }: { prefix: string }) => {
    const tokens = TOKENS.filter((token) => token.name.startsWith(prefix));
    const withKey = /^--(spacing|radius|font-size|shadow)-/.test(prefix);
    const columns = withKey ? 4 : 3;
    let lastGroup = '';

    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    <th style={cellStyle} />
                    <th style={cellStyle}>Token</th>
                    {withKey && <th style={cellStyle}>Mantine key</th>}
                    <th style={cellStyle}>Value</th>
                </tr>
            </thead>
            <tbody>
                {tokens.flatMap((token) => {
                    const rows = [];
                    if (token.group && token.group !== lastGroup) {
                        rows.push(
                            <tr key={`group-${token.group}`}>
                                <td colSpan={columns} style={cellStyle}>
                                    <strong>{token.group}</strong>
                                </td>
                            </tr>
                        );
                    }
                    lastGroup = token.group;
                    rows.push(
                        <TokenRow
                            key={token.name}
                            token={token}
                            withKey={withKey}
                        />
                    );
                    return rows;
                })}
            </tbody>
        </table>
    );
};

/** The Mantine theme palettes (for `color="red"`-style props). */
export const Palette = () => (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
            {Object.entries(theme.colors ?? {}).map(([name, shades]) => (
                <tr key={name}>
                    <td style={cellStyle}>
                        <code>{name}</code>
                    </td>
                    {(shades ?? []).map((shade, i) => (
                        <td key={i} style={{ ...cellStyle, padding: 2 }}>
                            <div
                                style={{
                                    background: shade,
                                    borderRadius: 'var(--radius-xs)',
                                    height: 32
                                }}
                                title={`${name}.${i} ${shade}`}
                            />
                            <div style={{ fontSize: 'var(--font-size-2xs)' }}>
                                {i}
                            </div>
                            <code
                                style={{
                                    color: 'var(--text-subtle)',
                                    fontSize: 'var(--font-size-2xs)'
                                }}
                            >
                                {String(shade).toLowerCase()}
                            </code>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

// ─── Typography ─────────────────────────────────────────────────────────

const specimenStyle = {
    alignItems: 'center',
    background: 'var(--bg-base)',
    borderRadius: 'var(--radius-lg)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--spacing-xs)',
    justifyContent: 'center',
    minHeight: 160,
    padding: 'var(--spacing-2xl)'
};

/** Big specimen of a typeface, e.g. Source Sans 3. */
export const TypefaceCard = ({
    family,
    name,
    weight = 400
}: {
    family: string;
    name: string;
    weight?: number;
}) => (
    <div style={specimenStyle}>
        <span
            style={{
                color: 'var(--text-default)',
                fontFamily: `var(${family})`,
                fontSize: 32,
                fontWeight: weight
            }}
        >
            {name}
        </span>
    </div>
);

const Chip = ({ children }: { children: ReactNode }) => (
    <span
        style={{
            background: 'var(--bg-medium)',
            borderRadius: 'var(--radius-xl)',
            color: 'var(--text-inverse)',
            fontSize: 'var(--font-size-xs)',
            padding: 'var(--spacing-3xs) var(--spacing-sm)'
        }}
    >
        {children}
    </span>
);

/** "Heading xs Bold" = role + size + weight. */
export const NamingRule = () => (
    <div style={specimenStyle}>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            {[
                ['Heading', 'Role'],
                ['xs', 'Size'],
                ['Bold', 'Weight']
            ].map(([word, part]) => (
                <div
                    key={part}
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-xs)'
                    }}
                >
                    <span
                        style={{
                            color: 'var(--text-default)',
                            fontSize: 40,
                            lineHeight: 'var(--line-height-heading)'
                        }}
                    >
                        {word}
                    </span>
                    <Chip>{part}</Chip>
                </div>
            ))}
        </div>
    </div>
);

const WEIGHTS = {
    Bold: 700,
    Medium: 500,
    Regular: 400,
    'Semi-Bold': 600
} as const;

type TextStyle = {
    code: string;
    lineHeight: string;
    name: string;
    render: (weight: number) => ReactNode;
    size: number;
    weights: WeightName[];
};

type WeightName = keyof typeof WEIGHTS;

const MONO = 'var(--font-family-mono)';

// Sizes and line heights are read from the theme, so this table can't drift from it.
const toPx = (value: unknown) =>
    parseFloat(String(value)) * (String(value).endsWith('rem') ? 16 : 1);
const toLineHeight = (lineHeight: unknown) => String(Number(lineHeight));

const headingSizes = [
    ['xl', 1],
    ['lg', 2],
    ['md', 3],
    ['sm', 4],
    ['xs', 5],
    ['2xs', 6]
] as const;

const bodySizes = ['xl', 'lg', 'md', 'sm', 'xs', '2xs'] as const;
const bodyLineHeight = toLineHeight(theme.lineHeight);

const TEXT_STYLES: TextStyle[] = [
    ...headingSizes.map(([name, order]) => ({
        code: `<Title order={${order}}>`,
        lineHeight: toLineHeight(
            theme.headings?.sizes?.[`h${order}`]?.lineHeight
        ),
        name: `Heading/${name}`,
        render: (weight: number) => (
            <Title fw={weight} order={order}>
                Heading/{name}
            </Title>
        ),
        size: toPx(theme.headings?.sizes?.[`h${order}`]?.fontSize),
        weights: ['Medium', 'Semi-Bold', 'Bold'] as WeightName[]
    })),
    ...bodySizes.map((key) => ({
        code: `<Text size="${key}">`,
        lineHeight: bodyLineHeight,
        name: `Body/${key}`,
        render: (weight: number) => (
            <Text fw={weight} size={key}>
                Body/{key}
            </Text>
        ),
        size: toPx(theme.fontSizes?.[key]),
        weights: ['Regular', 'Medium', 'Semi-Bold'] as WeightName[]
    })),
    ...bodySizes.map((key) => ({
        code: `<Text size="${key}" tt="uppercase">`,
        lineHeight: bodyLineHeight,
        name: `Uppercase/${key}`,
        render: (weight: number) => (
            <Text fw={weight} size={key} tt="uppercase">
                Uppercase/{key}
            </Text>
        ),
        size: toPx(theme.fontSizes?.[key]),
        weights: ['Regular', 'Semi-Bold'] as WeightName[]
    })),
    ...bodySizes.slice(3).map((key) => ({
        code: `<Text ff="${MONO}" size="${key}">`,
        lineHeight: bodyLineHeight,
        name: `Code/${key}`,
        render: (weight: number) => (
            <Text ff={MONO} fw={weight} size={key}>
                Code/{key}
            </Text>
        ),
        size: toPx(theme.fontSizes?.[key]),
        weights: ['Regular', 'Medium', 'Semi-Bold'] as WeightName[]
    }))
];

/** Every text style from the design, rendered with the real components. */
export const TextStyleTable = () => (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
            <tr>
                {['Style', 'Size', 'Weight', 'Line height', 'Use'].map(
                    (head) => (
                        <th key={head} style={cellStyle}>
                            {head}
                        </th>
                    )
                )}
            </tr>
        </thead>
        <tbody>
            {TEXT_STYLES.map((style) => (
                <tr key={style.name}>
                    <td style={cellStyle}>
                        {style.render(
                            WEIGHTS[style.weights[style.weights.length - 1]]
                        )}
                    </td>
                    <td style={cellStyle}>{style.size}px</td>
                    <td style={cellStyle}>
                        {style.weights.map((weight) => (
                            <div
                                key={weight}
                                style={{
                                    fontFamily: style.name.startsWith('Code')
                                        ? MONO
                                        : undefined,
                                    fontSize: 'var(--font-size-xs)',
                                    fontWeight: WEIGHTS[weight]
                                }}
                            >
                                {weight}
                            </div>
                        ))}
                    </td>
                    <td style={cellStyle}>{style.lineHeight}</td>
                    <td style={cellStyle}>
                        <code>{style.code}</code>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

/** The four weights, with their token and prop. */
export const WeightTable = () => (
    <Table
        head={['Weight', 'Token', 'Prop', '']}
        rows={(Object.keys(WEIGHTS) as WeightName[])
            .sort((a, b) => WEIGHTS[a] - WEIGHTS[b])
            .map((name) => [
                `${name} (${WEIGHTS[name]})`,
                <code>{`--font-weight-${name
                    .toLowerCase()
                    .replace('-', '')}`}</code>,
                <code>{`fw={${WEIGHTS[name]}}`}</code>,
                <span style={{ fontSize: 20, fontWeight: WEIGHTS[name] }}>
                    The quick brown fox
                </span>
            ])}
    />
);

/* ─── Cheat sheet ──────────────────────────────────────────── */

/** Every token's value as the browser resolves it (our theme, via the provider). */
const useResolvedTokens = () => {
    const [values, setValues] = useState<Record<string, string>>({});

    useEffect(() => {
        const style = getComputedStyle(document.documentElement);
        setValues(
            Object.fromEntries(
                TOKENS.map((token) => [
                    token.name,
                    style.getPropertyValue(token.name).trim()
                ])
            )
        );
    }, []);

    return values;
};

/** How to use a token in component props, e.g. --spacing-md → "md", --font-weight-bold → fw={700}. */
const propFor = (token: Token) => {
    if (token.name.startsWith('--font-weight-')) return `fw={${token.value}}`;
    if (/^--(spacing|radius|font-size|shadow)-/.test(token.name)) {
        return `"${mantineKey(token.name)}"`;
    }
    return '—';
};

/** Value → token → prop, for every token whose name starts with `prefix`. */
export const LookupTable = ({ prefix }: { prefix: string }) => {
    const values = useResolvedTokens();
    const tokens = TOKENS.filter((token) => token.name.startsWith(prefix));

    return (
        <Table
            head={['Value in the design', 'Token (CSS)', 'Mantine key (props)']}
            rows={tokens.map((token) => [
                <code key="value">
                    {formatSize(values[token.name] ?? '') || token.value}
                </code>,
                <code key="token">{`var(${token.name})`}</code>,
                <code key="prop">{propFor(token)}</code>
            ])}
        />
    );
};

/** Heading font sizes, which use `Title` instead of a token. */
export const HeadingLookup = () => (
    <Table
        head={['Value in the design', 'Text style', 'Component']}
        rows={headingSizes.map(([name, order]) => [
            <code key="value">
                {formatSize(
                    `${toPx(theme.headings?.sizes?.[`h${order}`]?.fontSize)}px`
                )}
            </code>,
            `Heading/${name}`,
            <code key="component">{`<Title order={${order}}>`}</code>
        ])}
    />
);

/** Hex → every color token that uses it. */
export const ColorLookup = () => {
    const values = useResolvedTokens();
    const byValue = new Map<string, string[]>();

    TOKENS.filter((token) =>
        /^--(bg|text|icon|border)-/.test(token.name)
    ).forEach((token) => {
        const value = (values[token.name] || '').toLowerCase();
        byValue.set(value, [...(byValue.get(value) ?? []), token.name]);
    });

    return (
        <Table
            head={['', 'Value in the design', 'Tokens']}
            rows={[...byValue].map(([value, names]) => [
                <div
                    key="swatch"
                    style={{
                        background: value,
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-sm)',
                        height: 24,
                        width: 40
                    }}
                />,
                <code key="value">{value}</code>,
                <span key="tokens">
                    {names.map((name, i) => (
                        <span key={name}>
                            {i > 0 && ', '}
                            <code>{name}</code>
                        </span>
                    ))}
                </span>
            ])}
        />
    );
};
