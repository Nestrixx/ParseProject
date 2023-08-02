import { parse, transform, stringify } from 'csv/sync';
import { promises as fs } from "fs";

const data = await fs.readFile("./testData.csv", "utf8");


const rawRecords = parse(data);

// this is the step we manipulate the data to what we need it to be.
const refinedRecords = transform(rawRecords, (data) => {
    // setTimeout(() => { console.log(data) }, 3000)
    // return data;n
    // console.log(data);
    return data.map((value) => { return value.toUpperCase(); });
});

console.log(refinedRecords);