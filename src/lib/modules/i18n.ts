import { init, addMessages, locale as i18nLocale } from "svelte-i18n";
import { writable } from "svelte/store";

import en from "../i18n/en.json";
import nl from "../i18n/nl.json";

import dayjs from "dayjs";
import relTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";
import "dayjs/locale/nl";

import type { PostMeta } from "./post";

export type Locale = {
  code: string;
  messages: any;
  flag: string;
};

export const locales: Record<string, Locale> = {
  en: {
    code: "en",
    messages: en,
    flag: "🇬🇧",
  },
  nl: {
    code: "nl",
    messages: nl,
    flag: "🇳🇱",
  },
};

export const locale = writable<Locale | undefined>(locales.en);

export function hasLangMismatch(
  locale: Locale | undefined,
  post: PostMeta
): boolean {
  return !!locale && post.language !== locale.code;
}

export function initI18n() {
  for (const locale in locales) {
    addMessages(locale, locales[locale].messages);
  }

  locale.subscribe((l) => {
    if (!l) {
      return;
    }
    i18nLocale.set(l.code);
  });

  init({ fallbackLocale: "en", initialLocale: "en" });

  dayjs.extend(relTime);
  dayjs.extend(localizedFormat);
  dayjs.locale(locales.en.code);
}
