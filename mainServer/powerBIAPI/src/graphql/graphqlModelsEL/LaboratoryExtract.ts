import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const LaboratoryExtract = objectType({
  name: "LaboratoryExtract", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.string("encounter_id");
    t.nullable.string("patient_id");
    t.nullable.string("location_id");
    t.nullable.string("visit_date");
    t.nullable.string("visit_id");
    t.nullable.string("order_id");
    t.nullable.string("lab_test");
    t.nullable.string("urgency");
    t.nullable.string("order_reason");
    t.nullable.string("test_result");
    t.nullable.string("date_test_requested");
    t.nullable.string("date_test_result_received");
    t.nullable.string("test_requested_by");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.string("created_by");
  },
});

export const LaboratoryExtractQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getLaboratoryExtract", {
      type: "LaboratoryExtract",
      resolve(parent, args, context) {
        console.log("Fetching LaboratoryExtract ...");
        return context.prisma.laboratoryExtract.findMany();
      },
    });
  },
});
