import { library } from "@fortawesome/fontawesome-svg-core";
import { faDiamondTurnRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";

for (const icon of [faLocationDot, faDiamondTurnRight]) {
  library.add(icon);
}
