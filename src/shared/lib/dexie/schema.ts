import { EntityTable } from "dexie"
import { Friend } from "../../../entities/friend"

export type TableSchemaV1 = {
  friends: EntityTable<Friend>
}

export const tableSchemaV1 = {
  friends: '++id, name, age',
}
