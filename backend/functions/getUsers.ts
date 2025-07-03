import * as admin from "firebase-admin";
import { Request, Response } from "express";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

export const getUsers = async (req: Request, res: Response) => {
  const snapshot = await db.collection("users").get();

  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).json(users);
};
