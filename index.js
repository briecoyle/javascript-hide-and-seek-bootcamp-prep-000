function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedList = (document.querySelectorAll('.ranked-list'))

  for (let i = 0; i < rankedList.length; i += 1) {
    var children = rankedList[i].children

    for (let x = 0; x < children.length; x += 1) {
      children[x].innerHTML = parseInt(children[x].innerHTML) + n
    }
  }
}

function deepestChild() {
  var node = document.querySelector('#grand-node')
  var nextNode = node.children[0]

  while(nextNode) {
    node = nextNode;
    nextNode = node.children[0]
  }
  return node
}
