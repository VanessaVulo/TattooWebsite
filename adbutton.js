window.addEventListener('load', function(event){
    sendContactInformation()
})

function sendContactInformation()
{
    const form = document.getElementById('contact-info')

    form.addEventListener('submit', (event)=>{
        event.preventDefault()

        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())
        //this is creating object from the entries from the form a person submits

        console.log("formData", data)
    })
}