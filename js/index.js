var age = parseInt(prompt("Digite sua idade:"));

if(age >= 5 && age <= 7) {
  document.body.append("Sua categoria é Infantil A")
}else if(age >= 8 && age <= 10) {
  document.body.append("Sua categoria é Infantil B")
}else if(age >= 11 && age <= 13) {
  document.body.append("Sua categoria é Juvenil A")
}else if(age >= 14 && age <= 17) {
  document.body.append("Sua categoria é Juvenil B")
}else if(age >= 18) {
  document.body.append("Sua categoria é Adulto")
}else {
  document.body.append("Não existe categoria para você")
}
