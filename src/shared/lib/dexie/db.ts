import Dexie from "dexie"
import type { TableSchemaV1 } from "./schema"
import { tableSchemaV1 } from "./schema"
import { DB_NAME } from "./constant"

export const db = new Dexie(DB_NAME) as Dexie & TableSchemaV1

db.version(1).stores(tableSchemaV1)
