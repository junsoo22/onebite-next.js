import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
