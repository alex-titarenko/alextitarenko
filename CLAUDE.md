# CLAUDE.md

## JSX Text Content

Always escape special characters in JSX text content:
- Apostrophes: use `&apos;` instead of `'`
- Double quotes: use `&quot;` instead of `"`
- Greater than: use `&gt;` instead of `>`
- Left curly brace: use `{'{}'}` instead of `{`

This avoids `react/no-unescaped-entities` lint errors.
