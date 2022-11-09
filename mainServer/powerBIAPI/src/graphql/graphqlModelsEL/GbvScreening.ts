import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const GbvScreening = objectType({
  name: "GbvScreening", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.string("provider");
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("encounter_id");
    t.nullable.string("ipv");
    t.nullable.string("physical_ipv");
    t.nullable.string("emotional_ipv");
    t.nullable.string("sexual_ipv");
    t.nullable.string("ipv_relationship");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.string("voided");
  },
});

export const GbvScreeningQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getGbvScreening", {
      type: "GbvScreening",
      resolve(parent, args, context) {
        console.log("Fetching GbvScreening ...");
        return context.prisma.gbvScreening.findMany();
      },
    });
  },
});
