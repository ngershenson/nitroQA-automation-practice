// Used to store any string constants we needs to share with all of the files
import path from "path";

export const NITRO_ID_LOGIN = "https://id.powerhrg.com/login";
export const SESSION_FILE = path.resolve(__dirname, "session.json");
export const BASE_URL = process.env.BASE_URL || "https://nitroqa.powerhrg.com";