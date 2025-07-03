import * as admin from "firebase-admin";
import { Request, Response } from "express";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

export const createUser = async (req: Request, res: Response) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({ message: "Missing name or email" });
    return;
  }

  const newUser = await db.collection("users").add({ name, email });
  const userData = { id: newUser.id, name, email };

  res.status(201).json(userData);
};
