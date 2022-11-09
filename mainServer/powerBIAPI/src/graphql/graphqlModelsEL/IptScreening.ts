import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const IptScreening = objectType({
  name: "IptScreening", // <- Name of your type
  definition(t) {
    t.nullable.int("uuid");
    t.nullable.string("provider");
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("encounter_id");
    t.nullable.int("obs_id");
    t.nullable.int("cough");
    t.nullable.int("fever");
    t.nullable.int("weight_loss_poor_gain");
    t.nullable.int("night_sweats");
    t.nullable.int("contact_with_tb_case");
    t.nullable.int("lethargy");
    t.nullable.int("yellow_urine");
    t.nullable.int("numbness_bs_hands_feet");
    t.nullable.int("eyes_yellowness");
    t.nullable.int("upper_rightQ_abdomen_tenderness");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("voided");
  },
});

export const IptScreeningQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getIptScreening", {
      type: "IptScreening",
      resolve(parent, args, context) {
        console.log("Fetching IptScreening ...");
        return context.prisma.IptScreening.findMany();
      },
    });
  },
});
