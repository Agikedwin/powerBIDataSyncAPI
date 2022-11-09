import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ContactsLinked = objectType({
    name: "ContactsLinked", // <- Name of your type
    definition(t) {
        t.nullable.int("patient_id");
        t.nullable.int("relationship_type");
        t.nullable.string("baseline_hiv_status");
        t.nullable.string("visit_date");
        t.nullable.string("final_test_result");
    },
});


let resData:any;

export const ContactsLinkedQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getContactsLinked", {
            type: "ContactsLinked",
            resolve(parent, args, context) {  
                console.log("Fetching ContactsLinked ...");
                return  context.prisma.contactsLinked.findMany();
            },
        });
    },
});

