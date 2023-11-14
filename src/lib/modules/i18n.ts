import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import en from "../i18n/en.json";
import nl from "../i18n/nl.json";

import dayjs from "dayjs";
import relTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";
import "dayjs/locale/nl";

export function initI18n() {
  const locale = getLocaleFromNavigator() ?? "en";

  addMessages("en", en);
  addMessages("nl", nl);

  init({ fallbackLocale: "en", initialLocale: locale });

  dayjs.extend(relTime);
  dayjs.extend(localizedFormat);
  dayjs.locale(locale);
}
