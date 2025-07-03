import * as admin from "firebase-admin";
import { Request, Response } from "express";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

export const updateUser = async (req: Request, res: Response) => {
  if (req.method !== "PUT") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { id, name, email } = req.body;

  if (!id || !name || !email) {
    res.status(400).json({ message: "Missing id, name, or email" });
    return;
  }

  await db.collection("users").doc(id).update({ name, email });
  res.status(200).json({ id, name, email });
};
