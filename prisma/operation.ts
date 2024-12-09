import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const assessments = await prisma.assessment.findMany();
      res.status(200).json(assessments);
      break;
    case "PUT":
      const { id, status, score } = req.body;
      const updatedAssessment = await prisma.assessment.update({
        where: { id },
        data: { status, score },
      });
      res.status(200).json(updatedAssessment);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
