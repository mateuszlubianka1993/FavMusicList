import ENFlag from "@/assets/languages/EN.png";
import PLFlag from "@/assets/languages/PL.png";
import { LanguageOption } from "@/lib/types/language";

export const LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    label: "English",
    flag: ENFlag,
  },
  {
    code: "pl",
    label: "Polski",
    flag: PLFlag,
  },
];
