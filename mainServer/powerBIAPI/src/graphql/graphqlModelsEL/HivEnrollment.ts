import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const HivEnrollment = objectType({
  name: "HivEnrollment", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("encounter_id");
    t.nullable.int("encounter_provider");
    t.nullable.int("patient_type");
    t.nullable.string("date_first_enrolled_in_care");
    t.nullable.int("entry_point");
    t.nullable.string("transfer_in_date");
    t.nullable.string("facility_transferred_from");
    t.nullable.string("district_transferred_from");
    t.nullable.string("date_started_art_at_transferring_facility");
    t.nullable.string("date_confirmed_hiv_positive");
    t.nullable.string("facility_confirmed_hiv_positive");
    t.nullable.string("previous_regimen");
    t.nullable.int("arv_status");
    t.nullable.int("ever_on_pmtct");
    t.nullable.int("ever_on_pep");
    t.nullable.int("ever_on_prep");
    t.nullable.int("ever_on_haart");
    t.nullable.string("name_of_treatment_supporter");
    t.nullable.int("relationship_of_treatment_supporter");
    t.nullable.string("treatment_supporter_telephone");
    t.nullable.string("treatment_supporter_address");
    t.nullable.int("in_school");
    t.nullable.int("orphan");
    t.nullable.string("date_of_discontinuation");
    t.nullable.string("discontinuation_reason");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("voided");
  },
});

export const HivEnrollmentQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHivEnrollment", {
      type: "HivEnrollment",
      resolve(parent, args, context) {
        console.log("Fetching HivEnrollment ...");
        return context.prisma.hivEnrollment.findMany();
      },
    });
  },
});
