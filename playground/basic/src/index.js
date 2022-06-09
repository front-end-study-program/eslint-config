
class Parent {
  constructor () {
    this.name = 'parent'
    this.a = 'user'
  }
}

class Child extends Parent {
  constructor () {
    super()
    this.name = 'child'
  }
}
