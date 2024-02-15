/**
 * Definitions of web component types
 */
import { JSX } from "preact";
import { LitElement } from "https://esm.sh/lit@3.1.0";
import { TableDataItem } from "../components/wc/MyTable.ts";

interface HelloWCProps extends JSX.HTMLAttributes<HTMLElement> {
  message?: string;
}

interface CounterWCProps extends JSX.HTMLAttributes<HTMLElement> {
  initialCount?: number;
}

interface ToolTip extends JSX.HTMLAttributes<HTMLElement> {
  tip: string;
}

interface MyTableWC extends JSX.HTMLAttributes<HTMLElement> {
  "data-feed": [TableDataItem];
}

interface SparklyText extends JSX.HTMLAttributes<HTMLElement> {
  "number-of-sparkles": string;
}

interface MyLitMessage extends JSX.HTMLAttributes<LitElement> {
  message: string;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "hello-wc": HelloWCProps;
      "counter-wc": CounterWCProps;
      "tool-tip": ToolTip;
      "my-table": MyTableWC;
      "lit-counter": JSX.HTMLAttributes<LitElement>;
      "my-lit-message": MyLitMessage;
      "custom-alert": JSX.HTMLAttributes<LitElement>;
      "sparkly-text": SparklyText;
      "two-up": JSX.HTMLAttributes<HTMLElement>;
      "emoji-picker-wrapper": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}
