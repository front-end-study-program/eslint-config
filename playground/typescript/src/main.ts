const a:any = '1'

interface IUser {}

export function test () {
  return '1'
}

class Parent {
  public name: string
  constructor () {
    this.name = 'parent'
  }
}

class Child extends Parent {
  constructor () {
    super()
    this.name = 'child'
  }
}

const obj = {
  say () {
    return 'hello'
  }
}

const c = {
  hello () {
    return 'world'
  }
}
