//1.

 const div = document.querySelector("div")
  for(let i = 50; i < 100; i+= 10){
     div.innerHTML +=  `<p> ${i}</p>`}

//2.

 const strings_container = ["Написать цикл,", "который проходится по массиву строк,", "ля каждой строки создает параграф и добавляет его в div с классом strings_container.", "Строки взять произвольные"]
 for(let i = 0; i < strings_container.length; i++){
   div.innerHTML +=  `<p>${strings_container[i]}</p>`
 }

 //3.

 const users_container = [
         {
            first_name: "Simona",
            last_name: "Schmidt",
            age: 17
         },
         {
            first_name: "Ella",
            last_name: "Meier",
            age: 20        
         },
         {
            first_name: "Nadine",
            last_name: "Scholz",
            age: 15
         },
     ]
      for(let i = 0; i < users_container.length; i++) {
        if(users_container[i].age < 18)
        div.innerHTML += `<div class="users_container"> ${users_container[i].first_name} ${users_container[i].last_name}</div>`
           }
        