import * as admin from "firebase-admin";
import { Request, Response } from "express";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

export const deleteUser = async (req: Request, res: Response) => {
  if (req.method !== "DELETE") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: "Missing id" });
    return;
  }

  await db.collection("users").doc(id).delete();
  res.status(200).json({ message: "User deleted", id });
};
