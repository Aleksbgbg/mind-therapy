import { Language } from "@/utils/language/languages";

export type TranslationName = symbol;

export interface Translation {
  readonly name: TranslationName;

  readonly [Language.En]: string;
  readonly [Language.Kr]: string;
}
