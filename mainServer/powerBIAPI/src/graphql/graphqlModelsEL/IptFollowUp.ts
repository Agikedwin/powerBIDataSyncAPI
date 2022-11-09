import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const IptFollowUp = objectType({
  name: "IptFollowUp", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.int("patient_id");
    t.nullable.int("visit_id");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("encounter_id");
    t.nullable.int("provider");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.string("ipt_due_date");
    t.nullable.string("date_collected_ipt");
    t.nullable.string("weight");
    t.nullable.string("hepatotoxity");
    t.nullable.string("peripheral_neuropathy");
    t.nullable.string("rash");
    t.nullable.string("adherence");
    t.nullable.string("action_taken");
    t.nullable.int("voided");
  },
});

export const IptFollowUpQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getIptFollowUp", {
      type: "IptFollowUp",
      resolve(parent, args, context) {
        console.log("Fetching IptFollowUp ...");
        return context.prisma.IptFollowUp.findMany();
      },
    });
  },
});
