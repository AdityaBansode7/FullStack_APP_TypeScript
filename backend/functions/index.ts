import * as functions from "firebase-functions";
import { createUser } from "./createUser";
import { getUsers } from "./getUsers";
import { updateUser } from "./updateUser";
import { deleteUser } from "./deleteUser";

export const apiCreateUser = functions.https.onRequest(createUser);
export const apiGetUsers = functions.https.onRequest(getUsers);
export const apiUpdateUser = functions.https.onRequest(updateUser);
export const apiDeleteUser = functions.https.onRequest(deleteUser);
