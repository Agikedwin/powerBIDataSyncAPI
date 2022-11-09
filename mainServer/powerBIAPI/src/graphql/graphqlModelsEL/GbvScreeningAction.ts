import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const GbvScreeningAction = objectType({
  name: "GbvScreeningAction", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.int("provider");
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("obs_id");
    t.nullable.string("help_provider");
    t.nullable.string("action_taken");
    t.nullable.string("reason_for_not_reporting");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("voided");
  },
});

export const GbvScreeningActionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getGbvScreeningAction", {
      type: "GbvScreeningAction",
      resolve(parent, args, context) {
        console.log("Fetching GbvScreeningAction ...");
        return context.prisma.gbvScreeningAction.findMany();
      },
    });
  },
});
