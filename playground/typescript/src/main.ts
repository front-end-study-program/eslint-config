const a:any = '1'

interface IUser {}

export function test () {
  return '1'
}

class Parent {
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
