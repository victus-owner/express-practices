// // export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

import z from "zod";

// import { z } from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 19;

// const parseUserAge = ageSchema.parse(userAge);
// const { data, error, success } = ageSchema.safeParse(userAge);

// console.log(data);

const portSchema = z.coerce.number().min(1).max(64000).default(4004);

export const PORT = portSchema.parse(process.env.PORT);
