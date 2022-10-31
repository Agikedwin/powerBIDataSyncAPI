import { prisma } from "@prisma/client";
import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const CccDefaulterTracing = objectType({
  name: "CccDefaulterTracing", // <- Name of your type
  definition(t) {
    // t.nonNull.int("id");
    t.nullable.string("uuid");
    t.nullable.int("patient_id");
    t.nullable.int("fml_code");
    t.nullable.int("provider");
    t.nullable.int("visit_id");
    t.nullable.int("mfl_code");
    t.nullable.string("visit_date");
    t.nullable.int("location_id");
    t.nullable.int("provider");
    t.nullable.int("encounter_id");
    t.nullable.int("tracing_type");
    t.nullable.int("reason_for_missed_appointment");
    t.nullable.string("non_coded_missed_appointment_reason");
    t.nullable.int("tracing_outcome");
    t.nullable.int("attempt_number");
    t.nullable.int("is_final_trace");
    t.nullable.int("true_status");
    t.nullable.int("cause_of_death");
    t.nullable.string("comments");
    t.nullable.string("booking_date");
    t.nullable.int("date_created");
    t.nullable.int("date_last_modified");
  },
});

export const CccDefaulterTracingMutation = extendType({
  // 1

  type: "Mutation",
  definition(t) {
    t.nonNull.field("postCccDefaulterTracing", {
      type: "CccDefaulterTracing",
      args: {
        uuid: nullable(stringArg()),
        provider: nullable(intArg()),
        patient_id: nullable(intArg()),
        visit_id: nullable(intArg()),
        mfl_code: nullable(intArg()),
        visit_date: nullable(stringArg()),
        location_id: nullable(intArg()),
        encounter_id: nullable(intArg()),
        tracing_type: nullable(intArg()),
        reason_for_missed_appointment: nullable(intArg()),
        non_coded_missed_appointment_reason: nullable(stringArg()),
        tracing_outcome: nullable(intArg()),
        attempt_number: nullable(intArg()),
        is_final_trace: nullable(intArg()),
        true_status: nullable(intArg()),
        cause_of_death: nullable(intArg()),
        comments: nullable(stringArg()),
        booking_date: nullable(stringArg()),
        date_created: nullable(stringArg()),
        date_last_modified: nullable(stringArg()),
      },

      resolve(parent, args, context) {
        console.log(args);

        const post = context.prisma.cccDefaulterTracing.create({
          data: {
            attempt_number: args.attempt_number,
            booking_date: args.booking_date,
            cause_of_death: args.cause_of_death,
            comments: args.comments,
            mfl_code: 12904,
            date_created: args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
            date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,
            encounter_id: args.encounter_id,
            is_final_trace: args.is_final_trace,
            location_id: args.location_id,
            non_coded_missed_appointment_reason: args.non_coded_missed_appointment_reason,
            patient_id: args.patient_id,
            provider: args.provider,
            reason_for_missed_appointment: args.reason_for_missed_appointment,
            tracing_outcome: args.tracing_outcome,
            tracing_type: args.tracing_type,
            true_status: args.true_status,
            uuid: args.uuid,
            visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
            visit_id: args.visit_id,
          },
        });
        return post;
      },
    });
  },
});
