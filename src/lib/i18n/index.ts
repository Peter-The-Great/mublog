import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import en from "./en.json";

import dayjs from "dayjs";
import relTime from "dayjs/plugin/relativeTime";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: getLocaleFromNavigator() });

dayjs.extend(relTime);
