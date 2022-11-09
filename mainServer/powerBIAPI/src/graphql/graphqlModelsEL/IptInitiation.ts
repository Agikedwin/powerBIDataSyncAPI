import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const IptInitiation = objectType({
  name: "IptInitiation", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.int("encounter_id");
    t.nullable.int("patient_id");
    t.nullable.int("location_id");
    t.nullable.string("visit_date");
    t.nullable.int("encounter_provider");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("ipt_indication");
    t.nullable.string("sub_county_reg_number");
    t.nullable.string("sub_county_reg_date");
    t.nullable.int("voided");
  },
});

export const IptInitiationQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getIptInitiation", {
      type: "IptInitiation",
      resolve(parent, args, context) {
        console.log("Fetching IptInitiation ...");
        return context.prisma.iptInitiation.findMany();
      },
    });
  },
});
