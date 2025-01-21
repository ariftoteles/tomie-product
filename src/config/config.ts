import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
	dotenv.config({ path: "./.env" });
} else {
	dotenv.config();
}

export const PORT = Number(process.env.PORT || 3000);
export const FAKESTORE_API = process.env.FAKESTORE_API
