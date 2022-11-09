import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const LastMonthNewlyOnArt = objectType({
  name: "LastMonthNewlyOnArt", // <- Name of your type
  definition(t) {
    t.nullable.string("patient_id");
  },
});

export const LastMonthNewlyOnArtQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getLastMonthNewlyOnArt", {
      type: "LastMonthNewlyOnArt",
      resolve(parent, args, context) {
        console.log("Fetching LastMonthNewlyOnArt ...");
        return context.prisma.lastMonthNewlyOnArt.findMany();
      },
    });
  },
});
