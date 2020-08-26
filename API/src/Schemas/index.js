import DivisionSchema from './Division';
import SoldierSchema from './Soldier';
import WeaponSchema from './Weapon';
import {mergeTypeDefs} from "@graphql-tools/merge";

export default mergeTypeDefs([
    DivisionSchema,
    SoldierSchema,
    WeaponSchema,
]);

