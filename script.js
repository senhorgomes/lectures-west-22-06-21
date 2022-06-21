$(() => {
// const node = document.createElement("li");
// const textnode = document.createTextNode("Eggs");
// node.appendChild(textnode)
// const groceryList = document.getElementById("main-list")
// groceryList.appendChild(node)

  const $node = $('#main-list')
  const $groceryItem = $('<li>').text('Eggs')
  $node.append($groceryItem)
  $node.closest('div').find('p').click(()=>console.log("Pizza"))
})