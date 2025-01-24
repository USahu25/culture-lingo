import { RegionQuestions } from "./types";
import { tamilNaduQuestions } from "./states/tamilNadu";
import { keralaQuestions } from "./states/kerala";
import { karnatakaQuestions } from "./states/karnataka";
import { maharashtraQuestions } from "./states/maharashtra";
import { punjabQuestions } from "./states/punjab";
import { bengalQuestions } from "./states/bengal";

export const questionsData: RegionQuestions = {
  "Tamil Nadu": tamilNaduQuestions,
  "Kerala": keralaQuestions,
  "Karnataka": karnatakaQuestions,
  "Maharashtra": maharashtraQuestions,
  "Punjab": punjabQuestions,
  "Bengal": bengalQuestions,
};