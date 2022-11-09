import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const LastMonthNewlyEnrolledInCare = objectType({
  name: "LastMonthNewlyEnrolledInCare", // <- Name of your type
  definition(t) {
    t.nullable.string("patient_id");
  },
});

export const LastMonthNewlyEnrolledInCareQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getLastMonthNewlyEnrolledInCare", {
      type: "LastMonthNewlyEnrolledInCare",
      resolve(parent, args, context) {
        console.log("Fetching LastMonthNewlyEnrolledInCare ...");
        return context.prisma.lastMonthNewlyEnrolledInCare.findMany();
      },
    });
  },
});
