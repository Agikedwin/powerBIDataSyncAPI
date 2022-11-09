import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const HtsContacts = objectType({
  name: "HtsContacts", // <- Name of your type
  definition(t) {
    t.nullable.string("id");
    t.nullable.string("patient_id");
    t.nullable.string("relationship_type");
    t.nullable.string("baseline_hiv_status");
    t.nullable.string("visit_date");
    t.nullable.string("test_type");
    t.nullable.string("test_1_result");
    t.nullable.string("test_2_result");
    t.nullable.string("final_test_result");
  },
});

export const HtsContactsQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHtsContacts", {
      type: "HtsContacts",
      resolve(parent, args, context) {
        console.log("Fetching HtsContacts ...");
        return context.prisma.htsContacts.findMany();
      },
    });
  },
});
