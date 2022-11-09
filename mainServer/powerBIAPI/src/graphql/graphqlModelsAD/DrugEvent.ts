import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DrugEvent = objectType({
    name: "DrugEvent", // <- Name of your type
    definition(t) {
        t.nullable.int("visit_id")
        t.nullable.int("provider")
        t.nullable.int("encounter_id")
        t.nullable.int("patient_id")
        t.nullable.int("voided")

        t.nullable.string("uuid")
        t.nullable.string("program")
        t.nullable.string("regimen")
        t.nullable.string("regimen_name")
        t.nullable.string("regimen_line")
        t.nullable.string("discontinued")
        t.nullable.string("regimen_discontinued")
        t.nullable.string("reason_discontinued")
        t.nullable.string("reason_discontinued_other")

        t.nullable.string("date_discontinued")
        t.nullable.string("date_started")
        t.nullable.string("visit_date")
        t.nullable.string("date_voided")
        t.nullable.string("date_created")
        t.nullable.string("date_last_modified")
    },
});



export const DrugEventQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getDrugEvent", {
            type: "DrugEvent",
            resolve(parent, args, context) {  
                console.log("Fetching DrugEvent ...");
                return  context.prisma.drugOrder.findMany();
            },
        });
    },
});

