import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDiamondTurnRight,
  faLocationDot,
  faPaintBrush,
  faPeopleArrows,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const ICONS = [faLocationDot, faDiamondTurnRight, faPeopleArrows, faPeopleGroup, faPaintBrush];

for (const icon of ICONS) {
  library.add(icon);
}
