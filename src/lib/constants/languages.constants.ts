import ENFlag from "@/assets/languages/EN.png";
import PLFlag from "@/assets/languages/PL.png";
import { LanguageOption } from "@/lib/types/language";

export const LANG_CODES = {
  PL: "pl",
  EN: "en",
};

export const LANGUAGES: LanguageOption[] = [
  {
    code: LANG_CODES.PL,
    label: "Polski",
    flag: PLFlag,
  },
  {
    code: LANG_CODES.EN,
    label: "English",
    flag: ENFlag,
  },
];
