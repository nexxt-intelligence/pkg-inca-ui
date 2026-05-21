import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            perfectionist.configs['recommended-alphabetical']
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            '@typescript-eslint/no-explicit-any': 'warn',
            'perfectionist/sort-imports': 'warn',
            // Size-scale tokens (none → 3xs → 2xs → xs → sm → md → lg → xl → 2xl → 3xl)
            // must stay in semantic order, not alphabetical.
            // Each step gets its own named group; non-size keys fall into 'unknown' (alpha).
            'perfectionist/sort-objects': [
                'warn',
                {
                    type: 'alphabetical',
                    order: 'asc',
                    customGroups: [
                        { groupName: 'size-none', elementNamePattern: '^none$' },
                        { groupName: 'size-3xs',  elementNamePattern: '^3xs$'  },
                        { groupName: 'size-2xs',  elementNamePattern: '^2xs$'  },
                        { groupName: 'size-xs',   elementNamePattern: '^xs$'   },
                        { groupName: 'size-sm',   elementNamePattern: '^sm$'   },
                        { groupName: 'size-md',   elementNamePattern: '^md$'   },
                        { groupName: 'size-lg',   elementNamePattern: '^lg$'   },
                        { groupName: 'size-xl',   elementNamePattern: '^xl$'   },
                        { groupName: 'size-2xl',  elementNamePattern: '^2xl$'  },
                        { groupName: 'size-3xl',  elementNamePattern: '^3xl$'  }
                    ],
                    groups: [
                        'size-none',
                        'size-3xs', 'size-2xs', 'size-xs',
                        'size-sm', 'size-md', 'size-lg',
                        'size-xl', 'size-2xl', 'size-3xl',
                        'unknown'
                    ]
                }
            ]
        }
    }
);
