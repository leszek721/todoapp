window.addEventListener("DOMContentLoaded", function(){
  console.log("DOMContentLoaded")
})
class leftSide {
  constructor() {
    this.toDoLists = []
  }
  add(newList)
  {
    this.toDoLists.push(newList)
  }
}
