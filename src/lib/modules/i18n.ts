import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";
import { display } from "$lib/modules/config";

import en from "../i18n/en.json";
import nl from "../i18n/nl.json";

import dayjs from "dayjs";
import relTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
import "dayjs/locale/nl";

export function initI18n() {
  const locale = getLocaleFromNavigator() ?? "en";

  addMessages("en", en);
  addMessages("nl", nl);

  for (const loc in display) {
    addMessages(loc, display[loc]);
  }

  init({ fallbackLocale: "en", initialLocale: locale });

  dayjs.extend(relTime);
  dayjs.locale(locale);
}
