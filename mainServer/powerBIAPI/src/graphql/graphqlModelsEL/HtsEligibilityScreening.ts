import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const HtsEligibilityScreening = objectType({
  name: "HtsEligibilityScreening", // <- Name of your type
  definition(t) {
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.int("encounter_id");
    t.nullable.string("uuid");
    t.nullable.int("location_id");
    t.nullable.int("provider");
    t.nullable.string("visit_date");
    t.nullable.string("population_type");
    t.nullable.string("key_population_type");
    t.nullable.string("priority_population_type");
    t.nullable.int("department");
    t.nullable.int("patient_type");
    t.nullable.int("is_health_worker");
    t.nullable.string("relationship_with_contact");
    t.nullable.int("mother_hiv_status");
    t.nullable.int("tested_hiv_before");
    t.nullable.int("who_performed_test");
    t.nullable.int("test_results");
    t.nullable.string("date_tested");
    t.nullable.int("started_on_art");
    t.nullable.string("upn_number");
    t.nullable.int("ever_had_sex");
    t.nullable.int("sexually_active");
    t.nullable.int("new_partner");
    t.nullable.int("partner_hiv_status");
    t.nullable.int("couple_discordant");
    t.nullable.int("multiple_partners");
    t.nullable.int("number_partners");
    t.nullable.int("alcohol_sex");
    t.nullable.int("money_sex");
    t.nullable.int("condom_burst");
    t.nullable.int("unknown_status_partner");
    t.nullable.int("known_status_partner");
    t.nullable.int("experienced_gbv");
    t.nullable.string("type_of_gbv");
    t.nullable.string("service_received");
    t.nullable.int("currently_on_prep");
    t.nullable.int("recently_on_pep");
    t.nullable.int("recently_had_sti");
    t.nullable.int("tb_screened");
    t.nullable.int("cough");
    t.nullable.int("fever");
    t.nullable.int("weight_loss");
    t.nullable.int("night_sweats");
    t.nullable.int("contact_with_tb_case");
    t.nullable.int("lethargy");
    t.nullable.int("tb_status");
    t.nullable.int("shared_needle");
    t.nullable.int("needle_stick_injuries");
    t.nullable.int("traditional_procedures");
    t.nullable.string("child_reasons_for_ineligibility");
    t.nullable.int("pregnant");
    t.nullable.int("breastfeeding_mother");
    t.nullable.int("eligible_for_test");
    t.nullable.int("referred_for_testing");
    t.nullable.string("reasons_for_ineligibility");
    t.nullable.string("specific_reason_for_ineligibility");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("voided");
  },
});

export const HtsEligibilityScreeningQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHtsEligibilityScreening", {
      type: "HtsEligibilityScreening",
      resolve(parent, args, context) {
        console.log("Fetching HtsEligibilityScreening ...");
        return context.prisma.htsEligibilityScreening.findMany();
      },
    });
  },
});
