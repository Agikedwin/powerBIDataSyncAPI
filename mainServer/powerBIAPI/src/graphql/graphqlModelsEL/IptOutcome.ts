import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const IptOutcome = objectType({
  name: "IptOutcome", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.int("encounter_id");
    t.nullable.int("patient_id");
    t.nullable.int("location_id");
    t.nullable.string("visit_date"); 
    t.nullable.int("encounter_provider");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("outcome");
    t.nullable.int("voided");
  },
});

export const IptOutcomeQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getIptOutcome", {
      type: "IptOutcome",
      resolve(parent, args, context) {
        console.log("Fetching IptOutcome ...");
        return context.prisma.iptOutcome.findMany();
      },
    });
  },
});
