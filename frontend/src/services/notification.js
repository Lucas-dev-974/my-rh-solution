export default function notification(message, priority){
  const domParser = new DOMParser();


  const notification = `
    <div id='notification'>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class=" " viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd" />
        </svg>
        <p>` + message + `</p>    
      </div>

      <span id="close_notif" class="inline-flex items-center cursor-pointer" >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    </div>
  `

  let htmlElement = domParser.parseFromString(notification, 'text/html');
  const close_btn = htmlElement.getElementById('close_notif')

  htmlElement     =  htmlElement.getElementById('notification')

  document.body.appendChild(htmlElement)

  const close = (element) => {
    htmlElement.classList.add('translate-x-[400px]') 
    setTimeout(() => htmlElement.remove(), 700)
  }

  close_btn.addEventListener('click', (event) => {
    close()
  })

  setTimeout(() => { 
     close()
  }, 10000)

}