import { Slot } from 'qoq';
import json from 'koa-json';

export interface PrettyJsonOptions {
  /**
   * default to pretty response [true]
  */
  pretty?: boolean;

  /**
   * optional query-string param for pretty responses [none]
   */
  param?: string;

  /**
   * JSON spaces [2]
   */
  spaces?: number;
}

export class PrettyJson extends Slot<Slot.Web> {
  constructor(options?: PrettyJsonOptions) {
    super();

    this.use(json(options));
  }
}
