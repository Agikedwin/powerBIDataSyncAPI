import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const HtsReferral = objectType({
  name: "HtsReferral", // <- Name of your type
  definition(t) {
    t.nullable.string("patient_id");
    t.nullable.int("visit_id");
    t.nullable.int("encounter_id");
    t.nullable.string("encounter_uuid");
    t.nullable.int("encounter_location");
    t.nullable.int("creator");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.string("visit_date");
    t.nullable.string("facility_referred_to");
    t.nullable.string("date_to_enrol");
    t.nullable.string("remarks");
    t.nullable.int("voided");
  },
});

export const HtsReferralQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHtsReferral", {
      type: "HtsReferral",
      resolve(parent, args, context) {
        console.log("Fetching HtsReferral ...");
        return context.prisma.HtsReferral.findMany();
      },
    });
  },
});
