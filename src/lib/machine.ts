import { interpret } from 'xstate/lib/interpreter'
import { createModel } from 'xstate/lib/model'

const model = createModel({
  id: 'YO'
},
{
  events: {
    next: (forReal: boolean) => ({ forReal })
  }
})

const machine = model.createMachine({
  id: 'test',
  context: model.initialContext,
  states: {
    one: {
      on: {
        next: 'two'
      }
    },
    two: {
      on: {
        next: 'one'
      }
    }
  }
})

export const service = interpret(machine).start()