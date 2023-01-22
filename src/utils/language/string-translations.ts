import { Language } from "@/utils/language/language";
import { Translation } from "@/utils/language/translation";

// Symbol keys required to prevent new symbols being generated on hot reload
export const DESCRIPTION_HEADING = Symbol.for("DESCRIPTION_HEADING");
export const DESCRIPTION_BUTTON_ATTEND = Symbol.for("DESCRIPTION_BUTTON_ATTEND");
export const ATTEND_REASON_1_TITLE = Symbol.for("ATTEND_REASON_1_TITLE");
export const ATTEND_REASON_1_BODY = Symbol.for("ATTEND_REASON_1_BODY");
export const ATTEND_REASON_2_TITLE = Symbol.for("ATTEND_REASON_2_TITLE");
export const ATTEND_REASON_2_BODY = Symbol.for("ATTEND_REASON_2_BODY");
export const ATTEND_REASON_3_TITLE = Symbol.for("ATTEND_REASON_3_TITLE");
export const ATTEND_REASON_3_BODY = Symbol.for("ATTEND_REASON_3_BODY");
export const MAP_SECTION_TITLE = Symbol.for("MAP_SECTION_TITLE");
export const MAP_TITLE = Symbol.for("MAP_TITLE");
export const MAP_LOCATION = Symbol.for("MAP_LOCATION");
export const MAP_GO = Symbol.for("MAP_GO");

export const TRANSLATIONS: Translation[] = [
  {
    name: DESCRIPTION_HEADING,
    [Language.En]: "MindArt:",
    [Language.Kr]: "마인드아트는",
  },
  {
    name: DESCRIPTION_BUTTON_ATTEND,
    [Language.En]: "Visit now!",
    [Language.Kr]: "다녀 보자!",
  },
  {
    name: ATTEND_REASON_1_TITLE,
    [Language.En]: "Make lifelong friends",
    [Language.Kr]: "평생의 친구 만나요",
  },
  {
    name: ATTEND_REASON_1_BODY,
    [Language.En]:
      "By spending time with kind, like-minded people, you can find a support network to better deal with loneliness",
    [Language.Kr]: "같은 마음을 가진 착한 분들과 시간을 보내 친구하게 되니 서로서로 기댐에 외로움을 떠날 수 있습니다",
  },
  {
    name: ATTEND_REASON_2_TITLE,
    [Language.En]: "Support your community",
    [Language.Kr]: "동네를 응원해요",
  },
  {
    name: ATTEND_REASON_2_BODY,
    [Language.En]:
      "A place for local community members of all ages and walks of life to congregate, get to know eachother, and form a tight-knit bond",
    [Language.Kr]:
      "나이와 삶의 경험 개의치 않게 동네 시민(아이, 젊은이, 어른, 또는 어르신)들이 모을 수 있는 장소 돼서 더 친하고 가까운 동네 됩니다",
  },
  {
    name: ATTEND_REASON_3_TITLE,
    [Language.En]: "Express your emotions with art",
    [Language.Kr]: "미술로 마음을 표현해요",
  },
  {
    name: ATTEND_REASON_3_BODY,
    [Language.En]:
      "Following the instruction of a psychologyst, reduce the burden of your worries, pain, and emotions by finding a new home for them on the canvas",
    [Language.Kr]: "정신의사의 가르침을 따라서 마음의 고민, 상쳐, 감정, 정신에 무겁지 않도록 캔버스에 그려서 묻습니다",
  },
  {
    name: MAP_SECTION_TITLE,
    [Language.En]: "How do I get to MindArt?",
    [Language.Kr]: "길 찾으시나요?",
  },
  {
    name: MAP_TITLE,
    [Language.En]: "MindArt Studio",
    [Language.Kr]: "마인드아트 마음 치료 작업실",
  },
  {
    name: MAP_LOCATION,
    [Language.En]: "40 Gireum-ro 9-gil, Seongbuk-gu, Seoul",
    [Language.Kr]: "서울특별시 성북구 40길음로 9길",
  },
  {
    name: MAP_GO,
    [Language.En]: "Directions",
    [Language.Kr]: "바로 가기",
  },
];
