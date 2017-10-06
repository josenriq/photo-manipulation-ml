import { Injectable } from '@angular/core';
import { Network, Architect, Trainer } from 'synaptic';

@Injectable()
export class NetworkService {

  private network: Network;
  private _isTrained: boolean = false;

  constructor() {
    this.network = new Architect.Perceptron(27, 8, 3);
  }

  load(data) {
    this.network = Architect.Perceptron.fromJSON(data);
    this._isTrained = true;
  }

  toJSON() {
    return this.network.toJSON();
  }

  train({ data, iterationCallback = null }: { data: any, iterationCallback?: Function }) {
    const trainer = new Trainer(this.network);
    return trainer.trainAsync(data, {
      rate: .1,
      iterations: 20000,
      error: .005,
      //shuffle: true,
      //log: 1000,
      cost: Trainer.cost.COST_ENTROPY,
      schedule: {
        every: 10,
        do: iterationCallback
      }
    }).then(() => {
      this._isTrained = true;
    });
  }

  get isTrained() {
    return this._isTrained;
  }

  activate(input) {
    return this.network.activate(input);
  }

}
