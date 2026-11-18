import * as migration_20261118_102639_initial from './20261118_102639_initial';

export const migrations = [
  {
    up: migration_20261118_102639_initial.up,
    down: migration_20261118_102639_initial.down,
    name: '20261118_102639_initial'
  },
];
