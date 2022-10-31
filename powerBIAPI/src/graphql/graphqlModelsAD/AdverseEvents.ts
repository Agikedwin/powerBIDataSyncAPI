import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const AdverseEvents = objectType({
  name: "AdverseEvents", // <- Name of your type
  definition(t) {
    // t.nonNull.int("id");
    t.nullable.string("uuid");
    t.nullable.int("patient_id");
    t.nullable.int("mfl_code");
    t.nullable.string("form");
    t.nullable.int("provider");
    t.nullable.int("visit_id");
    t.nullable.int("provider");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("encounter_id");
    t.nullable.int("obs_id");
    t.nullable.int("cause");
    t.nullable.int("adverse_event");
    t.nullable.int("severity");
    t.nullable.string("start_date");
    t.nullable.int("voided");
    t.nullable.int("date_created");
    t.nullable.int("date_last_modified");
  },
});

export const AdverseEventsMutation = extendType({
  // 1

  type: "Mutation",
  definition(t) {
    t.nullable.field("postAdverseEvents", {
      type: "AdverseEvents",
      args: {
        uuid: nullable(stringArg()),
        form: nullable(stringArg()),
        mfl_code: nullable(intArg()),
        provider: nullable(intArg()),
        patient_id: nullable(intArg()),
        visit_id: nullable(intArg()),
        visit_date: nullable(stringArg()),
        location_id: nullable(intArg()),
        encounter_id: nullable(intArg()),
        obs_id: nullable(intArg()),
        cause: nullable(intArg()),
        adverse_event: nullable(intArg()),
        severity: nullable(intArg()),
        start_date: nullable(stringArg()),
        action_taken: nullable(intArg()),
        voided: nullable(intArg()),
        date_created: nullable(stringArg()),
        date_last_modified: nullable(stringArg()),
      },

      resolve(parent, args, context) {
        console.log(args);

        const newIncarePost = context.prisma.adverseEvents.create({
          data: {
            action_taken: args.action_taken,
            adverse_event: args.adverse_event,
            cause: args.cause,
            date_created: args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
            date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,
            encounter_id: args.encounter_id,
            form: args.form,
            location_id: args.location_id,
            mfl_code: 12905,
            obs_id: args.obs_id,
            patient_id: args.patient_id,
            provider: args.provider,
            severity: args.severity,
            start_date: args.start_date != null ? (new Date(args.start_date * 1).toISOString()) : null,
            uuid: args.uuid,
            visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
            visit_id: args.visit_id,
            voided: args.voided,
          },
        });
        return newIncarePost;
      },
    });
  },
});
