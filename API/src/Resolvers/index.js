import DivisionResolver from './Division';
import SoldierResolver from './Soldier';
import WeaponResolver from './Weapon';
import * as _ from 'lodash';

const returnedResolver = _.merge(DivisionResolver,SoldierResolver, WeaponResolver);
export default returnedResolver;
