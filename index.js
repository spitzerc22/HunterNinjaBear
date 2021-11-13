//toggle for buttons//

var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle()
})

//event listeners for 'how to play' reset'//

let popUp = document.getElementById("how").addEventListener("click", () => {
    let message = document.createElement('div');
    message.createAttribute('class: "modal-dialog modal-dialog-centered"');
    message.textContent()= "This is how you play"
    document.append(message)
})