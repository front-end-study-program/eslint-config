
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
