import { Global, css } from "@emotion/react";
import { ReactNode } from "react";

interface GlobalStylesComponentProps {
  children: ReactNode;
}

function GlobalStylesComponent() {
  const globalStyles = css`
    .single-spa-theme {
      box-sizing: border-box;
    }

    .single-spa-theme *,
    .single-spa-theme *:before,
    .single-spa-theme *:after {
      /** Preserve box-sizing when override exists:
   * https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
   * */
      box-sizing: inherit;
    }

    .single-spa-theme {
      --ss-color-background: #ffffff;
      --ss-color-border: rgba(0, 0, 0, 0.25);
      --ss-color-foreground: #1f2937;
      --ss-color-muted: #d1d5db;
      --ss-color-primary: #7963d2;
      --ss-color-secondary: #bcd263;
      --ss-color-primary-text: #fff;
      --ss-color-secondary-text: #fff;
      --ss-color-text: #252103;
      --ss-color-faded: hsla(0, 0%, 13%, 0.9);
      --ss-color-active-background: #111827;
      --ss-color-active-border: hsla(0, 0%, 0%, 0.25);
      --ss-color-active-foreground: hsla(0, 0%, 0%, 1);
      --ss-color-active-muted: hsla(210, 17%, 80%, 1);
      --ss-color-active-primary: hsla(252, 55%, 46%, 1);
      --ss-color-active-secondary: hsla(72, 55%, 46%, 1);
      --ss-color-active-primary-text: #fff;
      --ss-color-active-secondary-text: #000;
      --ss-color-active-text: #000;
      --ss-color-active-faded: hsla(0, 0%, 13%, 0.9);
      --ss-color-hover-background: hsla(0, 0%, 93%, 1);
      --ss-color-hover-border: hsla(0, 0%, 0%, 0.25);
      --ss-color-hover-foreground: hsla(0, 0%, 0%, 1);
      --ss-color-hover-muted: #374151;
      --ss-color-hover-primary: hsla(252, 55%, 53%, 1);
      --ss-color-hover-secondary: hsla(72, 55%, 53%, 1);
      --ss-color-hover-primary-text: #fff;
      --ss-color-hover-secondary-text: #000;
      --ss-color-hover-text: #000;
      --ss-color-hover-faded: hsla(0, 0%, 13%, 0.9);
      --ss-color-shadow-1: rgba(10, 31, 68, 0.08);
      --ss-color-shadow-2: rgba(10, 31, 68, 0.1);
      --ss-color-shadow-3: rgba(10, 31, 68, 0.12);
      --ss-color-backdrop: rgba(0, 0, 0, 0.9);
      --ss-color-outline: rgba(121, 99, 210, 0.4);
      --ss-color-selection-background: Highlight;
      --ss-color-selection-shadow: inherit;
      --ss-color-selection-text: HighlightText;
      --ss-color-selection-caret: inherit;
      --ss-color-table-default-border: hsla(0, 0%, 80%, 1);
      --ss-color-table-default-cell: hsla(0, 0%, 40%, 1);
      --ss-color-table-default-controller: #dee2e6;
      --ss-color-table-selected-border: #1c7ed6;
      --ss-color-table-selected-cell: #d0ebff;
      --ss-color-table-selected-controller: #339af0;
      --ss-color-table-preselect-border: #1c7ed6;
      --ss-color-table-preselect-cell: hsla(0, 0%, 40%, 1);
      --ss-color-table-preselect-controller: #339af0;
      --ss-color-table-predelete-border: #f03e3e;
      --ss-color-table-predelete-cell: #ffe3e3;
      --ss-color-table-predelete-controller: #ff6b6b;
      --ss-color-table-mark: #91919196;
      --ss-hue-gray-0: #f8f9fa;
      --ss-hue-gray-1: #f1f3f5;
      --ss-hue-gray-2: #e9ecef;
      --ss-hue-gray-3: #dee2e6;
      --ss-hue-gray-4: #ced4da;
      --ss-hue-gray-5: #adb5bd;
      --ss-hue-gray-6: #868e96;
      --ss-hue-gray-7: #495057;
      --ss-hue-gray-8: #343a40;
      --ss-hue-gray-9: #212529;
      --ss-hue-red-0: #fff5f5;
      --ss-hue-red-1: #ffe3e3;
      --ss-hue-red-2: #ffc9c9;
      --ss-hue-red-3: #ffa8a8;
      --ss-hue-red-4: #ff8787;
      --ss-hue-red-5: #ff6b6b;
      --ss-hue-red-6: #fa5252;
      --ss-hue-red-7: #f03e3e;
      --ss-hue-red-8: #e03131;
      --ss-hue-red-9: #c92a2a;
      --ss-hue-pink-0: #fff0f6;
      --ss-hue-pink-1: #ffdeeb;
      --ss-hue-pink-2: #fcc2d7;
      --ss-hue-pink-3: #faa2c1;
      --ss-hue-pink-4: #f783ac;
      --ss-hue-pink-5: #f06595;
      --ss-hue-pink-6: #e64980;
      --ss-hue-pink-7: #d6336c;
      --ss-hue-pink-8: #c2255c;
      --ss-hue-pink-9: #a61e4d;
      --ss-hue-grape-0: #f8f0fc;
      --ss-hue-grape-1: #f3d9fa;
      --ss-hue-grape-2: #eebefa;
      --ss-hue-grape-3: #e599f7;
      --ss-hue-grape-4: #da77f2;
      --ss-hue-grape-5: #cc5de8;
      --ss-hue-grape-6: #be4bdb;
      --ss-hue-grape-7: #ae3ec9;
      --ss-hue-grape-8: #9c36b5;
      --ss-hue-grape-9: #862e9c;
      --ss-hue-violet-0: #f3f0ff;
      --ss-hue-violet-1: #e5dbff;
      --ss-hue-violet-2: #d0bfff;
      --ss-hue-violet-3: #b197fc;
      --ss-hue-violet-4: #9775fa;
      --ss-hue-violet-5: #845ef7;
      --ss-hue-violet-6: #7950f2;
      --ss-hue-violet-7: #7048e8;
      --ss-hue-violet-8: #6741d9;
      --ss-hue-violet-9: #5f3dc4;
      --ss-hue-indigo-0: #edf2ff;
      --ss-hue-indigo-1: #dbe4ff;
      --ss-hue-indigo-2: #bac8ff;
      --ss-hue-indigo-3: #91a7ff;
      --ss-hue-indigo-4: #748ffc;
      --ss-hue-indigo-5: #5c7cfa;
      --ss-hue-indigo-6: #4c6ef5;
      --ss-hue-indigo-7: #4263eb;
      --ss-hue-indigo-8: #3b5bdb;
      --ss-hue-indigo-9: #364fc7;
      --ss-hue-blue-0: #e7f5ff;
      --ss-hue-blue-1: #d0ebff;
      --ss-hue-blue-2: #a5d8ff;
      --ss-hue-blue-3: #74c0fc;
      --ss-hue-blue-4: #4dabf7;
      --ss-hue-blue-5: #339af0;
      --ss-hue-blue-6: #228be6;
      --ss-hue-blue-7: #1c7ed6;
      --ss-hue-blue-8: #1971c2;
      --ss-hue-blue-9: #1864ab;
      --ss-hue-cyan-0: #e3fafc;
      --ss-hue-cyan-1: #c5f6fa;
      --ss-hue-cyan-2: #99e9f2;
      --ss-hue-cyan-3: #66d9e8;
      --ss-hue-cyan-4: #3bc9db;
      --ss-hue-cyan-5: #22b8cf;
      --ss-hue-cyan-6: #15aabf;
      --ss-hue-cyan-7: #1098ad;
      --ss-hue-cyan-8: #0c8599;
      --ss-hue-cyan-9: #0b7285;
      --ss-hue-teal-0: #e6fcf5;
      --ss-hue-teal-1: #c3fae8;
      --ss-hue-teal-2: #96f2d7;
      --ss-hue-teal-3: #63e6be;
      --ss-hue-teal-4: #38d9a9;
      --ss-hue-teal-5: #20c997;
      --ss-hue-teal-6: #12b886;
      --ss-hue-teal-7: #0ca678;
      --ss-hue-teal-8: #099268;
      --ss-hue-teal-9: #087f5b;
      --ss-hue-green-0: #ebfbee;
      --ss-hue-green-1: #d3f9d8;
      --ss-hue-green-2: #b2f2bb;
      --ss-hue-green-3: #8ce99a;
      --ss-hue-green-4: #69db7c;
      --ss-hue-green-5: #51cf66;
      --ss-hue-green-6: #40c057;
      --ss-hue-green-7: #37b24d;
      --ss-hue-green-8: #2f9e44;
      --ss-hue-green-9: #2b8a3e;
      --ss-hue-lime-0: #f4fce3;
      --ss-hue-lime-1: #e9fac8;
      --ss-hue-lime-2: #d8f5a2;
      --ss-hue-lime-3: #c0eb75;
      --ss-hue-lime-4: #a9e34b;
      --ss-hue-lime-5: #94d82d;
      --ss-hue-lime-6: #82c91e;
      --ss-hue-lime-7: #74b816;
      --ss-hue-lime-8: #66a80f;
      --ss-hue-lime-9: #5c940d;
      --ss-hue-yellow-0: #fff9db;
      --ss-hue-yellow-1: #fff3bf;
      --ss-hue-yellow-2: #ffec99;
      --ss-hue-yellow-3: #ffe066;
      --ss-hue-yellow-4: #ffd43b;
      --ss-hue-yellow-5: #fcc419;
      --ss-hue-yellow-6: #fab005;
      --ss-hue-yellow-7: #f59f00;
      --ss-hue-yellow-8: #f08c00;
      --ss-hue-yellow-9: #e67700;
      --ss-hue-orange-0: #fff4e6;
      --ss-hue-orange-1: #ffe8cc;
      --ss-hue-orange-2: #ffd8a8;
      --ss-hue-orange-3: #ffc078;
      --ss-hue-orange-4: #ffa94d;
      --ss-hue-orange-5: #ff922b;
      --ss-hue-orange-6: #fd7e14;
      --ss-hue-orange-7: #f76707;
      --ss-hue-orange-8: #e8590c;
      --ss-hue-orange-9: #d9480f;
      --ss-radius-border: 0.25rem;
      --ss-radius-extra: 0.5rem;
      --ss-radius-circle: 50%;
      --ss-font-family-default: system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      --ss-font-family-heading: inherit;
      --ss-font-family-mono: Menlo, monospace;
      --ss-font-size-0: 12px;
      --ss-font-size-1: 14px;
      --ss-font-size-2: 16px;
      --ss-font-size-3: 20px;
      --ss-font-size-4: 24px;
      --ss-font-size-5: 32px;
      --ss-font-size-6: 48px;
      --ss-font-size-7: 64px;
      --ss-font-size-8: 96px;
      --ss-font-size-default: 16px;
      --ss-space-1: 4px;
      --ss-space-2: 8px;
      --ss-space-3: 16px;
      --ss-space-4: 32px;
      --ss-space-5: 64px;
      --ss-space-6: 128px;
      --ss-space-7: 256px;
      --ss-space-8: 512px;
      --ss-font-weight-bold: 700;
      --ss-font-weight-default: 400;
      --ss-font-weight-heading: 700;
      --ss-letter-spacing-tight: -1px;
      --ss-letter-spacing-default: normal;
      --ss-letter-spacing-loose: 1px;
      --ss-letter-spacing-wide: 3px;
      --ss-line-height-heading: 1.25em;
      --ss-line-height-default: 1.5em;
      --ss-box-shadow-1: 0 1px 1px rgba(10, 31, 68, 0.08);
      --ss-box-shadow-2: 0 1px 1px rgba(10, 31, 68, 0.1);
      --ss-box-shadow-3: 0 1px 1px rgba(10, 31, 68, 0.12);

      font-family: var(--ss-font-family-default);
      line-height: var(--ss-line-height-default);
      font-weight: var(--ss-font-weight-default);
    }

    .single-spa-theme h1,
    .single-spa-theme h2,
    .single-spa-theme h3,
    .single-spa-theme h4,
    .single-spa-theme h5,
    .single-spa-theme h6 {
      color: var(--ss-color-text);
      font-family: var(--ss-font-family-heading);
      line-height: var(--ss-line-height-heading);
      font-weight: var(--ss-font-weight-heading);
    }

    .single-spa-theme h1 {
      font-size: var(--ss-font-size-5);
    }

    .single-spa-theme h2 {
      font-size: var(--ss-font-size-4);
    }

    .single-spa-theme h3 {
      font-size: var(--ss-font-size-3);
    }

    .single-spa-theme h4 {
      font-size: var(--ss-font-size-2);
    }

    .single-spa-theme h5 {
      font-size: var(--ss-font-size-1);
    }

    .single-spa-theme h6 {
      font-size: var(--ss-font-size-0);
    }
  `;
  return <Global styles={globalStyles} />;
}

export default GlobalStylesComponent;
