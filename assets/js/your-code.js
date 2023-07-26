export function getAllDogs() {

return fetch("/dogs")
}

export function getDogNumberTwo() {
   return fetch("/dogs/2")
}

export function postNewDog() {
    return fetch("/dogs", {
        method: "POST",
        header: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchparams({
            name: "Jared",
            age: 5
        })
    })
}

export function postNewDogV2(name, age) {
     return fetch("/dogs", {
        method: "POST",
        header: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            name: 'jessie',
            age: 10
        })
     })
}

export function deleteDog(id) {
      return fetch(`/dogs/${id}/delete`, {
        method: "POST",
        header: {
            AUTH: "ckyut5wau0000jyv5bsrud90y"
        },
      });
}
