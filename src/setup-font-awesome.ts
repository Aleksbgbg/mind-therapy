import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faDiamondTurnRight,
  faLocationDot,
  faPaintBrush,
  faPeopleArrows,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const ICONS = [
  faLocationDot,
  faDiamondTurnRight,
  faPeopleArrows,
  faPeopleGroup,
  faPaintBrush,
  faTwitter,
  faInstagram,
  faFacebook,
];

for (const icon of ICONS) {
  library.add(icon);
}
