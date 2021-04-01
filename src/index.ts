import { Slot } from 'qoq';
import json from 'koa-json';

type Options = NonNullable<Parameters<typeof json>[0]>;

export class PrettyJson extends Slot<Slot.Web> {
  constructor(options?: Options) {
    super();
    this.use(json(options));
  }
}
