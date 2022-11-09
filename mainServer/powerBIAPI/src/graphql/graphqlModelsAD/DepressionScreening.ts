import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DepressionScreening = objectType({
    name: "DepressionScreening", // <- Name of your type
    definition(t) {
        t.nullable.string("uuid");
        t.nullable.int("patient_id");
        t.nullable.int("id_auto");
        t.nullable.string("visit_date");
        t.nonNull.int("location_id")
        t.nonNull.int("visit_id")
        t.nullable.int("provider");
        t.nullable.int("encounter_id");

        t.nullable.string("PHQ_9_rating");
        t.nullable.string("date_created");
        t.nullable.string("date_last_modified");
        t.nullable.int("voided");
    },
});


let resData:any;

export const DepressionScreeningQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getDepressionScreening", {
            type: "DepressionScreening",
            resolve(parent, args, context) {  
                console.log("Fetching DepressionScreening ...");
                return  context.prisma.depressionScreening.findMany();
            },
        });
    },
});

