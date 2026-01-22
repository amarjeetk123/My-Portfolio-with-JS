function SendMSG(e) {
  e.preventDefault()
  let nam_txt = document.querySelector("#name")
  let email_txt = document.querySelector("#email")
  let subject_txt = document.querySelector("#subject")
  let message_txt = document.querySelector("#message")

  let temp = {
    from_name: nam_txt.value,
    to_name: "Amarjeet Kumar",
    email_id: email_txt.value,
    message: message_txt.value,
    subject: subject_txt.value,

  }

  if (nam_txt.value === "" || email_txt.value === "" || subject_txt.value === "" || message_txt.value === "") {
    return alert("Please Fill Complete Details!!")
  }

  emailjs.send('service_qf71jnv', 'template_b6yq4gz', temp)
    .then((res) => {
      if (res.status == 200) {
        success()
      } else {
        failure()
      }
    })


  nam_txt.value = ""
  email_txt.value = ""
  subject_txt.value = ""
  message_txt.value = ""


}

function success() {
  let sucsess = document.querySelector(".sucsess-msg")

  sucsess.style.display = "block"
  setTimeout(() => {
    sucsess.style.display = "none"
  }, 2000)
}

function failure() {
  let fail = document.querySelector(".failed-msg")
  fail.style.display = "block"
  setTimeout(() => {
    fail.style.display = "none"
  }, 2000)
}

  // d9edf392-bffd-4fa3-9d98-b2566146073d => token1
  //template_v4x8ndu
  // service id = service_f3etz3t