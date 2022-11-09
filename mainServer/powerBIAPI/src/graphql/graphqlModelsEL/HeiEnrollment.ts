import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const HeiEnrollment = objectType({
  name: "HeiEnrollment", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.int("provider");
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("encounter_id");
    t.nullable.int("child_exposed");
    t.nullable.string("hei_id_number");
    t.nullable.int("spd_number");
    t.nullable.int("birth_weight");
    t.nullable.int("gestation_at_birth");
    t.nullable.int("birth_type");
    t.nullable.string("date_first_seen");
    t.nullable.string("birth_notification_number");
    t.nullable.string("birth_certificate_number");
    t.nullable.int("need_for_special_care");
    t.nullable.int("reason_for_special_care");
    t.nullable.int("referral_source");
    t.nullable.int("transfer_in");
    t.nullable.string("transfer_in_date");
    t.nullable.string("facility_transferred_from");
    t.nullable.string("district_transferred_from");
    t.nullable.string("date_first_enrolled_in_hei_care");
    t.nullable.int("arv_prophylaxis");
    t.nullable.int("mother_breastfeeding");
    t.nullable.int("mother_on_NVP_during_breastfeeding");
    t.nullable.int("TB_contact_history_in_household");
    t.nullable.int("infant_mother_link");
    t.nullable.int("mother_alive");
    t.nullable.int("mother_on_pmtct_drugs");
    t.nullable.int("mother_on_drug");
    t.nullable.int("mother_on_art_at_infant_enrollment");
    t.nullable.int("mother_drug_regimen");
    t.nullable.int("infant_prophylaxis");
    t.nullable.string("parent_ccc_number");
    t.nullable.int("mode_of_delivery");
    t.nullable.int("place_of_delivery");
    t.nullable.int("birth_length");
    t.nullable.int("birth_order");
    t.nullable.string("health_facility_name");
    t.nullable.string("date_of_birth_notification");
    t.nullable.string("date_of_birth_registration");
    t.nullable.string("birth_registration_place");
    t.nullable.string("permanent_registration_serial");
    t.nullable.string("mother_facility_registered");
    t.nullable.string("exit_date");
    t.nullable.int("exit_reason");
    t.nullable.string("hiv_status_at_exit");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
  },
});

export const HeiEnrollmentQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHeiEnrollment", {
      type: "HeiEnrollment",
      resolve(parent, args, context) {
        console.log("Fetching HeiEnrollment ...");
        return context.prisma.heiEnrollment.findMany();
      },
    });
  },
});
