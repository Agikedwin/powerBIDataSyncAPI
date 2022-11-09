import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const HtsReferralAndLinkage = objectType({
  name: "HtsReferralAndLinkage", // <- Name of your type
  definition(t) {
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.int("encounter_id");
    t.nullable.string("encounter_uuid");
    t.nullable.int("encounter_location");
    t.nullable.int("creator");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.string("visit_date");
    t.nullable.string("tracing_type");
    t.nullable.string("tracing_status");
    t.nullable.string("ccc_number");
    t.nullable.string("referral_facility");
    t.nullable.string("facility_linked_to");
    t.nullable.string("enrollment_date");
    t.nullable.string("art_start_date");
    t.nullable.string("provider_handed_to");
    t.nullable.string("cadre");
    t.nullable.int("voided");
  },
});

export const HtsReferralAndLinkageQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHtsReferralAndLinkage", {
      type: "HtsReferralAndLinkage",
      resolve(parent, args, context) {
        console.log("Fetching HtsReferralAndLinkage ...");
        return context.prisma.HtsReferralAndLinkage.findMany();
      },
    });
  },
});
