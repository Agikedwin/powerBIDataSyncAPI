import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
  
} from "nexus";

export const HtsLinkageTracing = objectType({
  name: "HtsLinkageTracing", // <- Name of your type
  definition(t) {
    t.nullable.string("uuid");
    t.nullable.int("encounter_id");
    t.nullable.int("patient_id");
    t.nullable.int("location_id");
    t.nullable.string("visit_date");
    t.nullable.int("encounter_provider");
    t.nullable.string("date_created");
    t.nullable.string("date_last_modified");
    t.nullable.int("tracing_type");
    t.nullable.int("tracing_outcome");
    t.nullable.int("reason_not_contacted");
    t.nullable.int("voided");
  },
});

export const HtsLinkageTracingQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.list.nullable.field("getHtsLinkageTracing", {
      type: "HtsLinkageTracing",
      resolve(parent, args, context) {
        console.log("Fetching HtsLinkageTracing ...");
        return context.prisma.HtsLinkageTracing.findMany();
      },
    });
  },
});
