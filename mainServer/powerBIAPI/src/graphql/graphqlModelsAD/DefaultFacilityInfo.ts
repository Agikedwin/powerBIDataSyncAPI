import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DefaultFacilityInfo = objectType({
    name: "DefaultFacilityInfo", // <- Name of your type
    definition(t) {
        t.nullable.int("siteCode");
        t.nullable.string("FacilityName");
    },
});


let resData:any;

export const DefaultFacilityInfoQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getDefaultFacilityInfo", {
            type: "DefaultFacilityInfo",
            resolve(parent, args, context) {  
                console.log("Fetching DefaultFacilityInfo ...");
                return  context.prisma.defaultFacilityInfo.findMany();
            },
        });
    },
});

