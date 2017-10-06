import { Injectable } from '@angular/core';
import { Network, Architect, Trainer } from 'synaptic';

@Injectable()
export class NetworkService {

  private network: Network;

  constructor() {
    this.network = new Architect.Perceptron(27, 8, 3);
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
    });
  }

  activate(input) {
    return this.network.activate(input);
  }

}