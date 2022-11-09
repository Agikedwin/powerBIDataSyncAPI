import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const HeiImmunization = objectType({
  name: "HeiImmunization", // <- Name of your type
  definition(t) {
    t.nullable.int("encounter_id");
    t.nullable.int("patient_id");
    t.nullable.string("visit_date");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("created_by");
    t.nullable.int("BCG");
    t.nullable.string("OPV_birth");
    t.nullable.string("OPV_1");
    t.nullable.string("OPV_2");
    t.nullable.string("OPV_3");
    t.nullable.string("IPV");
    t.nullable.string("DPT_Hep_B_Hib_1");
    t.nullable.string("DPT_Hep_B_Hib_2");
    t.nullable.string("DPT_Hep_B_Hib_3");
    t.nullable.string("PCV_10_1");
    t.nullable.string("PCV_10_2");
    t.nullable.string("PCV_10_3");
    t.nullable.string("ROTA_1");
    t.nullable.string("ROTA_2");
    t.nullable.string("Measles_rubella_1");
    t.nullable.string("Measles_rubella_2");
    t.nullable.string("Yellow_fever");
    t.nullable.string("Measles_6_months");
    t.nullable.string("VitaminA_6_months");
    t.nullable.string("VitaminA_1_yr");
    t.nullable.string("VitaminA_1_and_half_yr");
    t.nullable.string("VitaminA_2_yr");
    t.nullable.string("VitaminA_2_to_5_yr");
    t.nullable.string("fully_immunized");
  },
});

export const HeiImmunizationQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHeiImmunization", {
      type: "HeiImmunization",
      resolve(parent, args, context) {
        console.log("Fetching HeiImmunization ...");
        return context.prisma.heiImmunization.findMany();
      },
    });
  },
});
